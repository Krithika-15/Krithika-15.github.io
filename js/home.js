/* ============================================================
   Home page — renders every section from CONTENT (js/content.js).
   ============================================================ */

function renderHero() {
  const socials = (CONTENT.socials || [])
    .map(
      (s) =>
        `<a href="${esc(s.url)}" aria-label="${esc(s.label)}" target="_blank"
            rel="noopener noreferrer">${ICONS[s.icon] || ICONS.external}</a>`
    )
    .join("");

  $("#hero").innerHTML = `
    <div class="wrap">
      <p class="eyebrow">${esc(CONTENT.location || "")}</p>
      <h1>${esc(CONTENT.name)}</h1>
      <p class="role">${esc(CONTENT.role)}</p>
      <p class="tagline">${esc(CONTENT.tagline)}</p>
      <div class="hero-actions">
        <a class="btn btn-primary" href="#projects">View work ${ICONS.arrow}</a>
        ${
          CONTENT.resume
            ? `<a class="btn" href="${esc(CONTENT.resume)}" target="_blank"
                  rel="noopener">${ICONS.download} Resume</a>`
            : ""
        }
        <div class="socials">${socials}</div>
      </div>
    </div>`;
}

function renderAbout() {
  const paras = (CONTENT.about || []).map((p) => `<p>${esc(p)}</p>`).join("");
  const facts = (CONTENT.facts || [])
    .map(
      (f) => `<div class="fact">
        <dt>${esc(f.label)}</dt>
        <dd>${esc(f.value)}</dd>
      </div>`
    )
    .join("");

  $("#about").innerHTML = `
    <div class="wrap">
      <div class="section-head">
        <h2>About</h2><div class="rule"></div>
      </div>
      <div class="about-grid">
        <div class="about-text">${paras}</div>
        ${facts ? `<dl class="facts">${facts}</dl>` : ""}
      </div>
    </div>`;
}

function renderSkills() {
  const groups = (CONTENT.skills || [])
    .map(
      (g) => `<div class="skill-group">
        <h3>${esc(g.group)}</h3>
        <ul class="chips">
          ${g.items.map((i) => `<li class="chip">${esc(i)}</li>`).join("")}
        </ul>
      </div>`
    )
    .join("");

  $("#skills").innerHTML = `
    <div class="wrap">
      <div class="section-head">
        <h2>Skills</h2><div class="rule"></div>
      </div>
      <div class="skills-grid">${groups}</div>
    </div>`;
}

function renderProjects() {
  const cards = (CONTENT.projects || [])
    .map((p) => {
      const tags = (p.tags || [])
        .map((t) => `<span class="chip">${esc(t)}</span>`)
        .join("");
      const links = [
        p.repo &&
          `<a href="${esc(p.repo)}" target="_blank" rel="noopener noreferrer">
             ${ICONS.github} View code on GitHub
             <span class="arrow">${ICONS.arrow}</span></a>`,
        p.demo &&
          `<a href="${esc(p.demo)}" target="_blank" rel="noopener noreferrer">
             ${ICONS.external} Live demo</a>`,
      ]
        .filter(Boolean)
        .join("");

      return `<article class="project${p.featured ? " featured" : ""}">
        ${p.image ? `<img src="${esc(p.image)}" alt="${esc(p.title)} screenshot" loading="lazy">` : ""}
        <div class="project-top">
          <h3>${esc(p.title)}</h3>
          ${p.year ? `<span class="year">${esc(p.year)}</span>` : ""}
        </div>
        <p>${esc(p.blurb)}</p>
        ${tags ? `<div class="post-tags">${tags}</div>` : ""}
        ${
          links
            ? `<div class="project-links">${links}</div>`
            : p.note
            ? `<p class="project-note">${esc(p.note)}</p>`
            : ""
        }
      </article>`;
    })
    .join("");

  $("#projects").innerHTML = `
    <div class="wrap">
      <div class="section-head">
        <h2>Projects</h2><div class="rule"></div>
      </div>
      <div class="projects-grid">${cards}</div>
    </div>`;
}

function renderExperience() {
  const items = CONTENT.experience || [];
  const host = $("#experience");
  if (!items.length) { host.remove(); return; }

  const rows = items
    .map(
      (e) => `<div class="tl-item">
        <div class="tl-period">${esc(e.period)}</div>
        <div class="tl-body">
          <h3>${esc(e.role)}</h3>
          <div class="tl-org">${esc(e.org)}</div>
          ${
            (e.points || []).length
              ? `<ul>${e.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>`
              : ""
          }
          ${
            e.link
              ? `<a class="tl-link" href="${esc(e.link)}" target="_blank"
                    rel="noopener noreferrer">${ICONS.external}
                    ${esc(e.linkLabel || "View credential")}</a>`
              : ""
          }
        </div>
      </div>`
    )
    .join("");

  host.innerHTML = `
    <div class="wrap">
      <div class="section-head">
        <h2>Experience</h2><div class="rule"></div>
      </div>
      <div class="timeline">${rows}</div>
    </div>`;
}

function renderContact() {
  const c = CONTENT.contact || {};
  $("#contact").innerHTML = `
    <div class="wrap">
      <div class="contact-card">
        <h2>${esc(c.heading || "Get in touch")}</h2>
        <p>${esc(c.body || "")}</p>
        <a class="btn btn-primary" href="mailto:${esc(CONTENT.email)}">
          ${ICONS.mail} ${esc(CONTENT.email)}
        </a>
      </div>
    </div>`;
}

/** Latest three posts, shown between projects and contact. */
async function renderLatestPosts() {
  const host = $("#writing");
  if (CONTENT.blog === false) { host.remove(); return; }
  const posts = await loadPosts();

  if (!posts || !posts.length) {
    host.innerHTML = `
      <div class="wrap">
        <div class="section-head"><h2>Writing</h2><div class="rule"></div></div>
        <div class="empty">
          No posts yet — add one in <code>posts/</code> and list it in
          <code>posts/posts.json</code>.
        </div>
      </div>`;
    return;
  }

  host.innerHTML = `
    <div class="wrap">
      <div class="section-head">
        <h2>Writing</h2><div class="rule"></div>
        <a href="blog.html" style="font-size:.9rem;white-space:nowrap">All posts &rarr;</a>
      </div>
      <div class="posts">${posts.slice(0, 3).map((p) => postCard(p)).join("")}</div>
    </div>`;
}

document.addEventListener("DOMContentLoaded", async () => {
  document.title = `${CONTENT.name} — ${CONTENT.role}`;
  renderHeader("home");
  renderHero();
  renderAbout();
  renderSkills();
  renderProjects();
  renderExperience();
  await renderLatestPosts();
  renderContact();
  renderFooter();
  initReveal();
  initScrollSpy();
});
