# Premium Shopify 3D Landing Page

A luxury e-commerce landing page built with Three.js, GSAP, and Cloudflare optimization.

## Tech Stack

- **Framework:** HTML5 + CSS3 + JavaScript
- **3D Engine:** Three.js
- **Animation:** GSAP + ScrollTrigger
- **Models:** GLB/GLTF optimized with Draco compression
- **Performance:** Cloudflare CDN + Cloudflare Images + Brotli compression
- **Shopify:** Custom Liquid Section

## Project Structure

```
assets/
  ├── models/
  │   └── hero.glb
  ├── styles.css
  ├── scene.js
  └── loader.js

sections/
  └── luxury-hero.liquid

scripts/
  ├── three.min.js
  └── gsap.min.js

docs/
  └── SETUP.md
```

## Features

### Hero Section
- Fullscreen 3D canvas
- Floating luxury clothing model
- Mouse parallax effect
- Smooth camera movement
- Animated lighting
- Premium loading screen
- Glassmorphism UI

### Scroll Animation
- Model rotation
- Camera zoom
- Fabric wave simulation
- Background color transitions
- Text fade animations
- CTA button entrance

### Effects
- Floating particles
- Dynamic shadows
- HDR environment
- Bloom effects
- Motion blur
- 60 FPS optimization

## Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Configure Cloudflare Workers (optional)
4. Deploy to Shopify

## Documentation

See [SETUP.md](docs/SETUP.md) for detailed setup instructions.
