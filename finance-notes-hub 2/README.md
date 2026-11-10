# Finance Notes Hub

A clean, expandable finance knowledge website powered by **HTML + CSS + JavaScript**, with instructions for future AI agents in **[AGENTS.md](AGENTS.md)**.

## Features

- Four collections: Financial Accounting, Corporate Finance, Investment, Economics.
- Eight published notes with English explanations, Traditional Chinese titles, formulas, and examples.
- Instant search (English/Traditional Chinese), responsive cards, and note detail pages.
- A documented **repeatable workflow** for adding topics, notes, and pages.
- No backend, dependencies, build command, or API key required.

## View locally

Open `index.html` in your browser, or run a local static server from the project folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy to GitHub Pages

1. Create a **public** GitHub repository, for example `finance-notes-hub`.
2. Upload **all files and folders** from this project (keep `index.html` in the repository root).
3. Open repository **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**; set branch to `main` and folder to `/(root)`; save.
5. After GitHub reports the site as published, browse to `https://YOUR-USERNAME.github.io/finance-notes-hub/`.
6. Confirm that a topic and a note link work. Your repository name may change the URL.

**Important:** This zip/project is ready to upload, but it is **not automatically published** to your account.

## How to extend

Read **AGENTS.md §7**. For example, ask an AI: “Follow AGENTS.md and add a note on Internal Rate of Return under Corporate Finance.” The agent should update `assets/js/data.js`, create `notes/irr.html` from an existing note shell, and verify links/search. It does not need to rebuild the homepage or category pages.

## Project structure

```text
AGENTS.md
README.md
index.html
about.html
assets/css/style.css
assets/js/data.js
assets/js/app.js
topics/*.html
notes/*.html
```

## Educational note

Information is for general learning and does not constitute investment advice. Examples are simplified.
