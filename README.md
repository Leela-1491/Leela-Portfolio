# 🚀 Leelakumar Kakinada — Developer Portfolio

> **Software Development Engineer - II** | 2.5+ Years Experience  
> High-performance web, mobile, and backend microservice architectures.

[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Vercel Hosted](https://img.shields.io/badge/Hosted_on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com)
[![Free Tier](https://img.shields.io/badge/Hosting_Cost-$0_Free-emerald?style=for-the-badge)](#-free-hosting-guide-on-vercel-0-cost)

---

## 📌 Overview

This repository contains the personal portfolio of **Leelakumar Kakinada**, engineered using **Clean Architecture** and modern **React Server Components (RSC)** in **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

Designed as a scrollable single-page application with smooth navigation, ATS-optimized taxonomy, interactive resume preview/downloading, and zero runtime dependencies.

---

## 🏛️ Clean Architecture & RSC Boundaries

The architecture separates **Data (Domain Layer)** from **UI Components (Presentation Layer)** and isolates client interactivity to the leaf nodes of the tree:

```text
leela-portfolio/
├── app/                        # Next.js App Router (Layouts & Metadata)
│   ├── layout.tsx              # Root shell with SEO metadata & dark theme
│   ├── page.tsx                # [Server Component] Assembles the 4 sections
│   └── globals.css             # Tailwind v4 theme, grid background & accent styles
│
├── context/
│   └── ResumeModalContext.tsx  # [Client Boundary] Isolates modal state via Context
│
├── components/                 # Presentation Layer
│   ├── layout/
│   │   ├── Navbar.tsx          # [Client Component] Scroll tracking & mobile drawer
│   │   └── Footer.tsx          # [Server Component] Status badge & copyright
│   │
│   ├── sections/               # The 4 Core Sections
│   │   ├── Hero.tsx            # [Server Component] About Me, ATS Tags, Impact Metrics
│   │   ├── Experience.tsx      # [Server Component] Career Timeline (QA -> SDE I -> SDE II)
│   │   ├── Skills.tsx          # [Client Component] Interactive Constellation Mind-Map
│   │   └── Contact.tsx         # [Client Component] Message Form, Phone & Email Hub
│   │
│   └── ui/                     # UI Primitives
│       ├── common/
│       │   └── Button.tsx      # Unified polymorphic Button component (primary, secondary, outline, ghost)
│       ├── icons/              # Modular zero-dependency SVG icon system
│       │   ├── types.ts        # IconProps interface
│       │   ├── index.ts        # Clean barrel export
│       │   └── ...Icon.tsx     # 17 individual icon components (PhoneIcon, GithubIcon, etc.)
│       ├── PreviewResumeButton.tsx # [Client Leaf] Lightweight modal trigger
│       └── ResumeModal.tsx     # [Client Component] Interactive ATS-compliant viewer
│
├── data/                       # Domain Layer (Single Source of Truth)
│   └── portfolio.ts            # Typed bio, experience, skills, stats, and social links
│
├── types/                      # TypeScript Strict Type Contracts
│   └── portfolio.ts            # Type definitions for Profile, Role, Education, and Skills
│
└── public/                     # Static Assets
    └── resume.pdf              # Real downloadable PDF document
```

---

### ⚡ Server vs. Client Component Matrix

| Component | Type | Responsibility | Bundle Impact |
| :--- | :---: | :--- | :---: |
| `app/page.tsx` | **Server** | Root page shell & layout assembly | 0 KB |
| `Hero.tsx` | **Server** | Pre-rendered bio, stats, ATS tags | 0 KB |
| `Experience.tsx` | **Server** | Pre-rendered career & education timeline | 0 KB |
| `Skills.tsx` | **Client** | Interactive constellation mind-map & cluster toggling | Minimal |
| `Footer.tsx` | **Server** | Static footer markup | 0 KB |
| `Navbar.tsx` | **Client** | Active section tracking & mobile menu | Minimal |
| `Contact.tsx` | **Client** | Interactive message form & copy buttons | Minimal |
| `PreviewResumeButton.tsx` | **Client** | Leaf trigger for the resume modal | Minimal |
| `ResumeModal.tsx` | **Client** | Modal keyboard events (`Escape`) & ATS viewer | Minimal |

---

## 📑 The 4 Core Sections

### 1. Home / About Me (`#about`)
- Full name, current title (**SDE - II @ Buncha Technologies**), and 2.5-year career narrative.
- **ATS Core Competency Tags** (Full-Stack, React/Next.js, Node.js, GraphQL, Elasticsearch k-NN, Python pipelines, SRE).
- **Quantified Metrics**: `2.5+` Years Experience, `3x` Career Promotions, `20%` Latency Reduction (<200ms), `8.74` CGPA.
- Action triggers using `<Button>`: **Download Resume** & **Interactive Preview**.

### 2. Work Experience & Education (`#experience`)
- **Fast-Track Internal Promotion**: Highlights rapid internal climb from **QA Intern** → **SDE Trainee & I** → **SDE II** at *Buncha Technologies India Pvt Ltd*.
- Role-by-role metrics:
  - Microservices & lightweight GraphQL APIs in Node.js.
  - Elasticsearch & k-NN vector search optimization (20% latency drop, 15% relevance boost).
  - Site Reliability Engineering (SRE), monitoring, observability, and 99.9%+ uptime.
  - JMeter performance testing and bottleneck analysis.
- **Education**: Bachelor of Technology in Electronics & Communication Engineering from **Andhra University College of Engineering** (Final CGPA: **8.74** / High Distinction).

### 3. Interactive Skill Constellation (`#skills`)
- **Mind-Map Graph Architecture**: Features a central glowing `CORE HUB: LEELAKUMAR KAKINADA` connected to domain nodes via SVG constellation lines.
- **Interactive Tap-to-Expand Clusters**:
  1. **`FRONTEND` (7 Techs)**: React JS, Next.js, React Native, TypeScript, Tailwind CSS, HTML5/CSS3.
  2. **`BACKEND` (5 Techs)**: Node.js, GraphQL APIs, RESTful APIs, Microservices, Python.
  3. **`SEARCH & DATA` (4 Techs)**: Elasticsearch, k-NN Vector Search, SQL, Data Pipelines.
  4. **`CLOUD & SRE` (5 Techs)**: AWS Amplify, CI/CD Pipelines, SRE Practices, Observability, Apache JMeter.
- **Decoupled Architecture**: Fully customizable via `skillClusters` in `data/portfolio.ts`.

### 4. Contact Us & Resume Hub (`#contact`)
- **Direct Phone / WhatsApp**: `+91 9676953491` with 1-click clipboard copy and `tel:` dialer.
- **Direct Email**: `leelakumarkakinada@gmail.com` with 1-click clipboard copy.
- **Professional Networks**: Verified LinkedIn (`linkedin.com/in/leelakumar`) and GitHub (`github.com/Leela-1491`).
- **Interactive Message Form**: Pre-populates direct inquiries.
- **Dedicated Resume Hub**: PDF download button and full modal preview.

---

## 🛠️ Local Development

```bash
# 1. Clone the repository
git clone https://github.com/Leela-1491/Leela-Portfolio.git
cd Leela-Portfolio

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

```bash
# Run linting
npm run lint

# Build production bundle
npm run build
```

---

## 🌐 Free Hosting Guide on Vercel ($0 Cost)

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete portfolio with clean architecture"
   git push origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in with your GitHub account (`Leela-1491`).
3. Click **"Add New"** → **"Project"** and import `Leela-Portfolio`.
4. Vercel automatically detects Next.js:
   - Framework Preset: `Next.js`
   - Build Command: `npm run build`
   - Output Directory: `.next`
5. Click **Deploy**. In under a minute, your portfolio is live worldwide with free automated HTTPS!

---

## ✍️ Updating Content (Single Source of Truth)

All personal details, skills, metrics, and career milestones live in:
👉 [`data/portfolio.ts`](data/portfolio.ts)

To replace your resume file, simply overwrite [`public/resume.pdf`](public/resume.pdf).
