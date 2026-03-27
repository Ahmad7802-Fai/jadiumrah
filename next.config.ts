import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.0.10"],

  images: {
    unoptimized: true, // 🔥 FINAL FIX
  },

  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;