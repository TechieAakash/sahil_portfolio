# Sahil Husain — Personal Design Portfolio Website (2026)

A production-ready, editorial personal design portfolio website for **Sahil Husain** (M.Des NID India, B.Des NIFT India), faithfully translated from his complete 49-page PDF portfolio (`SAHIL PORTFOLIO 2026.pdf`).

---

## 🌟 Overview

This portfolio website bridges high-end editorial design, case-study storytelling, and interactive product prototypes. It showcases three in-depth projects created for **Samsung Electronics**:

1. **Project Makaan (Future of Connected Living)**
   - Reimagining the future of connected homes through conversational AI (`#HarGharKuchKehtaHai`).
   - 5 Indian immersion zones (Delhi, Guwahati, Hyderabad, Indore, Mumbai), user verbatims, friction journey, 4 intelligence pillars, interactive conversational simulator, and high-fidelity SmartThings UI mockups.

2. **Sneaker Care (Specialized Care Experience)**
   - Indian Gen-Z sneakerhead culture, market projection ($3.63B to $4.5B, 5.87% CAGR), local startups (Gully Labs, Comet, Thaely).
   - Washing challenges matrix, 5-feature cycle proposal, and interactive material-aware wash recipe generator.

3. **2026 CMF Design (Trends Forecast for Galaxy A, M & F)**
   - Price segment evolution, 2026 consumer sentiments, 4 global drivers, and SWA regional drivers.
   - Galaxy A Series (*Gently Pleasant*): Dark Core (Navy), Silverine Greys, Renew Blues, and Radiant Warms with exact Pantone codes and preserved NDA disclosure.
   - Galaxy M Series (*Lively Luxe*) with linear pattern studies, Galaxy F Series (*Radiant Flair*) with wave pattern studies, and the complete 2026 Master Color Candidates Matrix.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Asset Pipeline**: PyMuPDF script converting all 49 PDF pages into crisp WebP assets

---

## 🚀 Quickstart & Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Dev Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build Locally
```bash
npm run preview
```

---

## 🌐 Render Static Site Deployment

This project is optimized for static hosting on **Render Static Site**:

1. Create a new **Static Site** on Render.
2. Connect your Git repository.
3. Configure the build settings:
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
4. Deploy!

All routes use client-side hash routing (`/#/`, `/#/makaan`, `/#/sneaker-care`, `/#/galaxy-cmf`), ensuring zero 404 errors on static CDNs or direct URL reloads.

---

## 📂 Project Structure

```text
sahil/
├── public/
│   └── pdf-pages/             # All 49 high-resolution 1920x1080 WebP slides
├── src/
│   ├── components/
│   │   ├── Navbar.tsx         # Translucent frosted-glass editorial navbar
│   │   ├── Footer.tsx         # Minimalist editorial footer with credentials
│   │   ├── SectionLabel.tsx   # Monospace index and category tags
│   │   ├── Lightbox.tsx       # Fullscreen accessible PDF slide viewer
│   │   ├── PdfPageImage.tsx   # Lazy-loaded slide component with zoom overlay
│   │   ├── QuoteBlock.tsx     # Editorial user quote and VOC components
│   │   ├── ProjectNavigation.tsx # Project pagination (Prev / All / Next)
│   │   ├── MakaanSimulator.tsx# Interactive intent-first ambient home simulator
│   │   ├── SneakerMaterialGuide.tsx # Interactive sneaker wash recipe generator
│   │   └── CmfColorExplorer.tsx # Interactive Pantone palette explorer & matrix
│   ├── data/
│   │   └── portfolioData.ts   # Structured portfolio data from PDF single source of truth
│   ├── pages/
│   │   ├── Home.tsx           # Editorial Hero, Meet Sahil, Project Cards, Philosophy
│   │   ├── MakaanCaseStudy.tsx# Full Makaan case study
│   │   ├── SneakerCareCaseStudy.tsx # Full Sneaker Care case study
│   │   └── GalaxyCmfCaseStudy.tsx   # Full Galaxy CMF case study
│   ├── App.tsx                # Main view router and global Lightbox state
│   ├── index.css              # Custom font tokens and glassmorphism utilities
│   └── main.tsx               # App entry point
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── vite.config.ts
```

---

## 📜 Source Attribution & Data Integrity

All facts, statistics, user verbatims, quotes, housing typologies, and Pantone color specifications are sourced directly from **SAHIL PORTFOLIO 2026.pdf**. No facts have been fabricated. Galaxy A-series colors withheld under NDA remain clearly marked.
