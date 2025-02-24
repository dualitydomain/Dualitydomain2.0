/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
      },
      {
        protocol: "https",
        hostname: "dualitydomain.com",
      },
    ],
  },
  experimental: {
    optimizeCss: true,
    turbo: {
      rules: {
        "*.svg": ["url"],
      },
    },
  },
}

module.exports = nextConfig

