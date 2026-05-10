# Augusto Lima Quarto website

This is a simplified Quarto source version rebuilt from the uploaded rendered HTML pages.

## How to edit

Edit the `.qmd` files directly:

- `index.qmd` — landing page
- `about.qmd` — about page
- `research.qmd` — project overview
- `thermalmap.qmd` — Urban Heat Islands project
- `tapado.qmd` — Tapado Glacier project
- `glacimontis.qmd` — GLACIMONTIS page placeholder
- `uibcollaborative.qmd` — GeoBridge page
- `fieldwork.qmd` — fieldwork gallery and map
- `activities.qmd` — grants, conferences, summer schools, talks, and outreach
- `CV.qmd` — embedded CV PDF

Most visual settings are in `styles.css`.
The site navigation is controlled in `_quarto.yml`.

## Important

The uploaded files included HTML and CSS, but not the image/PDF assets. The `.qmd` files keep your old paths, so copy your existing `img/` folder and `CV_files/AugustoCurriculum.pdf` into this project.

## Preview locally

```bash
quarto preview
```

## Render the site

```bash
quarto render
```

By default, the rendered website will be placed in the `docs/` folder, which works well for GitHub Pages.
