/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  images: {
    unoptimized: true,
    domains: ['']
  }
}

module.exports = nextConfig
