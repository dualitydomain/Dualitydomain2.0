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
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Add JSON loader
    config.module.rules.push({
      test: /\.json$/,
      type: "javascript/auto",
      use: [
        {
          loader: "json-loader",
        },
      ],
    })

    // Add source map support
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      }
    }

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

