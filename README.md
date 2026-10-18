# Kabilan — Flutter Developer Portfolio

A modern, responsive, high-performance personal portfolio website built with **React**, **Vite**, and **Tailwind CSS**, designed in the Figma dark aesthetic (**Deep Charcoal `#0C0D12` / `#161822`** with **Electric Orange `#FF5E1E`** highlights).

---

## 🚀 Quick Start (Run Locally)

1. **Install dependencies** (if not already installed):
   ```bash
   npm install
   ```

2. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open your browser at: **`http://localhost:5173`**

3. **Build for production**:
   ```bash
   npm run build
   ```
   This generates an optimized `dist/` folder ready to deploy anywhere.

4. **Preview the production build locally**:
   ```bash
   npm run preview
   ```

---

## 📁 Project Architecture & Organization

```text
kabilan-portfolio/
│
├── public/
│   ├── images/
│   │   ├── profile/              # Your professional photos (Studio & Office)
│   │   └── branding/             # Logo & icons
│   │
│   └── screenshots/              # All 31 genuine screenshots categorized by app:
│       ├── disease-dictionary/   # [7 screens]
│       ├── agri-machinery/       # [7 screens]
│       ├── teachraan/            # [8 screens]
│       ├── bible-quiz/           # [4 screens]
│       └── bible-app/            # [5 screens]
│
└── src/
    ├── config/
    │   └── portfolioContent.js   ⭐ [THE SINGLE SOURCE OF TRUTH]
    │                                 Edit this file to change ANY text, project,
    │                                 skill, social link, or photo!
    │
    ├── components/
    │   ├── ui/                   ⭐ [SHARED REUSABLE WIDGETS]
    │   │   ├── Button.jsx        # Orange glow, secondary, outline, ghost buttons
    │   │   ├── Card.jsx          # Dark surface (#161822) with border (#262938)
    │   │   ├── Badge.jsx         # Category pills & tech tags
    │   │   ├── SectionHeader.jsx # Standardized section eyebrow, title & subtitle
    │   │   └── Modal.jsx         # Accessible dialog overlay
    │   │
    │   ├── layout/
    │   │   ├── Navbar.jsx        # Sticky navigation & mobile drawer
    │   │   └── Footer.jsx        # Stack-accurate footer & social links
    │   │
    │   └── sections/
    │       ├── Hero.jsx          # Hero headline, profile photo & CTAs
    │       ├── About.jsx         # Grounded bio narrative & photo
    │       ├── Skills.jsx        # Resume-verified categorized skills
    │       ├── Expertise.jsx     # 6 capability cards
    │       ├── Projects.jsx      # 7-project responsive grid & filter pills
    │       ├── ProjectCard.jsx   # Individual project card with contributions
    │       ├── ProjectLightbox.jsx # Interactive screenshot viewer with phone frame
    │       ├── Experience.jsx    # Professional trajectory
    │       └── Contact.jsx       # Contact form with email client reachout
    │
    ├── App.jsx
    └── index.css
```

---

## ✏️ How to Update Content Anytime

You **never** have to dig through React JSX or HTML tags to make updates. Simply open:
👉 `src/config/portfolioContent.js`

* **To change your email or social links**: Update `personal.email`, `personal.github`, or `personal.linkedin`.
* **To switch your profile picture**: Change `personal.profileImage` between `/images/profile/kabilan-profile-studio.jpg` and `/images/profile/kabilan-profile-office.jpg`.
* **To update your skills**: Edit the arrays inside `skillCategories`.
* **To add or edit a project**: Add or modify items in the `projects` array.
* **To attach your resume**: Put your PDF in `public/docs/kabilan-resume.pdf` and set `personal.hasRealResume = true`.

---

## 🌐 Free Deployment Options

### Option A: Vercel (1-Click)
1. Push this folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your repository — Vercel will automatically detect Vite and deploy it in seconds.

### Option B: Netlify
1. Drag and drop the `dist/` folder directly onto [Netlify Drop](https://app.netlify.com/drop).
2. Your portfolio will be live instantly with a free SSL certificate.

### Option C: GitHub Pages
1. In `vite.config.js`, set `base: '/<your-repo-name>/'`.
2. Run `npm run build`.
3. Push the `dist/` folder to a `gh-pages` branch.
