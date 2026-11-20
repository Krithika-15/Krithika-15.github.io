/* ============================================================
   Single post — loads posts/<slug>.md and renders the markdown.
   ============================================================ */

/** Remove a leading YAML front-matter block, if the file has one. */
function stripFrontMatter(md) {
  return md.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, "");
}

/** Rough reading time, at 200 words per minute. */
function readingTime(md) {
  const words = md.trim().split(/\s+/).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
}

function showError(message) {
  $("#article").innerHTML = `
    <div class="empty">
      ${message}<br><br>
      <a class="btn" href="blog.html">${ICONS.arrowLeft} Back to blog</a>
    </div>`;
}

/** Thin progress bar tracking how far the article has been read. */
function initProgress() {
  const bar = $("#progress");
  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = max > 0 ? `${(window.scrollY / max) * 100}%` : "0%";
  };
  update();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
}

document.addEventListener("DOMContentLoaded", async () => {
  renderHeader("blog");
  renderFooter();

  const slug = new URLSearchParams(location.search).get("slug");
  if (!slug) {
    showError("No post specified.");
    return;
  }

  const posts = await loadPosts();
  if (posts === null) {
    showError(
      "Couldn't load <code>posts/posts.json</code>. If you opened this file " +
      "directly, run a local server instead (see <code>README.md</code>)."
    );
    return;
  }

  const index = posts.findIndex((p) => p.slug === slug);
  if (index === -1) {
    showError(`No post found with the slug <code>${esc(slug)}</code>.`);
    return;
  }
  const post = posts[index];

  // Slug comes from the URL, so keep it to a safe filename shape.
  if (!/^[a-z0-9-]+$/i.test(post.slug)) {
    showError("That post has an invalid slug.");
    return;
  }

  let markdown;
  try {
    const res = await fetch(`posts/${post.slug}.md`, { cache: "no-cache" });
    if (!res.ok) throw new Error(res.status);
    markdown = stripFrontMatter(await res.text());
  } catch {
    showError(`Couldn't load <code>posts/${esc(post.slug)}.md</code>.`);
    return;
  }

  document.title = `${post.title} — ${CONTENT.name}`;
  const meta = document.querySelector('meta[name="description"]');
  if (meta && post.summary) meta.setAttribute("content", post.summary);

  marked.setOptions({
    gfm: true,
    breaks: false,
    highlight: (code, lang) => {
      if (window.hljs && lang && hljs.getLanguage(lang)) {
        return hljs.highlight(code, { language: lang }).value;
      }
      return window.hljs ? hljs.highlightAuto(code).value : code;
    },
  });

  const html = DOMPurify.sanitize(marked.parse(markdown));
  const tags = (post.tags || [])
    .map((t) => `<span class="chip">${esc(t)}</span>`)
    .join("");

  // posts.json order is newest-first, so "previous" sits at a higher index.
  const newer = posts[index - 1];
  const older = posts[index + 1];
  const navLink = (p, dir) =>
    p
      ? `<a class="btn" href="post.html?slug=${encodeURIComponent(p.slug)}">
           ${dir === "prev" ? ICONS.arrowLeft : ""} ${esc(p.title)}
           ${dir === "next" ? ICONS.arrow : ""}</a>`
      : "<span></span>";

  $("#article").innerHTML = `
    <header class="article-header">
      <a href="blog.html" class="post-meta" style="color:var(--accent)">
        ${ICONS.arrowLeft} All posts
      </a>
      <h1>${esc(post.title)}</h1>
      <div class="post-meta">
        <time datetime="${esc(post.date)}">${esc(formatDate(post.date))}</time>
        <span>&middot;</span>
        <span>${esc(post.readingTime || readingTime(markdown))}</span>
      </div>
      ${tags ? `<div class="post-tags">${tags}</div>` : ""}
    </header>
    <div class="prose">${html}</div>
    <footer class="article-footer">
      ${navLink(older, "prev")}
      ${navLink(newer, "next")}
    </footer>`;

  initProgress();
});
