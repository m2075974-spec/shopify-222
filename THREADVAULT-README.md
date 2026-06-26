# THREADVAULT - Premium T-Shirt Store

**A modern, premium T-shirt brand focused on quality and everyday confidence**

## 🎯 Brand Identity

**Brand Name:** THREADVAULT  
**Tagline:** Premium Tees. Everyday Confidence.  
**Style:** Minimal • Modern • Premium • Streetwear  

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Black | `#0B0B0B` | Main background |
| White | `#FFFFFF` | Text |
| Gold | `#D4AF37` | Buttons & highlights |
| Dark Gray | `#1D1D1D` | Sections |
| Light Gray | `#F5F5F5` | Product background |
| Accent Blue | `#3A86FF` | Small highlights |

## 📱 Features

✅ **Fullscreen Hero Section**
- Floating animated T-shirt emoji
- Gradient animated background
- Call-to-action buttons
- Staggered fade-up animations

✅ **Featured Collections**
- 6 product categories
- Hover effects
- Grid layout with responsive design

✅ **Best Sellers**
- Large product cards
- Color swatches
- Size selector (S-XXL)
- Wishlist functionality
- Add to cart with counter
- Star ratings
- Hover animations

✅ **Why Choose Us Section**
- 5 unique selling points
- Icon-based layout
- Hover animations

✅ **Limited Edition Banner**
- Gradient background
- Countdown timer (hardcoded)
- Call-to-action button

✅ **Newsletter Signup**
- Email subscription
- Discount offer (15% off)
- Responsive form

✅ **Footer**
- Brand info
- Navigation links
- Support links
- Social media links
- Copyright

✅ **Responsive Navigation**
- Fixed navbar with logo
- Desktop navigation links
- Mobile hamburger menu
- Search icon
- Shopping cart counter

## 🚀 Quick Start

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

### Build for Production
```bash
npm run build
```

## 📁 Project Structure

```
.
├── src/
│   ├── components/
│   │   └── ThreadvaultHome.jsx   # Main component
│   ├── App.jsx                   # Root component
│   ├── main.jsx                  # Entry point
│   └── index.css                 # Tailwind + animations
├── index.html                    # HTML template
├── vite.config.js                # Vite configuration
├── tailwind.config.js            # Tailwind configuration
└── package.json                  # Dependencies
```

## 🎨 Sections

### 1. Hero Section
- Large animated floating T-shirt
- Gradient background with animated blobs
- Headline: "WEAR WHAT DEFINES YOU"
- Description and CTAs
- Staggered animations

### 2. Featured Collections
- 6 category cards
- Icon-based design
- Hover effects
- Responsive grid

### 3. Best Sellers
- 4 featured products
- Product images (emoji placeholders)
- Color swatches
- Size selector
- Star ratings
- Wishlist button
- Add to cart button

### 4. Why Choose Us
- 5 feature cards
- Icon-based layout
- Benefits and descriptions

### 5. Limited Edition Banner
- Gradient background (Gold to Blue)
- Countdown timer
- Exclusive offer message

### 6. Newsletter
- Email subscription form
- 15% discount offer
- Responsive design

### 7. Footer
- Brand information
- Navigation links
- Support links
- Social media

## 🎬 Animations

All animations use CSS keyframes:

```css
@keyframes fade-up {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
```

Classes:
- `.animate-fade-up` - No delay
- `.animate-fade-up-delay-1` - 0.2s delay
- `.animate-fade-up-delay-2` - 0.4s delay
- `.animate-fade-up-delay-3` - 0.6s delay
- `.animate-fade-up-delay-4` - 0.8s delay

## 📱 Responsive Design

- **Mobile:** Full-width, mobile menu
- **Tablet:** Enhanced spacing, grid adjustments
- **Desktop:** Full navigation, large font sizes

Breakpoints:
- `sm` (640px)
- `md` (768px)
- `lg` (1024px)

## 🛍️ Product Features

- Color swatches (Black, White, Navy, etc.)
- Size selector (S, M, L, XL, XXL)
- Wishlist functionality (Heart icon)
- Add to cart with counter
- 5-star rating display
- Hover effects and animations

## 🔧 Customization

### Change Brand Name
```jsx
// ThreadvaultHome.jsx line 25
"THREADVAULT" → "YOUR_BRAND"
```

### Modify Products
```jsx
// ThreadvaultHome.jsx line 12-17
const bestSellers = [
  { id: 1, name: 'Your Product', price: '$XX.XX', image: '👕', colors: [...] },
  ...
];
```

### Change Colors
Edit `tailwind.config.js` colors section or use inline hex codes:
```jsx
bg-[#D4AF37]  // Gold
bg-[#3A86FF]  // Blue
```

### Update Features
```jsx
// ThreadvaultHome.jsx line 19-24
const features = [
  { icon: '🌾', title: 'Your Feature', desc: 'Description' },
  ...
];
```

## 🔗 Shopify Integration

### Option 1: Embed as Section
1. Build: `npm run build`
2. Copy `dist/` files to Shopify assets
3. Create Liquid section with script tag

### Option 2: Deploy Standalone
1. Build: `npm run build`
2. Deploy to Vercel, Netlify, or your CDN
3. Embed via iframe in Shopify

## 📊 Component State Management

```jsx
// Cart counter
const [cartCount, setCartCount] = useState(0);

// Wishlist (liked products)
const [likedProducts, setLikedProducts] = useState({});

// Mobile menu
const [menuOpen, setMenuOpen] = useState(false);
```

## 🎯 SEO Optimized

- Meta description in HTML
- Semantic HTML structure
- Accessible components
- Fast loading times

## 📦 Dependencies

- **React 18.2** - UI framework
- **Vite 4.3** - Build tool
- **Tailwind CSS 3.3** - Styling
- **PostCSS 8.4** - CSS processing
- **Lucide React 0.263** - Icons

## 🚀 Deployment

### Vercel
```bash
npm run build
vercel deploy
```

### Netlify
```bash
npm run build
netlify deploy --prod --dir=dist
```

### GitHub Pages
1. Update `vite.config.js` with `base: '/repo-name/'`
2. Run: `npm run build`
3. Push `dist/` folder

## 📝 License

MIT - Feel free to use and customize

---

**Premium T-shirts. Everyday Confidence. Built with ❤️**
