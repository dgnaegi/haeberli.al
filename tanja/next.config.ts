import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/tanja",
  turbopack: {
    root: process.cwd(),
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 640, 768, 1024, 1280, 1536],
    imageSizes: [256, 384, 512, 768],
  },
};

export default nextConfig;
