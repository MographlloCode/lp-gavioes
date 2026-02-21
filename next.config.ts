import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.meutimao.com.br",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.meutimao.com.br",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "gavioes.com.br",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "s2-quem.glbimg.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
