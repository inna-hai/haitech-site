# Hai-Tech Way — Next.js + TypeScript + Tailwind starter

This repository contains a minimal Next.js App Router starter focused on a Hebrew (RTL) EdTech landing site.

Run locally:

```bash
# install deps
npm install

# run dev
npm run dev
```

Notes:
- The root `html` has `dir="rtl"` for Hebrew layout.
- Tailwind is configured; add `npx tailwindcss -i ./app/globals.css -o ./public/output.css --watch` if you need to build manually, but Next already processes Tailwind via PostCSS.
