# Deploy Lewis Garden and Suites

The easiest way to deploy this Next.js site is **Vercel** (free tier, built for Next.js).

## Before you deploy

1. Update contact details in `src/lib/constants.ts`:
   - `phone`
   - `whatsapp` (format: `234XXXXXXXXXX`, no `+`)
   - `email`

2. Test production build locally:

```bash
cd C:\Users\Jasini\Projects\lewis-garden-suites
npm run build
npm start
```

Open http://localhost:3000 and confirm everything works.

---

## Option A: Deploy with Vercel (recommended)

### 1. Push code to GitHub

```bash
cd C:\Users\Jasini\Projects\lewis-garden-suites
git add .
git commit -m "Lewis Garden hotel website"
```

Create a new repository on [github.com/new](https://github.com/new), then:

```bash
git remote add origin https://github.com/YOUR_USERNAME/lewis-garden-suites.git
git branch -M main
git push -u origin main
```

### 2. Import on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in (GitHub account works).
2. Click **Add New → Project**.
3. Import your `lewis-garden-suites` repository.
4. Vercel auto-detects Next.js — leave settings as default.
5. Click **Deploy**.

Your site will be live at `https://lewis-garden-suites.vercel.app` (or similar) in ~2 minutes.

### 3. Custom domain (optional)

In the Vercel project → **Settings → Domains**, add e.g. `lewisgardensuites.com` and follow the DNS instructions from your domain registrar.

---

## Option B: Deploy with Netlify

1. Push to GitHub (same as above).
2. Go to [netlify.com](https://netlify.com) → **Add new site** → **Import from Git**.
3. Build command: `npm run build`
4. Publish directory: `.next` is handled by Netlify’s Next.js adapter — select the repo and use Netlify’s Next.js preset.

---

## Option C: Self-host (VPS / Windows server)

```bash
npm run build
npm start
```

Runs on port 3000. Use **PM2** or **IIS + reverse proxy** for production. Requires Node.js 18+ on the server.

---

## After deployment checklist

- [ ] WhatsApp links open with correct number
- [ ] Google Maps embed shows the hotel location
- [ ] Images load (hero photo in `public/images/`)
- [ ] Test on mobile
- [ ] Replace placeholder phone/email in constants

---

## Environment variables

This project does not require env vars for basic deployment. If you add a contact form API or analytics later, set them in Vercel → **Settings → Environment Variables**.
