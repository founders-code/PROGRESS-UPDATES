# KCS Capital · 4orm Finance — Progress Roadmap

A lightweight, static progress site for stakeholders, investors, and the team. It shows where the
company is across every workstream — what's **done**, what's **in progress**, and what's **next** —
plus a running **Recent wins** feed so small weekly wins stack up and show consistency over time.

No build step, no frameworks, no dependencies. Just HTML, CSS, and a little vanilla JavaScript.

## Pages

| File | Page |
|------|------|
| `index.html` | Overview — wins feed + all nine vertical pipelines side by side |
| `product.html` | Product & Engineering |
| `compliance.html` | Compliance & Regulatory |
| `capital.html` | Capital & Pre-Seed Raise |
| `grants.html` | Grants & Non-Dilutive |
| `bd.html` | Business Development & GTM |
| `marketing.html` | Marketing & Web |
| `team.html` | Team & Talent |
| `legal.html` | Legal & Corporate Structure |
| `investors.html` | Investor Pipeline & Future Rounds |

Shared assets live in `assets/`:

- `assets/data.js` — **all editable content** (the single source of truth)
- `assets/styles.css` — styling
- `assets/app.js` — render logic shared by every page

## Editing content — you only ever touch `assets/data.js`

Everything on the site is generated from the `DATA` object in `assets/data.js`.

**Add a weekly win** (newest first) to the `wins` array:

```js
{ date:"2026-06-10", vertical:"bd", text:"Signed the ATB pilot MOU." },
```

`date` is `YYYY-MM-DD`. `vertical` is one of the ids below (it becomes the colored tag).

**Update a checkpoint** inside any vertical's `checkpoints` array. The `state` controls the column
it lands in and its color:

- `"done"` → Completed (green)
- `"active"` → In progress (gold)
- `"todo"` → Upcoming (grey)

**Vertical ids:** `product`, `compliance`, `capital`, `grants`, `bd`, `marketing`, `team`, `legal`, `investors`.

Change a vertical's `pct`, `stage`, `benchmark`, `facts`, or `links` in the same object and all
pages update automatically — no other files to edit.

## Run it locally

It's a static site, so just open `index.html` in a browser. (If your browser blocks the local
`assets/*.js` loads via `file://`, run a tiny server instead:)

```bash
python3 -m http.server 8080
# then visit http://localhost:8080
```

## Deploy on GitHub Pages

1. Create a new repository and upload all of these files (keep the folder structure).
2. In the repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch**,
   pick `main` and `/ (root)`, save.
3. Your site goes live at `https://<your-username>.github.io/<repo-name>/`.

The included `.nojekyll` file tells GitHub Pages to serve the files as-is.

---

_Confidential — for stakeholders, investors, and team. Figures are working estimates synthesized
from ClickUp, project documents, recorded call notes, and the live sites._
