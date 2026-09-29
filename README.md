# Nourish Bites

Brand site for handmade energy balls and granola bites.

Stack: **Vite + React + React Router**.

Layout is intentionally close to [naobites.com](https://naobites.com/index.html): promo bar, story, boxes, grab-and-go cups, favorites, reviews, how-to-order, storage, WhatsApp. Products and copy are original. Do not ship this as a dates brand.

Repo: https://github.com/muzzamilanis/nourish-bites

## Run locally

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
npm run preview
```

## Change before you show anyone

Edit `src/data/site.js`:

- `whatsappNumber` — digits only, country code, no `+`
- `instagram` / `instagramHandle`
- prices, flavor list, box names
- replace placeholder reviews with real DMs

Replace `/public/logo.svg` when you have a real mark.

## Deploy

Vercel or Netlify, root = this folder, build command `npm run build`, output `dist`.

If you use GitHub Pages, set Vite `base` to `/nourish-bites/` in `vite.config.js` and switch `BrowserRouter` to `HashRouter`, or use a custom domain.

## Why React

The homepage could have been static HTML. React exists for `/build`: box + size + flavor selection that writes a WhatsApp message. If you later add real checkout, move to Next.js or Shopify. Do not add a cart on top of WhatsApp and pretend it is a store.
