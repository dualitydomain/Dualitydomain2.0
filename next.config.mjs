/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.json$/,
      type: 'javascript/auto',
      use: ['json-loader'],
    })

    return config
  },
  // ... other configurations
}

export default nextConfig

