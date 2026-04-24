# AmeriDream Mortgage Group

The official website for **AmeriDream Mortgage Group, LLC** (NMLS #275209) — a local mortgage lender serving North Texas families from offices in The Colony, Decatur, and Bridgeport.

This site helps buyers and homeowners:
- Learn about loan programs (Conventional, FHA, VA, USDA, Jumbo, Non-Conforming)
- Estimate payments and affordability with interactive calculators
- Track their home-buying progress with a step-by-step checklist
- Contact a local loan officer directly

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16.2.4 (App Router) |
| Bundler | Webpack (via `--webpack` flag — see Dev Setup) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 + custom CSS in `app/globals.css` |
| Fonts | DM Serif Display (headings) · DM Sans (body) via `next/font/google` |
| Forms | Next.js Route Handler (`app/api/contact/route.ts`) |

## Dev Setup

Install dependencies and start the local development server:

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

> **Why `--webpack`?** The `dev` script in `package.json` runs `next dev --webpack` instead of the default Turbopack. Turbopack has a known bug in this version where it resolves `@import "tailwindcss"` from the wrong directory, breaking all styles. Webpack works correctly. Do not remove the `--webpack` flag.

## Pages

| Route | File | Description |
|---|---|---|
| `/` | `app/page.tsx` | Homepage — hero, services, loan programs, process, reviews, team, FAQ, CTA |
| `/loan-types` | `app/loan-types/page.tsx` | Filterable loan cards (Conventional, FHA, VA, USDA, Jumbo, Non-Conforming) + comparison table |
| `/learning-center` | `app/learning-center/page.tsx` | 3 interactive calculators, home buying basics, mortgage glossary, checklist preview |
| `/checklist` | `app/checklist/page.tsx` | 29-step interactive home buying checklist — progress saved to localStorage |
| `/meet-the-team` | `app/meet-the-team/page.tsx` | Loan officer cards with bios, office locations, and profile links |
| `/contact` | `app/contact/page.tsx` | Contact form + 3 office location cards |

## Key Files

| File | Purpose |
|---|---|
| `lib/constants.ts` | Shared URLs — `APPLY_URL` (loan application) and `PORTAL_URL` (client login). Update these if the links ever change. |
| `app/globals.css` | All brand styles. Starts with `@import "tailwindcss"`. Custom CSS classes for every section live here. |
| `app/layout.tsx` | Root layout — loads fonts, wraps every page in `<Header>` and `<Footer>`. |
| `components/Header.tsx` | Site-wide navigation including mobile menu. |
| `components/Footer.tsx` | Site-wide footer with office locations, hours, and legal text. |
| `components/PageHero.tsx` | Reusable blue hero banner used at the top of every inner page. |
| `components/PageCtaBanner.tsx` | Reusable CTA strip at the bottom of inner pages. Accepts a `variant` prop: `"blue"` (default) or `"light"`. |
| `app/api/contact/route.ts` | POST handler for the contact form. Add email provider here (see Contact Form Setup). |

## Contact Form Setup

The contact form at `/contact` is fully wired up — but email delivery requires a one-time configuration. Until you add a mail provider, submissions are printed to the terminal where `npm run dev` is running.

To send real emails, open `app/api/contact/route.ts` and follow one of the two options already commented in the file:

**Option A — Resend (recommended)**
1. Sign up at [resend.com](https://resend.com) — free tier allows 100 emails/day
2. Create an API key in the Resend dashboard
3. Run `npm install resend`
4. Add your key to `.env.local` (see Environment Variables below)
5. Uncomment the Resend block in `app/api/contact/route.ts`

**Option B — Gmail (Nodemailer)**
1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password under Google Account → Security → App Passwords
3. Run `npm install nodemailer @types/nodemailer`
4. Add your credentials to `.env.local` (see Environment Variables below)
5. Uncomment the Nodemailer block in `app/api/contact/route.ts`

## Environment Variables

Create a `.env.local` file in the project root (this file is never committed to git):

```bash
# Option A — Resend
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxx

# Option B — Nodemailer via Gmail
GMAIL_USER=you@gmail.com
GMAIL_PASS=your-app-password-here
```

Only add the variables for whichever option you choose. Restart `npm run dev` after editing `.env.local` for changes to take effect.

## Content to Update

A few placeholders remain in the codebase that need real information:

- **Individual NMLS numbers** — each team member in `app/meet-the-team/page.tsx` has `nmls: "NMLS #———"`. Replace with each loan officer's actual NMLS number.
- **Team bios** — the `specialty` field for each team member in the same file was written as a placeholder. Replace with real bios if preferred.
- **Copyright year** — the footer in `components/Footer.tsx` has a hardcoded year. Update annually.
