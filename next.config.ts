import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.0.10"],

  images: {
    // ✅ modern formats
    formats: ["image/avif", "image/webp"],

    // ✅ cache production
    minimumCacheTTL: 60 * 60 * 24 * 30,

    // 🔥 FINAL (WAJIB)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.jadiumrah.cloud",
      },
      {
        protocol: "https",
        hostname: "app.jadiumrah.cloud",
      },
    ],
  },

  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;