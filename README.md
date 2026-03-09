<div align="center">

# 🎙️ UIU English Language Forum (UIUELF)

**Live Website:** https://uiuelf.vercel.app/

### *"Break fear and be confident."*

**Official Website of the UIU English Language Forum**  
A Wing of the Directorate of Career Counseling & Student Affairs (DCCSA)  
United International University · Established September 20, 2013

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=flat&logo=vite)](https://vite.dev)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat&logo=tailwindcss)](https://tailwindcss.com)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=flat&logo=vercel)](https://vercel.com)

</div>

---

## 📖 About the Project

This is the official web platform for the **UIU English Language Forum (UIUELF)** — a premier student body at United International University dedicated to cultivating professional English communication, public speaking, and career readiness. The website serves as a central hub for event archives, membership recruitment, committee information, and community engagement.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🏠 **Home** | Dynamic landing page with animated hero section, typewriter effects, and marquee announcements |
| 📋 **About** | Comprehensive overview of UIUELF's mission, vision, and history since 2013 |
| 👥 **Committee** | Showcase of the current executive committee and panel members |
| 🎓 **Advisory Panel** | Profiles of faculty moderators and advisory board members |
| 📅 **Events** | Full chronological archive of 30+ events spanning 2022–2026 |
| ⭐ **Featured Events** | Dedicated spotlight pages for flagship events |
| 🏆 **Presentation Champs S1 & S2** | Detailed event pages for the signature inter-university presentation competition |
| 🇧🇩 **July 36 Challenge** | Dedicated page for the unique English & general knowledge quiz competition |
| 🖼️ **Gallery** | Photo gallery of past events and activities |
| 📬 **Contact** | Contact form powered by EmailJS with SweetAlert2 feedback |
| 🤝 **Join Us** | Membership recruitment form with registration flow |
| 📝 **Event Registration** | Dynamic per-event registration forms |
| 👨‍💻 **Developers** | Credits page for the development team |
| 🎬 **Welcome Screen** | Animated splash/welcome screen on first load |
| 📢 **Promo Modal** | Promotional announcement modal for active events |

---

## 🛠️ Technology Stack

### Core Framework & Tooling

| Technology | Version | Purpose |
|---|---|---|
| [React](https://react.dev) | 19 | UI component library |
| [Vite](https://vite.dev) | 7 | Build tool & dev server |
| [React Router DOM](https://reactrouter.com) | 7 | Client-side routing (SPA) |

### Styling & UI

| Technology | Version | Purpose |
|---|---|---|
| [Tailwind CSS](https://tailwindcss.com) | 4 | Utility-first CSS framework |
| [Framer Motion](https://www.framer.com/motion/) | 12 | Declarative animations & transitions |
| [Lucide React](https://lucide.dev) | 0.562 | Icon library |
| [@emotion/react](https://emotion.sh) | 11 | CSS-in-JS (used by animation libraries) |

### Animation & Motion

| Technology | Version | Purpose |
|---|---|---|
| [React Awesome Reveal](https://react-awesome-reveal.morello.dev) | 4 | Scroll-triggered reveal animations |
| [React Fast Marquee](https://www.react-fast-marquee.com) | 1.6 | Smooth scrolling marquee/ticker |
| [React Simple Typewriter](https://github.com/awran5/react-simple-typewriter) | 5 | Typewriter text effects |
| [@lottiefiles/dotlottie-react](https://lottiefiles.com) | 0.17 | Lottie animation rendering |

### Communication & Feedback

| Technology | Version | Purpose |
|---|---|---|
| [@emailjs/browser](https://www.emailjs.com) | 4 | Client-side email delivery (contact/join forms) |
| [SweetAlert2](https://sweetalert2.github.io) | 11 | Beautiful alert & confirmation dialogs |
| [sweetalert2-react-content](https://github.com/sweetalert2/sweetalert2-react-content) | 5 | React renderer for SweetAlert2 |

### Development & Linting

| Technology | Version | Purpose |
|---|---|---|
| [ESLint](https://eslint.org) | 9 | Code linting |
| [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks) | 7 | React Hooks lint rules |
| [eslint-plugin-react-refresh](https://github.com/ArnaudBarre/eslint-plugin-react-refresh) | 0.4 | HMR compatibility linting |

### Deployment

| Platform | Purpose |
|---|---|
| [Vercel](https://vercel.com) | Hosting & continuous deployment with SPA rewrite rules |

---

## 📁 Project Structure

```
src/
├── assets/          # Images, icons, and static media
├── components/      # Reusable UI components
│   ├── home/        # Home page section components
│   ├── about/       # About page components
│   ├── events/      # Event listing components
│   ├── contact/     # Contact form components
│   ├── gallery/     # Gallery components
│   ├── joinUs/      # Membership form components
│   ├── Navbar.jsx   # Top navigation bar
│   ├── Footer.jsx   # Site footer
│   ├── Layout.jsx   # Root layout wrapper
│   ├── WelcomeScreen.jsx   # Splash/welcome screen
│   └── PromoModal.jsx      # Promotional popup modal
├── data/            # Static data files (events, members, etc.)
├── pages/           # Route-level page components
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Committee.jsx
│   ├── AdvisoryPanel.jsx
│   ├── Events.jsx
│   ├── EventDetails.jsx
│   ├── FeaturedEvents.jsx
│   ├── PresentationChampsS1.jsx
│   ├── PresentationChampsS2.jsx
│   ├── July36Challenge.jsx
│   ├── Gallery.jsx
│   ├── Contact.jsx
│   ├── JoinUs.jsx
│   ├── Register.jsx
│   └── Developers.jsx
├── router/
│   └── Router.jsx   # Application route definitions
├── index.css        # Global styles & Tailwind imports
└── main.jsx         # Application entry point
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) v18 or higher
- npm v9 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/UIU-English-Language-Forum-UIUELF-.git
cd UIU-English-Language-Forum-UIUELF-

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the root directory and add your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Development

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

---

## 🌐 Deployment

This project is deployed on **Vercel**. The `vercel.json` file includes a SPA rewrite rule to ensure all routes resolve correctly:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

---

## 🤝 Strategic Partners & Collaborators

**MoU Partners:** Akij Resource · Don Sumdany Facilitation & Consultancy

**Corporate Partners:** Grameenphone · Augmedix Bangladesh · BRAC Bank · IDP Education

**Forum Partners:** UIU Debate Club · UIU MUN · UIU Entrepreneur Development Forum · UIU HR Forum · UIU Photography Club · CIAC · SIAS

---

## 🎯 Signature Program

**English Edge** — UIUELF's flagship skill development program focused on Public Speaking, Corporate Grooming, Vocabulary Building, and Creative Writing, delivered through intensive workshops led by industry experts.

---

## 📄 License

This project is the official property of the **UIU English Language Forum (UIUELF)**, United International University. All rights reserved.

---

<div align="center">

Made with ❤️ by the UIUELF Development Team  
© UIU English Language Forum · United International University

</div>
