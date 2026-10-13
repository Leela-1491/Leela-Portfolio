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

This repository contains the personal portfolio of **Leelakumar Kakinada**, engineered using **Clean Architecture** principles in **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

Designed as a modern, high-performance, scrollable single-page application with smooth navigation linking, ATS-optimized taxonomy, interactive resume preview/downloading, and zero runtime dependencies.

---

## 🏛️ Clean Architecture Breakdown

The codebase separates **Data (Domain Layer)** from **UI Components (Presentation Layer)** and **Routing/Metadata (Infrastructure Layer)**:

```text
leela-portfolio/
├── app/                        # Next.js App Router (Layouts, Metadata, Globals)
│   ├── layout.tsx              # Root shell with SEO metadata & smooth scrolling
│   ├── page.tsx                # Single-page assembly for all 4 sections
│   └── globals.css             # Tailwind v4 theme, grid background & accent styles
│
├── components/                 # Presentation Layer
│   ├── layout/                 # Shell & Navigation
│   │   ├── Navbar.tsx          # Sticky blur header with section highlighting & resume trigger
│   │   └── Footer.tsx          # Copyright, status badge, and social links
│   ├── sections/               # The 4 Core Architectural Sections
│   │   ├── Hero.tsx            # Section 1: About Me, ATS Keywords, Impact Metrics & CTAs
│   │   ├── Experience.tsx      # Section 2: Promotion Timeline (QA -> SDE I -> SDE II) & Education
│   │   ├── Skills.tsx          # Section 3: Categorized Skill Matrix
│   │   └── Contact.tsx         # Section 4: Contact Form, Copy Email & Resume Hub
│   └── ui/                     # UI Primitives
│       ├── Icons.tsx           # Zero-dependency, lightweight SVG icons
│       └── ResumeModal.tsx     # Interactive ATS-compliant Resume Preview & Download Modal
│
├── data/                       # Domain Layer (Single Source of Truth)
│   └── portfolio.ts            # Typed bio, experience, skills, stats, and social links
│
├── types/                      # TypeScript Strict Type Contracts
│   └── portfolio.ts            # Type definitions for Profile, Role, Education, and Skills
│
└── public/                     # Static Assets
    └── resume.pdf              # Downloadable resume document
```

---

## 📑 The 4 Core Sections

### 1. Home / About Me (`#about`)
- Full name, current title (**SDE - II @ Buncha Technologies**), and 2.5-year career summary.
- **ATS Core Competency Tags** (Full-Stack, React/Next.js, Node.js, GraphQL, Elasticsearch k-NN, Python pipelines, SRE).
- **Quantified Metric Cards**:
  - `2.5+` Years Experience
  - `3x` Career Promotions
  - `20%` Search Latency Reduction (<200ms)
  - `8.74` Academic CGPA
- 1-click **Download Resume** and **Interactive Preview** triggers.

### 2. Work Experience & Education (`#experience`)
- **Fast-Track Internal Promotion**: Highlights rapid internal climb from **QA Intern** → **SDE Trainee & I** → **SDE II** at *Buncha Technologies India Pvt Ltd*.
- Role-by-role metrics:
  - Microservices & lightweight GraphQL APIs in Node.js.
  - Elasticsearch & k-NN vector search optimization (20% latency drop, 15% relevance boost).
  - Site Reliability Engineering (SRE), monitoring, observability, and 99.9%+ uptime.
  - JMeter performance testing and bottleneck analysis.
- **Education**: Bachelor of Technology in Electronics & Communication Engineering from **Andhra University College of Engineering** (Final CGPA: **8.74** / High Distinction).

### 3. Skill Set (`#skills`)
- Grouped into 4 technical domains:
  1. **Frontend & Mobile**: React JS, Next.js (App Router), React Native, TypeScript, TailwindCSS.
  2. **Backend & Search**: Node.js, GraphQL APIs, RESTful APIs, Elasticsearch, k-NN Vector Search.
  3. **Data & Scripting**: SQL, Python, Catalog Pipelines, Data Modeling.
  4. **Cloud & DevOps**: AWS Amplify, CI/CD Pipelines, SRE Practices, JMeter, Git.

### 4. Contact Us & Resume Hub (`#contact`)
- Direct contact with 1-click copy-to-clipboard for email.
- Verified LinkedIn & GitHub profile links.
- Interactive message form that drafts an inquiry directly to your inbox.
- Dedicated resume card with PDF download and modal inspection.

---

## 🛠️ Local Development

### Prerequisites
- Node.js `18.x` or later
- npm or pnpm / yarn

### Installation
```bash
# 1. Clone the repository
git clone https://github.com/leelakumarkakinada/leela-portfolio.git
cd leela-portfolio

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

### Quality Checks
```bash
# Run linting
npm run lint

# Build production bundle
npm run build
```

---

## 🌐 Free Hosting Guide on Vercel ($0 Cost)

Vercel provides a 100% free Hobby Tier that includes global edge deployment, automatic SSL, and instant CI/CD.

### Step 1: Push code to your GitHub
```bash
git add .
git commit -m "feat: complete portfolio with clean architecture"
git branch -M main
git remote add origin https://github.com/leelakumarkakinada/leela-portfolio.git
git push -u origin main
```

### Step 2: Import into Vercel
1. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
2. Click **"Add New"** → **"Project"**.
3. Select your `leela-portfolio` repository and click **Import**.
4. Vercel automatically detects Next.js:
   - Framework Preset: `Next.js`
   - Build Command: `npm run build`
   - Output Directory: `.next`
5. Click **Deploy**.

### Step 3: Your Live URL & Custom Domain
- In ~45 seconds, your site is live at: `https://leela-portfolio.vercel.app` (or your chosen project name).
- To connect your own free custom domain (e.g. `leelakakinada.com`):
  - Go to **Project Settings** → **Domains** → add your domain name.
  - Vercel automatically issues an SSL certificate for free.

---

## ✍️ Updating Content (Single Source of Truth)

All personal data, job updates, skills, and links can be updated in a single file without modifying any JSX:

👉 [`data/portfolio.ts`](data/portfolio.ts)

To replace your resume file, overwrite [`public/resume.pdf`](public/resume.pdf).

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
