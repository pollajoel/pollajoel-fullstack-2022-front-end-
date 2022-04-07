/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['wakawakacar.com']
  },
  webpack: (config) => {
    config.experiments = { topLevelAwait: true };
    return config;
  }
}

module.exports = nextConfig
