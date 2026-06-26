# Setup Guide - Premium Shopify 3D Landing Page

## Prerequisites

- Shopify Theme with custom section support
- Node.js 16+ (for asset optimization)
- Cloudflare account (optional, for CDN optimization)

## Project Setup

### 1. Asset Organization

Place 3D models in `assets/models/`:
```bash
mkdir -p assets/models
# Add your hero.glb file here
```

### 2. Install Dependencies

```bash
npm install three gsap
```

### 3. Build Process

Minify and optimize assets:
```bash
npm run build
```

## Shopify Integration

### 1. Create Custom Section

Add `sections/luxury-hero.liquid` to your Shopify theme.

### 2. Upload Assets

Upload the following to Shopify's Assets folder:
- `assets/scene.js`
- `assets/styles.css`
- `assets/models/hero.glb` (or reference via Cloudflare)

### 3. Add Section to Theme

In your Shopify theme editor, add the "Luxury Hero" section to your homepage.

## Cloudflare Optimization

### Enable Caching

- Cache TTL: 1 month for `.glb`, `.js`, `.css` files
- Enable Brotli compression
- Enable HTTP/3

### Image Optimization

Use Cloudflare Images for fallback/thumbnail images:
```
https://imagedelivery.net/your-account-hash/hero-thumb/public
```

### Workers (Optional)

Create a Cloudflare Worker to serve 3D models from edge locations:

```javascript
export default {
  fetch(request) {
    const url = new URL(request.url);
    url.host = 'cdn.example.com';
    return fetch(url);
  }
};
```

## Performance Tuning

### Desktop (Target: 60 FPS)
- Full resolution rendering
- All effects enabled
- High quality lighting

### Mobile (Target: 30-40 FPS)
- Reduced resolution (0.8x)
- Simplified particle effects
- Lower polygon model (LOD)
- Disabled motion blur

## Monitoring

- Use WebGL Inspector for debugging
- Monitor Core Web Vitals via Cloudflare Analytics
- Track performance with `performance.now()`

## Troubleshooting

### Model Not Loading
- Verify `.glb` file path in `scene.js`
- Check Shopify asset upload
- Confirm CORS headers via Cloudflare

### Low FPS on Mobile
- Reduce canvas resolution: `renderer.setPixelRatio(0.8)`
- Disable bloom effect
- Use LOD (Level of Detail) models

### Shader Errors
- Ensure WebGL2 support in target browsers
- Use WebGL1 fallback for compatibility
