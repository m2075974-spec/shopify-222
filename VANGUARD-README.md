# VANGUARD Creative Agency - Shopify Theme

**A premium fullscreen hero landing page with Vite + React + Tailwind CSS integration**

## 🎯 Features

✨ **Fullscreen Hero** - Video background with overlay  
🎬 **CloudFront Video** - Smooth looping background video  
📱 **Mobile Responsive** - Full mobile menu with animations  
🎨 **Custom Fonts** - Podium sharp headings + Inter body  
⚡ **React + Vite** - Fast development and build  
💨 **Tailwind CSS** - Utility-first styling  
🎭 **Staggered Animations** - Smooth fade-up entrance effects  
🖱️ **Interactive Elements** - Hover effects and transitions  

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

### 3. Build for Production
```bash
npm run build
```

## 📁 Project Structure

```
.
├── src/
│   ├── App.jsx                 # Main React component
│   ├── main.jsx                # React entry point
│   ├── index.css               # Tailwind + custom animations
│   └── sections/
│       └── vanguard-hero.jsx   # Hero component
├── index.html                  # HTML template
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
└── package.json                # Dependencies
```

## 🎨 Customization

### Change Brand Name
Edit `vanguard-hero.jsx`, line 25:
```jsx
VANGUARD  →  YOUR_BRAND_NAME
```

### Change Video Background
Edit `vanguard-hero.jsx`, line 33:
```jsx
src="YOUR_VIDEO_URL"
```

### Modify Navigation Links
Edit `vanguard-hero.jsx`, line 6:
```jsx
const navLinks = ['Projects', 'Studio', 'Offerings', 'Inquire'];
```

### Customize Stats
Edit `vanguard-hero.jsx`, line 9:
```jsx
const stats = [
  { value: '250+', label: 'Brands Transformed' },
  { value: '95%', label: 'Client Retention' },
  { value: '10+', label: 'Years in the Game' }
];
```

## 🔌 Shopify Integration

### Option 1: Embed as Liquid Section

1. Build the React app:
```bash
npm run build
```

2. Copy `dist/index.js` to Shopify asset folder

3. Create a new section in Shopify:
```liquid
{{ 'vanguard-hero.js' | asset_url | script_tag }}
<div id="root"></div>
```

### Option 2: Use as Custom Theme

1. Build React app
2. Deploy to Vercel, Netlify, or other CDN
3. Embed via `<iframe>` in Shopify section

```liquid
<iframe src="https://your-domain.com" style="width: 100%; height: 100vh; border: none;" />
```

## 📱 Responsive Breakpoints

- **Mobile** (< 640px): Hamburger menu, full-width text
- **Tablet** (640px - 768px): Enhanced spacing and font sizes
- **Desktop** (768px+): Full navbar with links, desktop menu
- **Large Desktop** (1024px+): Maximum font sizes and spacing

## 🎬 Animation Details

All elements use staggered `fade-up` animations:
- **Tagline**: 0s delay
- **Heading**: 0.2s delay
- **Subtext**: 0.4s delay
- **CTA Row**: 0.6s delay
- **Stats**: 0.8s delay

Mobile menu items also stagger at 80ms intervals.

## 🎯 Performance Tips

✅ **Video Optimization**:
- Use CloudFront for CDN delivery
- Compress video to < 10MB
- Use H.264 codec for compatibility

✅ **Loading**:
- Lazy load non-critical assets
- Minify CSS and JavaScript
- Use font preloading

✅ **Mobile**:
- Reduce video bitrate
- Preload fonts
- Optimize images

## 🔐 Security

- Video hosted on secure CloudFront
- No external API dependencies
- Safe React component lifecycle
- Content Security Policy ready

## 📄 Browser Support

✅ Chrome 90+  
✅ Firefox 88+  
✅ Safari 14+  
✅ Edge 90+  
✅ Mobile Safari iOS 14+  
✅ Mobile Chrome Android 90+  

## 📞 Support

- [Vite Docs](https://vitejs.dev/)
- [React Docs](https://react.dev/)
- [Tailwind Docs](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev/)

---

**Built with ❤️ for creative agencies**
