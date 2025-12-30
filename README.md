# APMoversandPackers Website (Vite + React + TypeScript)

Production website for **AP Movers & Packers** (packers and movers services across Haryana / North India).

**Live:** https://apmmoversandpackers.in/
<img width="1904" height="972" alt="image" src="https://github.com/user-attachments/assets/b3928774-2221-4263-a4b3-893a86c3b175" />


## What’s inside

This repository is a **static, SEO-friendly single-page application (SPA)** built with React and Vite. It includes:

- **Home page** with hero section, services overview, testimonials, certifications, service locations, and contact section
- **Services pages** (house shifting, office shifting, vehicle shifting, storage, international shifting)
- **Blog section** with location-based posts (generated from a locations list)
- **Enquiry popup** (opens WhatsApp with a pre-filled enquiry message)
- **Floating WhatsApp button**
- **SEO meta tags** via `react-helmet-async` (page titles + descriptions + keywords)

No backend is required to run the site locally — it is a front-end project that compiles to static files.

---

## Tech stack

- **Vite** (build + dev server)
- **React 18 + TypeScript**
- **Tailwind CSS** (utility styling + custom theme in `src/index.css`)
- **shadcn/ui** components (Radix UI primitives)
- **React Router** (client-side routing)
- **react-helmet-async** (SEO meta tags)
- **Lucide React** (icons)

---

## Project structure (high level)

.
├─ public/ # Static public assets
├─ src/
│ ├─ assets/ # Images, icons
│ ├─ components/ # Reusable UI blocks (navbar, footer, cards, etc.)
│ ├─ data/ # Static data: services, locations, FAQs, blogs
│ ├─ pages/ # Route pages (Home, Services, Blog, Contact, etc.)
│ ├─ ui/ # shadcn/ui components (Radix primitives)
│ ├─ App.tsx # Router + route registration
│ ├─ main.tsx # App bootstrap
│ └─ index.css # Tailwind + site styles
├─ tailwind.config.* # Tailwind theme config
├─ vite.config.* # Vite config
└─ package.json

yaml
Copy code

> Note: Exact filenames may vary slightly depending on updates, but the above reflects the actual code layout and responsibilities.

---

## Getting started (local development)

### 1) Install dependencies


npm install
2) Run dev server
bash
Copy code
npm run dev
Vite will print a local URL (usually http://localhost:5173/).

3) Build for production
bash
Copy code
npm run build
4) Preview production build locally
bash
Copy code
npm run preview
Key features & how they work
1) Routing (pages)
The project uses React Router for SPA navigation. Pages are defined inside src/pages/ and connected in src/App.tsx.

2) SEO meta tags
SEO is handled using react-helmet-async. Each page typically sets:

<title>

<meta name="description" ...>

keywords / social meta tags (as needed)

This is important because SPAs need explicit meta handling for better indexing and share previews.

3) Blog system (static + location-based)
The blog pages are static and generated from structured data lists (for example, an array of locations). This approach:

keeps the site backend-free

allows creating many location/service pages quickly

improves local SEO coverage

If you want to add new blog posts or locations:

update the relevant src/data/* file (locations/posts list)
<img width="1894" height="964" alt="image" src="https://github.com/user-attachments/assets/695320b0-da75-4cd4-8784-6fbb8d5a2569" />

ensure the routes or render logic already loops over the list

4) WhatsApp enquiry flows
There are two WhatsApp flows:

Floating WhatsApp button

Enquiry popup that opens WhatsApp with a pre-filled message

This is done using a WhatsApp URL format like:

php-template
Copy code
https://wa.me/<number>?text=<encoded_message>
(Phone number and message formatting are stored in code/data, not in any secrets file.)

Content editing guide (non-developer friendly)
Most business content (services, locations, testimonials, FAQs, etc.) is stored as static data inside src/data/.

Typical updates:

Change phone number / WhatsApp number: search the codebase for the number and replace (also check footer + WhatsApp button)

Edit service text/pricing details: update services data file or service page content

Add a new location: add to locations list; blog/location sections should auto-render

Update testimonials: edit the testimonials list

Tip:

Use a global search in your editor for the content you want to change.

Deployment
This is a static site (Vite build output). You can deploy it on:

Any static hosting (cPanel static hosting)

Nginx/Apache serving the dist/ directory

Netlify / Vercel (static output)

Cloudflare Pages
<img width="1909" height="976" alt="image" src="https://github.com/user-attachments/assets/991f6c2b-350b-4d7f-9b19-6ca854087c59" />

SPA routing note (important)
Because this is an SPA, when deploying on Apache/Nginx you must redirect all routes to index.html (so /services works on refresh).

For example:

Apache (.htaccess) should include rewrite rules to index.html

Nginx should use try_files $uri /index.html;

Scripts
Common scripts from package.json:

npm run dev – start dev server

npm run build – production build

npm run preview – preview production build locally

Routes
Defined in src/App.tsx:

/ – Home

/services – Services overview

/services/house-shifting

/services/office-shifting

/services/vehicle-shifting

/services/storage

/services/international-shifting

/blog – Blog listing

/blog/:slug – Blog detail

/contact – Contact page

(Other pages may exist based on the current build)

Common issues & fixes
White screen after deployment
Usually caused by:

wrong base path (Vite config)

assets not found

missing SPA rewrite rules on hosting

Fix:

confirm dist/ is served correctly

add SPA rewrite rules

ensure correct domain path setup

Tailwind styles not loading
Fix:

confirm tailwind.config.* content paths include src/**/*

rebuild: npm run build

License
This project is for the AP Movers & Packers website. Reuse or redistribution should be done only with owner permission.
