import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  // Building a static website
  output: 'export',

  // Image cannot be optimized in static client-side rendering
  images: {
    unoptimized: true,
  },

  // // Enabling a "reverse-proxy" in local to contact a backend API on another port (CORS fix)
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       destination: 'http://localhost:8080/api/:path*',
  //     },
  //   ];
  // },
};

export default nextConfig;
