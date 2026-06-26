# Printful Integration Guide for Shopify

## What is Printful?

Printful is a print-on-demand service that integrates with Shopify to:
- ✅ Automatically print and ship products
- ✅ Sync products directly to your store
- ✅ Handle fulfillment automatically
- ✅ No upfront inventory costs

## Step 1: Create Printful Account

1. Go to [printful.com](https://www.printful.com)
2. Click "Sign Up"
3. Create your account
4. Verify your email

## Step 2: Connect Printful to Shopify

### From Printful Dashboard:

1. Log in to Printful
2. Go to **Dashboard > Connect Store**
3. Select **Shopify**
4. Click "Connect"
5. You'll be redirected to your Shopify store
6. Click **Install App**
7. Review permissions and click **Install**
8. Printful will sync with your Shopify store

### From Shopify Admin:

1. Go to **Admin > Apps and Sales Channels**
2. Click **App and Sales Channels store**
3. Search for **Printful**
4. Click the Printful app
5. Click **Add app**
6. Follow the authorization steps

## Step 3: Create Products in Printful

### T-Shirt Product:

1. In Printful Dashboard, click **Create Product**
2. Select **T-Shirt** (or your product type)
3. Choose:
   - **Material**: 100% Combed Cotton or Blend
   - **Fit**: Unisex, Men's, or Women's
   - **Colors**: Red, Black, White, etc.
4. Upload your design (optional for print-on-demand)
5. Set your **Markup Price** (profit margin)
6. Click **Sync to Shopify**
7. Select your store
8. Click **Sync**

## Step 4: Automate Fulfillment

### Enable Auto-Fulfillment:

1. In Printful Dashboard, go to **Settings > Automation**
2. Enable **Automatically fulfill orders**
3. Choose fulfillment rules
4. Save settings

### Orders will automatically:
- ✅ Transfer to Printful
- ✅ Get printed
- ✅ Ship to customer
- ✅ Update tracking in Shopify

## Step 5: Customize Shipping

### Set Shipping Rates:

1. **Printful Dashboard > Settings > Shipping**
2. Configure:
   - Base shipping cost
   - Additional items cost
   - Handling time
3. These sync to Shopify automatically

### Enable Shipping Automation:

1. Go to **Shopify Admin > Settings > Shipping and delivery**
2. Add Printful as a shipping carrier
3. Rates will auto-calculate

## Step 6: Product Variants

### Create Multiple Variants:

Printful automatically creates variants for:
- ✅ Colors
- ✅ Sizes
- ✅ Materials

These appear in your Shopify store as product options.

## Recommended Products for This Theme

### 1. Premium T-Shirt Collection
- **Colors**: Red (luxury), Black, White, Navy
- **Sizes**: XS-XXL, 3XL
- **Material**: 100% Combed Cotton
- **Price**: $25-35 (with markup)

### 2. Hoodie Collection
- **Colors**: Matching your brand
- **Material**: 80/20 Cotton/Poly
- **Price**: $40-55

### 3. Long Sleeve T-Shirt
- **Colors**: Classic colors
- **Material**: Premium cotton blend
- **Price**: $28-38

### 4. Premium Sweatshirt
- **Material**: 80/20 Poly/Cotton blend
- **Sizes**: XS-XXL
- **Price**: $35-50

## Connecting Your 3D Landing Page to Products

### Link Hero Button to Products:

```liquid
<!-- In sections/luxury-hero.liquid -->
<a href="/collections/tshirts" class="cta-button">
  Shop T-Shirts
</a>
```

### Create Collection in Shopify:

1. Go to **Shopify Admin > Products > Collections**
2. Click **Create Collection**
3. Name: "Premium T-Shirts" or "Luxury Collection"
4. Add Printful products
5. Click **Save"

## Pricing Strategy

### T-Shirt Example:

- **Printful Cost**: $10 (base price)
- **Your Markup**: $15-25
- **Selling Price**: $25-35
- **Your Profit**: $15-25 per shirt

### Set Printful Markup:

1. Printful Dashboard > Products
2. Click your product
3. Set **Markup** amount
4. Sync updated price to Shopify

## Key Features

✅ **Zero Inventory Risk** - Print only when ordered  
✅ **Global Shipping** - Printful ships worldwide  
✅ **Quality Control** - Professional printing  
✅ **Automatic Tracking** - Customers see tracking info  
✅ **Multiple Products** - T-shirts, hoodies, mugs, etc.  
✅ **Custom Branding** - Add your logo/design  
✅ **Real-time Sync** - Products sync instantly  

## Troubleshooting

### Problem: Products not syncing
**Solution:**
- Verify Printful app is installed
- Check Shopify permissions
- Re-sync product manually

### Problem: Prices not updating
**Solution:**
- Update markup in Printful
- Force sync from Printful dashboard
- Check Shopify price settings

### Problem: Orders not auto-fulfilling
**Solution:**
- Enable automation in Printful Settings
- Check order status in Printful
- Verify payment processed

## Printful Dashboard Key Areas

1. **Products** - Manage catalog
2. **Orders** - View pending orders
3. **Automation** - Enable auto-fulfillment
4. **Analytics** - Track sales & revenue
5. **Settings** - Configure store connection
6. **Billing** - Payment & invoices

## Monthly Fees

- **Printful App**: FREE (no subscription)
- **Cost per Item**: Only pay for printed items
- **Shipping**: Included in Printful pricing
- **Shopify**: Your regular plan ($29-299/month)

## Next Steps

1. ✅ Create Printful account
2. ✅ Connect to Shopify
3. ✅ Create T-shirt products
4. ✅ Set pricing & markup
5. ✅ Enable auto-fulfillment
6. ✅ Create collection
7. ✅ Link from hero page
8. ✅ Launch store!

## Support

- **Printful Support**: support.printful.com
- **Shopify Support**: help.shopify.com
- **Integration Docs**: printful.com/docs

---

**Your Premium Shopify store with 3D animations + Print-on-Demand is ready!** 🚀
