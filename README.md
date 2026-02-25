![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?style=flat-square&logo=tailwindcss)
![Recharts](https://img.shields.io/badge/Recharts-3-22d3a4?style=flat-square)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-purple?style=flat-square&logo=framer)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=flat-square&logo=vercel)

# Inovient: AI SaaS Pricing & Market Strategy

A multi-page strategy site built by Kappa Theta Pi (USC) for Inovient, delivering data-driven market research, competitor analysis, ROI modeling, and pricing strategy for Inovient's Morpheus AI marketing platform.

**Live:** [inovient.vercel.app](https://inovient.vercel.app) &nbsp;|&nbsp; **Client:** [inovient.io](https://www.inovient.io)

> Screenshot

## Features

- **Executive Dashboard:** market size metrics ($64.6B SAM, 36.6% CAGR), 5-year ARR projections, and strategic roadmap in a single overview
- **Market Research:** TAM/SAM/SOM breakdowns with interactive area and bar charts powered by Recharts, sourced from Grand View Research and McKinsey
- **Competitor Analysis:** feature matrix comparing Morpheus against top competitors (Sprinklr, Brandwatch, and others) across sentiment intelligence, media mix, and strategy AI dimensions
- **ROI Modeling:** cost-benefit analysis, payback period projections, and LTV:CAC benchmarks demonstrating 4 to 12x ROI multiples at $299 to $2,499/mo price points
- **Pricing Strategy:** tiered pricing model (Starter / Growth / Enterprise) with gross margin targets and GTM recommendations for a 115%+ NRR land-and-expand motion
- **Product Positioning:** ICP definition, messaging architecture, and competitive white-space analysis positioning Morpheus as the only unified mid-market platform for competitive intelligence, MMM, and strategy AI

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 |
| Charts | Recharts 3 |
| Animation | Framer Motion 12 |
| Icons | Lucide React |
| UI Primitives | Radix UI (Tabs, Slider, Tooltip) |
| Fonts | Geist, Geist Mono |
| Brand Color | `#22D3A4` |
| Deployment | Vercel |

## Pages

| Route | Content |
|-------|---------|
| `/` | Executive overview: market size, key metrics, roadmap |
| `/market-research` | TAM/SAM/SOM breakdown, growth projections |
| `/competitor-analysis` | Competitor landscape and feature matrix |
| `/roi-modeling` | ROI projections and payback period |
| `/pricing-strategy` | Tiered pricing model and GTM recommendations |
| `/product-positioning` | Positioning framework and ICP definition |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run lint    # ESLint check
```

## Project Context

Built as a KTP Spring 2026 consulting engagement. Inovient's Morpheus platform provides AI-driven competitive intelligence, media mix modeling, and marketing strategy recommendations for mid-market B2B companies.

**KTP Chapter:** USC &nbsp;|&nbsp; **Semester:** Spring 2026 &nbsp;|&nbsp; **Engagement:** Tech consulting, market research, product strategy

## Author

**Caleb Newton** ([calebnewton.me](https://calebnewton.me))
