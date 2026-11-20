This post is a reference. It shows every kind of formatting the blog renders, so
you can copy from it when writing something new.

## Adding a post

Two steps, every time:

1. Create `posts/your-slug.md` and write the body — no title heading needed, the
   title comes from the index.
2. Add an entry at the **top** of `posts/posts.json`:

```json
{
  "slug": "your-slug",
  "title": "Your post title",
  "date": "2026-09-02",
  "summary": "One sentence that shows up on the card.",
  "tags": ["python", "notes"],
  "draft": false
}
```

The `slug` must match the filename exactly, minus the `.md`. Set `"draft": true`
to keep a post hidden while you work on it.

## Text formatting

You get **bold**, *italic*, `inline code`, ~~strikethrough~~, and
[links](https://example.com). Paragraphs are separated by a blank line.

> Blockquotes are useful for pulling out a definition or a quote from something
> you're responding to.

## Code blocks

Fence code with triple backticks and name the language for syntax highlighting:

```python
def reading_time(text: str, wpm: int = 200) -> int:
    """Estimate reading time in minutes."""
    words = len(text.split())
    return max(1, round(words / wpm))
```

```javascript
const slugify = (title) =>
  title.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
```

## Lists

Unordered:

- first item
- second item
  - nested items work too

Ordered:

1. do this
2. then this

## Tables

| Field     | Required | Notes                              |
| --------- | -------- | ---------------------------------- |
| `slug`    | yes      | Must match the markdown filename   |
| `title`   | yes      | Shown on the card and post page    |
| `date`    | yes      | `YYYY-MM-DD`, used for sorting     |
| `summary` | no       | Card preview text                  |
| `tags`    | no       | Become filter buttons on the blog  |

## Images

Put the file in `assets/` and reference it with a relative path:

```markdown
![Alt text describing the image](assets/diagram.png)
```

---

That's everything. Delete this post once you've written a real one.
