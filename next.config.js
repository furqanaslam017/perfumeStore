const { i18n } = require("./next-i18next.config");
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

// Disable i18n for static export (Cloudflare Pages)
const isStaticExport = process.env.STATIC_EXPORT === 'true';

module.exports = withPWA({
  pwa: {
    disable: process.env.NODE_ENV !== "production",
    dest: "public",
    runtimeCaching,
  },
  // i18n is not supported in static export
  ...(isStaticExport ? {} : { i18n }),
  images: {
    // For static export, use unoptimized images
    ...(isStaticExport ? { unoptimized: true } : {}),
    domains: [
      "images.unsplash.com",
      "plus.unsplash.com",
      "images.pexels.com",
      "cdn.pixabay.com",
    ],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "cdn.pixabay.com" },
    ],
    formats: ["image/avif", "image/webp"],
  },
});
