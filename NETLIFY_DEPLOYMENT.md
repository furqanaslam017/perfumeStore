# Netlify Deployment Guide

## ✅ Recommended Configuration

This project is optimized for Netlify deployment with full Next.js SSR support.

## Error Fix: "Base directory does not exist: /opt/build/repo/main"

This error occurs when the **Base directory** is incorrectly set in Netlify's dashboard. Follow these steps to fix it:

### Steps to Fix in Netlify Dashboard:

1. **Go to your Netlify site dashboard**
2. **Navigate to**: `Site configuration` → `Build & deploy` → `Continuous deployment` → `Build settings`
3. **Check the "Base directory" field**:
   - ❌ If it says `main` or anything else → **CLEAR IT**
   - ✅ It should be **EMPTY** (leave blank)
4. **Verify other settings**:
   - **Build command**: `npm run build` (or leave empty to use netlify.toml)
   - **Publish directory**: `.next` (or leave empty to use netlify.toml)
   - **Base directory**: **LEAVE EMPTY**
5. **Save** and trigger a new deploy

### Alternative: Clear All Build Settings

If you want netlify.toml to control everything (recommended):

1. Go to `Site configuration` → `Build & deploy` → `Build settings`
2. **Clear ALL fields**:
   - Build command: (empty)
   - Publish directory: (empty)
   - Base directory: (empty)
3. Save changes
4. The `netlify.toml` file will handle all configuration automatically

## Automatic Configuration via netlify.toml

Your project includes a `netlify.toml` file that handles:
- ✅ Build command: `npm run build`
- ✅ Publish directory: `.next`
- ✅ Node.js version: `20.x`
- ✅ Next.js plugin for SSR support
- ✅ Environment variables

## Environment Variables

The following environment variables are configured in netlify.toml:
```
NEXT_PUBLIC_REST_API_ENDPOINT = "/api"
NODE_VERSION = "20"
NETLIFY_NEXT_PLUGIN_VERSION = "4"
```

If you need to add more environment variables, add them in:
`Site configuration` → `Environment variables`

## Features Enabled on Netlify

✅ **Server-Side Rendering (SSR)**  
✅ **API Routes**  
✅ **i18n Routing** (multi-language support)  
✅ **Image Optimization**  
✅ **Automatic HTTPS**  
✅ **CDN Distribution**  

## Deployment Steps

1. **Push code to GitHub** (already done via `git push`)
2. **Connect GitHub repo to Netlify**
3. **Clear base directory field** (see above)
4. **Deploy!**

## Troubleshooting

### Error: "Base directory does not exist"
- Clear the base directory field in Netlify dashboard (see instructions above)

### Error: "node: --openssl-legacy-provider is not allowed"
- Fixed in latest commit (removed from netlify.toml)

### Build succeeds but site doesn't load
- Check that publish directory is set to `.next`
- Verify `@netlify/plugin-nextjs` plugin is active

### Want to test locally?
```bash
npm install
npm run dev
```

Then visit http://localhost:3000
