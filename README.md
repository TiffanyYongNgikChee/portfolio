# Tiffany Yong — Portfolio

Live demo: https://tiffanyyongngikchee.github.io/portfolio/

Short description
---------------

This repository contains a single-page portfolio site built with React + Vite + Tailwind CSS. The site showcases featured projects, a short bio, contact details and a downloadable CV.

Quick links
-----------

- Live site: https://tiffanyyongngikchee.github.io/portfolio/
- Source (this repo): https://github.com/TiffanyYongNgikChee/portfolio

Repository layout
-----------------

- `site/` — front-end application (Vite + React + Tailwind). The production output is written to `site/dist/`.
- `site/src/` — React source files (components, sections, assets, styles).
- `site/src/assets/` — images and optimized screenshots used on the site.
- `.github/workflows/deploy.yml` — GitHub Actions workflow that builds and deploys to GitHub Pages.

Quick start (local)
-------------------

1. Clone the repository:

```
git clone https://github.com/TiffanyYongNgikChee/portfolio.git
cd portfolio/site
```

2. Install and run in development:

```
npm install
npm run dev
```

3. Build for production:

```
npm run build
```

Notes about GitHub Pages
------------------------

- The site is published from the `gh-pages` branch. The Vite `base` is set to `/portfolio/` so asset paths work on GitHub Pages.
- If you update `site/` source, run `npm run build` and push the contents of `site/dist` to `gh-pages` (this repository includes a workflow that can do this automatically when pushed to `main`).

Contributing
------------

See `CONTRIBUTING.md` for guidance on reporting issues or submitting improvements. Small fixes (typos, accessibility tweaks, images) are welcome.

Contact
-------

- CV: /portfolio/TiffanyYongNgikChee.pdf (served from the live site)
- Email: tiffanyyongngikchee1997@gmail.com

License
-------

Unless otherwise noted, the repository is free to use for portfolio/demo purposes. If you want a formal license added, open an issue or PR.
