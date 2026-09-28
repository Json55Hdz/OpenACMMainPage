# OpenACM — Website & Documentation

The public website for [OpenACM](https://github.com/Json55Hdz/OpenACM), the self-hosted autonomous AI agent. It contains:

- **Landing page** (`/`) — what OpenACM is, features, install commands and requirements
- **Documentation** (`/docs/:slug`) — every Markdown file from the OpenACM repository's `docs/` folder, rendered with a searchable, sectioned sidebar, "On this page" table of contents, syntax highlighting and working cross-links between docs

Built with React 19, Vite, React Router, Tailwind CSS (+ typography plugin), `react-markdown` (GFM, `rehype-slug`, `rehype-raw`) and `react-syntax-highlighter`.

---

## Project Layout

```
OpenACMMainPage/
├── src/
│   ├── App.jsx              # Routes: /, /docs, /docs/:slug (docs routes are lazy-loaded)
│   ├── docsData.js          # GENERATED from ../OpenACM/docs/*.md — do not edit by hand
│   └── pages/
│       ├── Landing.jsx      # Landing page (version, features, install, requirements)
│       ├── DocsLayout.jsx   # Docs shell: navbar, search, sidebar grouped by section
│       ├── DocsIndex.jsx    # /docs → first document
│       └── DocPage.jsx      # Markdown rendering, link rewriting, table of contents
├── public/                  # logo.png, favicon.svg, icons.svg
├── update_docs.py           # Regenerates src/docsData.js
├── Dockerfile               # Production image (build + nginx)
├── Dockerfile.dev           # Dev image (Vite dev server with hot reload)
└── docker-compose.yml       # `dev` (port 5173) and `prod` (port 3000) services
```

---

## Development

Requires Node.js 20+.

```bash
npm ci            # install exact dependencies from package-lock.json
npm run dev       # dev server with hot reload → http://localhost:5173
npm run lint      # ESLint
npm run build     # production build → dist/
npm run preview   # serve dist/ locally → http://localhost:4173
```

The site is a single-page app: when you deploy `dist/` to any static host, route every unknown path to `index.html` (the provided nginx config does this).

---

## Updating the Documentation

The docs pages are **generated**. The source of truth is the `docs/` folder of the OpenACM repository, which must be checked out next to this one:

```
parent/
├── OpenACM/           ← product repo (docs/*.md live here)
└── OpenACMMainPage/   ← this repo
```

After editing any `OpenACM/docs/*.md`, regenerate and commit `src/docsData.js`:

```bash
python update_docs.py
npm run build          # optional: make sure everything still renders
```

What `update_docs.py` does:

- Reads every `*.md` directly inside `../OpenACM/docs/` (subfolders such as `docs/superpowers/` are not published).
- **Slug** = file name without `.md`, lowercased, `_` → `-` (`DEPLOY_VPS.md` → `/docs/deploy-vps`).
- **Title** = the first `# Heading` of the file (overrides in `TITLE_OVERRIDES`, e.g. the docs `README.md` becomes "Documentation Index").
- **Section** (sidebar group):
  - `Documentation` — numbered files (`01-…` to `32-…`), in numeric order
  - `Guides` — the setup/how-to guides listed in `GUIDES` (any other unnumbered file also lands here)
  - `Project` — `README.md` (index), `CONTRIBUTING.md`, `SECURITY.md`, `ROADMAP_INTEGRATION.md`, `26-dev-mode-plugin-plan.md`
- Writes `src/docsData.js` exporting `docSections` and `docsData` (`slug`, `title`, `section`, `content`), escaping backticks and `${` for the JS template literals.

To add a new doc, just drop the `.md` file in `OpenACM/docs/` and rerun the script — numbered files are picked up automatically; add unnumbered ones to `GUIDES` or `PROJECT` to control their position.

### Links inside docs

Write links the way they work on GitHub; `DocPage.jsx` rewrites them for the site:

| In the Markdown | On the site |
|-----------------|-------------|
| `./07-agents.md#channels` | `/docs/07-agents#channels` |
| `../CHANGELOG.md`, `../LICENSE` (outside `docs/`) | the file on GitHub |
| `https://…` | opens in a new tab |

Heading anchors are generated with `rehype-slug` (GitHub-style), so `#section-name` anchors that work on GitHub work here too.

---

## Docker

**Production** (multi-stage: `npm ci && npm run build`, then served by `nginx:alpine` with SPA fallback):

```bash
docker build -t openacm-site .
docker run -d -p 3000:80 --name openacm-site openacm-site
# → http://localhost:3000
```

**With Compose:**

```bash
docker compose up -d --build prod   # production build on http://localhost:3000
docker compose up dev               # Vite dev server with hot reload on http://localhost:5173
```

The image uses the committed `src/docsData.js`, so run `python update_docs.py` **before** building if the docs changed — the OpenACM repo is not needed inside the container.

---

## Credits

OpenACM is created and maintained by [Jeison Hernandez](https://github.com/Json55Hdz) (JsonProductions) and released under the MIT License — see the [OpenACM repository](https://github.com/Json55Hdz/OpenACM).
