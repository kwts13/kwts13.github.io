# kwts13.github.io

Personal website, built with [Astro](https://astro.build) and published to GitHub Pages.

## Develop

```bash
npm install
npm run dev
```

## Edit content

- Site copy, experience, links: `src/site.ts`
- Blog posts: add a Markdown file to `src/content/blog/` (set `draft: true` to hide it)

## Deploy

Pushes to `main` build and deploy automatically via `.github/workflows/deploy.yml`.
