# Portfolio

A static portfolio site with a markdown-driven blog. No build step, no
dependencies to install — just HTML, CSS, and vanilla JavaScript.

## Running it locally

The site loads your posts with `fetch`, which browsers block on `file://` URLs.
So open it through a local server rather than double-clicking `index.html`:

```bash
python -m http.server 5173
```

Then visit <http://localhost:5173>. If you have Node instead of Python:

```bash
npx serve -l 5173
```

## Files

```
index.html          Home page
blog.html           Blog index (search + tag filters)
post.html           Renders a single post, e.g. post.html?slug=hello-world
css/style.css       All styling. Design tokens live at the top.
js/content.js       ← YOUR CONTENT. Name, bio, skills, projects, links.
js/icons.js         Inline SVG icons
js/common.js        Header, footer, shared helpers
js/home.js          Renders the home page from content.js
js/blog.js          Blog index behaviour
js/post.js          Markdown loading and rendering
posts/posts.json    The list of posts — the blog reads this
posts/*.md          One markdown file per post
assets/             Images, favicon, resume.pdf
```

## Editing your details

Everything on the home page comes from **`js/content.js`**. Open it and replace
the placeholder values — name, tagline, socials, skills, projects, experience.
Each field is commented. You shouldn't need to touch the HTML.

To add your resume, drop a `resume.pdf` into `assets/`. To remove the button,
set `resume: null`.

## Adding a blog post

1. Create `posts/my-post-slug.md` and write the body in markdown. Don't add a
   title heading — the title comes from step 2.
2. Add an entry at the **top** of `posts/posts.json`:

   ```json
   {
     "slug": "my-post-slug",
     "title": "My post title",
     "date": "2026-09-15",
     "summary": "One sentence shown on the blog card.",
     "tags": ["python", "notes"],
     "draft": false
   }
   ```

`slug` must match the filename without `.md`. Posts sort by `date` (newest
first) automatically, and every distinct tag becomes a filter button on the blog
page. Set `"draft": true` to hide a post while you're still writing it.

Supported markdown: headings, bold/italic, links, lists, tables, blockquotes,
images, and fenced code blocks with syntax highlighting. The post
**How this blog works** is a live reference for all of it — delete it once you
don't need it.

## Changing the look

The colours and spacing are CSS custom properties at the top of
`css/style.css`. Changing one line re-skins the site:

```css
--accent: #7aa2f7;   /* try #a3e635, #f472b6, #34d399 */
```

## Deploying

**GitHub Pages** — free, and the usual choice for a portfolio:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOURNAME/YOURNAME.github.io.git
git push -u origin main
```

Then in the repository: **Settings → Pages → Source: main / root**. The site
goes live at `https://YOURNAME.github.io`.

**Netlify or Vercel** — drag the folder onto their dashboard, or connect the
repo. No build command; publish directory is the project root.

## Before you publish

- [x] Content in `js/content.js` filled in from the CV
- [x] GitHub and LinkedIn URLs set
- [x] `assets/resume.pdf` in place (copy of `Krithika_Ravichandran_CV.pdf`)
- [x] Titles and meta descriptions set on `index.html` and `blog.html`
- [x] GitHub repo links added to the projects in `content.js`
- [ ] Add screenshots for the projects (`image: "assets/….png"`)
- [ ] Add a description to the `UiPath---Practice-Projects` repo on GitHub — it
      currently has none, which looks unfinished next to the others
- [ ] Delete the two sample posts and write your own
- [ ] Re-copy `assets/resume.pdf` whenever the CV changes — it's a copy, not a link
- [ ] After deploying, add `og:url` and an `og:image` to `index.html`
