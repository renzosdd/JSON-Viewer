# JSON Viewer Pro

Static browser-based JSON viewer built with vanilla HTML, CSS and JavaScript.

## Features

- Paste JSON, load from file, or fetch from URL
- 100% client-side, no server required
- Tree view with expand/collapse, node detail panel, copy path/value
- Search by key, value, and path with next/previous navigation
- Filters for matches only, nulls, empty arrays/objects, and type
- Raw, table, and diff views
- Beautify, minify, export, and shareable URL hash links
- English/Spanish toggle
- Light/dark/auto theme
- Settings persisted in localStorage

## Deploy

Upload the contents to any static host such as Vercel, Netlify, GitHub Pages, Cloudflare Pages, or a regular hosting account.

No build step is required.

## Notes

- URL loading depends on the target server allowing CORS in the browser.
- Share links embed JSON in the URL hash, so they are best for small/medium payloads.
