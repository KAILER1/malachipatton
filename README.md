# MP Creativity Portfolio

Static portfolio site for Malachi Patton — creative design, advertising, packaging, and photography.

## Project Structure

```
Portfolio-Final/
├── index.html          # Home
├── about.html          # About Me
├── advertising.html    # Advertising projects
├── design.html         # Graphic design projects
├── packaging.html      # Packaging design projects
├── photography.html    # Photography gallery
├── style.css           # Main stylesheet (all shared styles)
├── shared.js           # Shared nav + footer (edit here to update all pages)
│
├── images/             # All images, grouped by category
│   ├── advertising/
│   ├── design/
│   ├── packaging/
│   ├── photography/
│   └── about/
│
└── projects/           # Project detail pages
    ├── advertising/
    └── design/
```

## How the Nav & Footer Work

The navigation and footer HTML live in **one file**: `shared.js`. Every page has two placeholder `<div>`s and a `<script>` tag:

```html
<div id="nav-placeholder"></div>
<!-- page content -->
<div id="footer-placeholder"></div>
<script src="shared.js"></script>
```

When the page loads, `shared.js` fills in the nav and footer automatically. It also handles:
- Correct link paths (root pages vs. project pages in `projects/category/`)
- Highlighting the active nav link

**No build step. No Python. No Node. Just edit and save.**

### Updating the navigation or footer

Open `shared.js` and edit the HTML strings inside. That's it — every page picks up the change.

## Styles

All styles live in `style.css`. Theme variables are defined at the top:

```css
:root {
  --color-bg: #f5f5f5;
  --color-text: #222;
  --color-text-muted: #555;
  --font-sans: 'Inter', sans-serif;
}
```

## Dependencies

- [W3.CSS](https://www.w3schools.com/w3css/) (loaded from CDN)
- [Google Fonts – Inter](https://fonts.google.com/specimen/Inter)

## Pages

| Page | URL | Content |
|------|-----|---------|
| Home | `index.html` | Hero + category cards |
| Advertising | `advertising.html` | Project list → `projects/advertising/*.html` |
| Design | `design.html` | Project grid |
| Packaging | `packaging.html` | Project details + images |
| Photography | `photography.html` | Photo gallery with lightbox |
| About | `about.html` | Bio + portrait |

## Adding New Content

**New project detail page**: Create a file in `projects/<category>/` using any existing page as a template. Make sure it includes:
- `<div id="nav-placeholder"></div>` after the skip link
- `<div id="footer-placeholder"></div>` before the scripts
- `<script src="../../shared.js"></script>` before `</body>`

**New images**: Place in `images/<category>/` and reference from the HTML.
