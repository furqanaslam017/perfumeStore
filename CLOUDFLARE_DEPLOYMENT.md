# Cloudflare Pages Deployment Guide

## Configuration Settings

When deploying this Next.js project to Cloudflare Pages, use the following settings:

### Build Configuration

1. **Framework preset**: `Next.js (Static HTML Export)`
2. **Build command**: `npm run build:cloudflare`
3. **Build output directory**: `out`
4. **Node version**: `20.11.0` (automatically detected from `.node-version`)

### Environment Variables

Add the following environment variable in Cloudflare Pages settings:

```
STATIC_EXPORT=true
```

### Important Notes

⚠️ **Limitations with Cloudflare Pages:**

1. **No SSR Support**: This deployment uses static export, which means:
   - No server-side rendering
   - No API routes
   - All pages are pre-rendered at build time

2. **i18n Limitations**: The i18n routing is disabled for static export. If you need multi-language support, consider:
   - Using client-side language detection
   - Deploying to Netlify or Vercel instead (which support Next.js SSR)

3. **Image Optimization**: Next.js Image Optimization is disabled in static export mode. Images will be served as-is.

### Alternative: Deploy to Netlify

For full Next.js features (SSR, API routes, i18n), deploy to **Netlify** instead:
- ✅ Full SSR support
- ✅ API routes work
- ✅ i18n routing enabled
- ✅ Image optimization

The project is already configured for Netlify via `netlify.toml`.

## Deployment Steps

1. **Push changes to GitHub**
2. **Connect repository to Cloudflare Pages**
3. **Configure build settings** as shown above
4. **Add environment variable**: `STATIC_EXPORT=true`
5. **Deploy!**

## Troubleshooting

### Build fails with "node: --openssl-legacy-provider is not allowed"
- Make sure Node version is set to 20.x (not 22.x)
- Check that `.node-version` file exists

### Build fails with i18n errors
- Ensure `STATIC_EXPORT=true` is set in environment variables
- This disables i18n for static export compatibility

### Images not loading
- This is expected with static export
- Images are not optimized, served directly from source
