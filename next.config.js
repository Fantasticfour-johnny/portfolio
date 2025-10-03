/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    // Netlify Image CDN
    domains: ['localhost', 'kushalrajgs.me', 'kushal-raj-portfolio.netlify.app'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  swcMinify: true,
  // Netlify optimizations
  experimental: {
    optimizePackageImports: ['react-icons'],
  },
}

module.exports = nextConfig
