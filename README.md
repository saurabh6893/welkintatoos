# Welkin Tattoos - Premium Tattoo Artist Website

A stunning, modern website for **Welkin Tattoos** by artist **Akash Sanap**. Built with React, TypeScript, Tailwind CSS, and Framer Motion for beautiful animations.

## ✨ Features

### 🎨 Premium Design
- **Dark Theme**: Elegant black background with gold accents (#d4af37)
- **Professional Typography**: Playfair Display for headings, Inter for body text
- **Minimalist & Artistic**: Clean design with generous whitespace
- **Fully Responsive**: Mobile-first approach, looks great on all devices

### 🎬 Stunning Animations (Framer Motion)
- **Hero Section**: Animated text reveals with glowing effects
- **Scroll Animations**: Smooth fade-in and slide-in effects on scroll
- **Hover Effects**: Interactive micro-animations on buttons and cards
- **Smooth Scrolling**: Buttery smooth navigation between sections
- **Page Transitions**: Professional entrance animations

### 📱 Sections
1. **Hero**: Full-screen landing with animated branding and CTAs
2. **About**: Company story with stats (500+ clients, 8+ years, 1000+ tattoos)
3. **Services**: 6 service cards with icons and pricing
   - Custom Tattoos
   - Traditional Art  
   - Watercolor Style
   - Blackwork
   - Cover-ups
   - Realism
4. **Gallery**: Grid layout with 9 image placeholders (hover effects)
5. **Artist**: Akash Sanap's bio with social media links
6. **Testimonials**: Carousel with 4 client reviews
7. **Contact**: Form with business hours and contact info
8. **Footer**: Quick links, services, and social media

## 🚀 Tech Stack

- **React 18** - Latest React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast dev server and build tool
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **Framer Motion** - Production-ready animation library
- **React Icons** - Beautiful icon library

## 📦 Installation & Setup

```bash
# Navigate to frontend directory
cd /app/frontend

# Install dependencies
yarn install

# Start development server
yarn dev --host 0.0.0.0 --port 3000
```

## 🎯 Current Status

✅ **LIVE at http://localhost:3000**

The website is fully functional with:
- Smooth animations throughout
- Working navigation (scroll to sections)
- Responsive design
- Contact form (ready for backend integration)
- Gallery modal view
- Testimonial carousel

## 🔧 Customization Guide

### Replace Placeholder Images
All image placeholders are clearly marked. Replace them in these components:
- `/app/frontend/src/components/About.tsx` - Studio image
- `/app/frontend/src/components/Gallery.tsx` - Portfolio images (9 images)
- `/app/frontend/src/components/Artist.tsx` - Artist photo
- `/app/frontend/src/components/Testimonials.tsx` - Client photos (optional)

### Update Content
Edit text content directly in the component files:
- **Parlour Name**: Already set as "Welkin Tattoos"
- **Artist Name**: Already set as "Akash Sanap"
- **Services**: `/app/frontend/src/components/Services.tsx`
- **Testimonials**: `/app/frontend/src/components/Testimonials.tsx`
- **Contact Info**: `/app/frontend/src/components/Contact.tsx`

### Color Scheme
Colors are defined in `/app/frontend/tailwind.config.js`:
```js
colors: {
  primary: '#0a0a0a',    // Deep black background
  secondary: '#1a1a1a',  // Charcoal sections
  accent: '#d4af37',     // Gold accents
  light: '#f5f5f5',      // Off-white text
}
```

### Add Backend Integration
The contact form is ready for backend. Simply:
1. Create a FastAPI backend (structure already exists)
2. Connect form submission in `/app/frontend/src/components/Contact.tsx`
3. Add MongoDB for storing inquiries

## 📂 Project Structure

```
/app/frontend/
├── public/                  # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── Navbar.tsx     # Sticky navigation
│   │   ├── Hero.tsx       # Landing section
│   │   ├── About.tsx      # About section
│   │   ├── Services.tsx   # Services grid
│   │   ├── Gallery.tsx    # Portfolio gallery
│   │   ├── Artist.tsx     # Artist bio
│   │   ├── Testimonials.tsx # Reviews carousel
│   │   ├── Contact.tsx    # Contact form
│   │   └── Footer.tsx     # Footer section
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── index.html             # HTML template
├── package.json           # Dependencies
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.js      # PostCSS config
└── vite.config.ts         # Vite configuration
```

## 🎨 Animation Highlights

### Hero Section
- Text reveal animation with stagger effect
- Glowing pulsing effect on "WELKIN"
- Floating background gradients
- Animated scroll indicator

### Scroll Animations
- Fade-in on scroll (using Framer Motion's `useInView`)
- Stagger animations for grid items
- Hover lift effects on cards

### Micro-Interactions
- Button scale on hover
- Icon rotation on hover
- Smooth color transitions
- Card glow effects

## 🛠️ Future Enhancements (Optional)

- [ ] Add FastAPI backend for contact form
- [ ] Connect MongoDB for inquiry storage
- [ ] Add booking calendar integration
- [ ] Implement image optimization
- [ ] Add dark/light mode toggle
- [ ] SEO optimization
- [ ] Google Analytics integration
- [ ] Blog section for tattoo care tips

## 📱 Social Media Links

Update social media URLs in:
- `/app/frontend/src/components/Artist.tsx`
- `/app/frontend/src/components/Footer.tsx`

Replace `#` with actual URLs:
- Instagram
- Facebook
- Twitter/X
- YouTube

## 🌟 Credits

**Design & Development**: Built with attention to detail for Welkin Tattoos
**Artist**: Akash Sanap
**Tech Stack**: React + TypeScript + Tailwind CSS + Framer Motion

---

## 💼 Production Build

When ready to deploy:

```bash
cd /app/frontend
yarn build
```

This creates an optimized production build in `/app/frontend/dist/`.

---

**Website is ready to launch! 🚀 Just replace the placeholder images with real tattoo artwork and you're good to go!**
