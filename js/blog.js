/* ============================================================
   Blog index — list, search, and tag filtering.
   ============================================================ */

let ALL_POSTS = [];
let activeTag = "all";
let query = "";

function applyFilters() {
  const q = query.trim().toLowerCase();
  const list = ALL_POSTS.filter((p) => {
    const tagOk = activeTag === "all" || (p.tags || []).includes(activeTag);
    if (!tagOk) return false;
    if (!q) return true;
    const haystack = [p.title, p.summary, ...(p.tags || [])]
      .join(" ")
      .toLowerCase();
    return haystack.includes(q);
  });

  const host = $("#post-list");
  host.innerHTML = list.length
    ? list.map((p) => postCard(p)).join("")
    : `<div class="empty">No posts match that search.</div>`;
  $("#post-count").textContent =
    `${list.length} post${list.length === 1 ? "" : "s"}`;
}

function renderControls() {
  const tags = [...new Set(ALL_POSTS.flatMap((p) => p.tags || []))].sort();
  $("#blog-controls").innerHTML = `
    <div class="search">
      ${ICONS.search}
      <input type="search" id="search-input" placeholder="Search posts…"
             aria-label="Search posts">
    </div>
    <div class="tag-filters" id="tag-filters">
      <button class="tag-btn active" data-tag="all">All</button>
      ${tags
        .map((t) => `<button class="tag-btn" data-tag="${esc(t)}">${esc(t)}</button>`)
        .join("")}
    </div>`;

  $("#search-input").addEventListener("input", (e) => {
    query = e.target.value;
    applyFilters();
  });

  $("#tag-filters").addEventListener("click", (e) => {
    const btn = e.target.closest(".tag-btn");
    if (!btn) return;
    activeTag = btn.dataset.tag;
    document
      .querySelectorAll(".tag-btn")
      .forEach((b) => b.classList.toggle("active", b === btn));
    applyFilters();
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  document.title = `Blog — ${CONTENT.name}`;
  renderHeader("blog");
  renderFooter();

  const posts = await loadPosts();

  if (posts === null) {
    $("#post-list").innerHTML = `<div class="empty">
      Couldn't load <code>posts/posts.json</code>.<br>
      If you opened this file directly, run a local server instead
      (see <code>README.md</code>).
    </div>`;
    return;
  }
  if (!posts.length) {
    $("#post-list").innerHTML = `<div class="empty">
      No posts yet. Add a markdown file to <code>posts/</code> and list it in
      <code>posts/posts.json</code>.
    </div>`;
    return;
  }

  ALL_POSTS = posts;
  renderControls();
  applyFilters();
  initReveal();
});
