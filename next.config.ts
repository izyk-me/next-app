import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: 'export',  // 静态导出模式
  images: {
    unoptimized: true, // Cloudflare Pages 不支持 Next.js 的图像优化
  },
};

export default nextConfig;
