import type { NextConfig } from "next";

/**
 * Next.js configuration.
 * - `images.remotePatterns` allows the curated Unsplash product photography
 *   used throughout the catalog to be optimized by `next/image`.
 * - `reactStrictMode` surfaces unsafe lifecycle usage during development.
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: 'https',
        hostname: 'www.apple.com',
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
