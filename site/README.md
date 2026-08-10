# Tiffany Yong — Portfolio (site)

This folder contains a Vite + React + Tailwind portfolio site.

Build

```bash
cd site
npm ci
npm run build
```

Preview production build locally

```bash
npm run preview -- --port 5174
```

Deployment (GitHub Pages)

- Push to the `main` branch on GitHub. The included GitHub Action will build and deploy `site/dist` to the `gh-pages` branch.
- After the workflow completes, enable GitHub Pages in the repository settings (if not auto-configured) and choose the `gh-pages` branch as the source. Your site will be available at `https://<your-github-username>.github.io/<repo-name>/`.

If you want me to set up a custom domain or configure the Pages settings, tell me and I can add a `CNAME` file and adjust the workflow.
# Tiffany Yong — Portfolio

This is a Vite + React + Tailwind portfolio scaffold created for Tiffany Yong.

Run:

```
cd site
npm install
npm run dev
```
