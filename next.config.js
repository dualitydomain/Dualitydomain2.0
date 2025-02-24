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
  webpack: (config, { isServer }) => {
    // Add JSON loader
    config.module.rules.push({
      test: /\.json$/,
      type: "json",
    })

    return config
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

