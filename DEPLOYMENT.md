# Premium Luxury 3D Shopify Theme - Deployment Guide

## ⚠️ Important: This is a theme repository, NOT a live store

This repository contains theme files that must be uploaded to a Shopify store.

## Prerequisites

- ✅ Active Shopify store (any plan)
- ✅ Admin access to your store
- ✅ Shopify CLI installed (`npm install -g @shopify/cli`)
- ✅ Node.js 16+

## Quick Start (3 Steps)

### Step 1: Clone & Navigate
```bash
git clone https://github.com/m2075974-spec/shopify-222.git
cd shopify-222
git checkout feat/luxury-3d-landing
```

### Step 2: Connect to Your Shopify Store
```bash
shopify theme dev --store=your-store.myshopify.com
```
Replace `your-store` with your actual store name.

### Step 3: Access Your Store
Once connected, Shopify CLI will provide a preview URL. Open it in your browser.

---

## Manual Upload (Alternative Method)

If you prefer not to use Shopify CLI:

1. **Create a new theme in Shopify Admin:**
   - Go to `https://your-store.myshopify.com/admin/themes`
   - Click "Add theme"
   - Click "Create unpublished theme"
   - Name it "Premium Luxury 3D"

2. **Upload theme files:**
   - Use the theme code editor
   - Create folders: `layout/`, `sections/`, `snippets/`, `assets/`, `config/`, `templates/`
   - Copy files from this repository to matching folders

3. **Upload your 3D model:**
   - Go to Admin > Files
   - Upload your `.glb` 3D model file
   - Copy the CDN URL provided
   - In theme settings, paste URL into "3D Model Asset URL"

4. **Publish the theme:**
   - Go to Themes
   - Click the three-dot menu on your theme
   - Click "Publish"

---

## File Structure Overview

```
.
├── config/
│   └── settings_schema.json      # Theme customization options
├── layout/
│   └── theme.liquid              # Main layout template
├── sections/
│   ├── luxury-hero.liquid        # 3D hero section
│   ├── header.liquid             # Navigation header
│   ├── footer.liquid             # Footer
│   └── announcement.liquid       # Announcement bar
├── snippets/
│   ├── css-variables.liquid      # CSS custom properties
│   └── meta-tags.liquid          # SEO meta tags
├── templates/
│   ├── index.liquid              # Homepage
│   ├── page.liquid               # Static pages
│   ├── product.liquid            # Product detail
│   └── collection.liquid         # Collection pages
├── assets/
│   ├── base.css                  # Base styles
│   ├── styles.css                # Component styles
│   └── scene.js                  # Three.js 3D scene
└── theme.toml                    # Theme configuration
```

---

## Troubleshooting

### Problem: "Page failed to load due to unsupported URL"
**Solution:**
- This happens when theme files aren't properly deployed
- Use `shopify theme dev` command instead of manual upload
- Ensure you're connected to the correct store
- Check that all files are in the correct folders

### Problem: 3D model not showing
**Solution:**
1. Upload your `.glb` file to Admin > Files
2. Copy the full CDN URL from the file listing
3. Go to theme Customize > Theme settings > CDN & Assets
4. Paste URL into "3D Model Asset URL" field
5. Click Save

### Problem: Styles not loading
**Solution:**
- Clear your browser cache (Cmd+Shift+R or Ctrl+Shift+R)
- Check that `assets/base.css` and `assets/styles.css` exist
- Verify asset URLs in `layout/theme.liquid`

### Problem: Scripts throwing errors
**Solution:**
- Check browser DevTools Console (F12)
- Verify Three.js CDN is accessible
- Ensure GSAP library is loading
- Check that `scene.js` has correct file path

---

## Theme Customization

### In Shopify Admin:

1. **Colors:**
   - Go to Customize > Theme settings > Color Scheme
   - Change Primary Dark, Light, Accent, etc.

2. **3D Scene:**
   - Go to Customize > Theme settings > 3D Scene Settings
   - Adjust Model Scale, Lighting, Particles
   - Test different presets

3. **Performance:**
   - Go to Customize > Theme settings > Performance
   - Choose preset: Low (mobile), Medium (balanced), High (desktop)
   - Enable/disable reduce motion preference

### In Code:

1. **Edit 3D Scene:**
   - Open `assets/scene.js`
   - Modify lighting, camera, particles
   - Add custom effects

2. **Edit Styles:**
   - Open `assets/styles.css`
   - Customize colors, animations, typography

3. **Edit Sections:**
   - Open `sections/luxury-hero.liquid`
   - Modify hero content and schema

---

## Deployment to Live Store

### Using Shopify CLI:

```bash
# Publish to live store
shopify theme push --store=your-store.myshopify.com --unpublished

# Then in Admin, go to Themes and click "Publish"
```

### Important Notes:
- Always test on a **staging/development** store first
- Create a backup of your current theme
- Test on mobile and desktop
- Monitor performance with Shopify Analytics

---

## Performance Optimization

### Cloudflare CDN Setup (Optional):

1. Create Cloudflare account
2. Add your domain
3. Set up Workers for edge caching
4. In theme settings, add Cloudflare CDN URL

### Recommended Settings:
- **Performance Preset:** Medium (for most stores)
- **Particles:** Enabled, 300-500 count
- **Lighting Intensity:** 1.5
- **Reduce Motion:** Enabled (for accessibility)

---

## Support & Resources

- 📖 [Shopify Theme Development](https://shopify.dev/themes)
- 🎮 [Three.js Documentation](https://threejs.org/docs/)
- ✨ [GSAP Animation](https://greensock.com/gsap/)
- 🌐 [Cloudflare CDN](https://www.cloudflare.com/)

---

## License

MIT - Free to use and customize

---

**Need help?** Check the troubleshooting section or open an issue on GitHub.
