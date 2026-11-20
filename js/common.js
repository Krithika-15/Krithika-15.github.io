/* ============================================================
   Shared helpers + chrome (header, nav, footer, scroll reveal).
   Loaded on every page.
   ============================================================ */

/** Escape a string for safe insertion into HTML. */
function esc(str) {
  return String(str ?? "").replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[c]));
}

/** Shorthand for querySelector. */
const $ = (sel, root = document) => root.querySelector(sel);

/** "2025-03-14" -> "14 March 2025". Falls back to the raw string. */
function formatDate(iso) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return String(iso ?? "");
  return d.toLocaleDateString("en-GB", {
    day: "numeric", month: "long", year: "numeric",
  });
}

/** Fetch JSON, returning null instead of throwing (e.g. opened via file://). */
async function fetchJSON(path) {
  try {
    const res = await fetch(path, { cache: "no-cache" });
    if (!res.ok) throw new Error(res.status);
    return await res.json();
  } catch (err) {
    console.warn(`Could not load ${path}.`, err);
    return null;
  }
}

/** Load posts.json, newest first. */
async function loadPosts() {
  const posts = await fetchJSON("posts/posts.json");
  if (!Array.isArray(posts)) return null;
  return posts
    .filter((p) => p.draft !== true)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

/** Markup for one post card. `base` prefixes links from a subdirectory. */
function postCard(post, base = "") {
  const tags = (post.tags || [])
    .map((t) => `<span class="chip">${esc(t)}</span>`)
    .join("");
  return `
    <a class="post-card" href="${base}post.html?slug=${encodeURIComponent(post.slug)}">
      <div class="post-meta">
        <time datetime="${esc(post.date)}">${esc(formatDate(post.date))}</time>
        ${post.readingTime ? `<span>&middot;</span><span>${esc(post.readingTime)}</span>` : ""}
      </div>
      <h3>${esc(post.title)}</h3>
      <p>${esc(post.summary || "")}</p>
      ${tags ? `<div class="post-tags">${tags}</div>` : ""}
    </a>`;
}

/* ---- Site chrome ------------------------------------------- */

/** Render the sticky header. `page` marks the active nav link. */
function renderHeader(page) {
  const header = $("#site-header");
  if (!header) return;
  const home = page === "home" ? "" : "index.html";
  const links = [
    { href: `${home}#about`,    label: "About",    id: "about" },
    { href: `${home}#projects`, label: "Projects", id: "projects" },
    { href: "blog.html",        label: "Blog",     id: "blog" },
    { href: `${home}#contact`,  label: "Contact",  id: "contact" },
  ].filter((l) => l.id !== "blog" || CONTENT.blog !== false);

  header.innerHTML = `
    <div class="wrap nav">
      <a class="brand" href="index.html">${esc(CONTENT.name)}<span>.</span></a>
      <button class="nav-toggle" id="nav-toggle" aria-label="Toggle menu"
              aria-expanded="false" aria-controls="nav-links">${ICONS.menu}</button>
      <ul class="nav-links" id="nav-links">
        ${links
          .map(
            (l) =>
              `<li><a href="${l.href}" data-nav="${l.id}"${
                page === l.id ? ' class="active"' : ""
              }>${l.label}</a></li>`
          )
          .join("")}
      </ul>
    </div>`;

  const toggle = $("#nav-toggle");
  const list = $("#nav-links");
  toggle.addEventListener("click", () => {
    const open = list.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  list.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      list.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });

  const onScroll = () =>
    header.classList.toggle("scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/** Render the footer. */
function renderFooter() {
  const footer = $("#site-footer");
  if (!footer) return;
  const socials = (CONTENT.socials || [])
    .map(
      (s) =>
        `<a href="${esc(s.url)}" aria-label="${esc(s.label)}" target="_blank"
            rel="noopener noreferrer">${ICONS[s.icon] || ICONS.external}</a>`
    )
    .join("");
  footer.innerHTML = `
    <div class="wrap footer-inner">
      <span>&copy; ${new Date().getFullYear()} ${esc(CONTENT.name)}. Built by hand.</span>
      <div class="socials">${socials}</div>
    </div>`;
}

/** Fade sections in as they enter the viewport. */
function initReveal() {
  const targets = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -60px 0px", threshold: 0.05 }
  );
  targets.forEach((el) => io.observe(el));
}

/** Highlight the nav link for whichever section is on screen (home only). */
function initScrollSpy() {
  const sections = [...document.querySelectorAll("section[id]")];
  if (!sections.length || !("IntersectionObserver" in window)) return;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        document
          .querySelectorAll(".nav-links a")
          .forEach((a) => a.classList.remove("active"));
        const link = document.querySelector(
          `.nav-links a[data-nav="${entry.target.id}"]`
        );
        if (link) link.classList.add("active");
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  sections.forEach((s) => io.observe(s));
}
