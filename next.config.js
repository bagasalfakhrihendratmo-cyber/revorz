/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // This enables static exports for GitHub Pages
  trailingSlash: true, // This ensures URLs end with a slash
  images: {
    unoptimized: true, // Required for GitHub Pages
  },
}

module.exports = nextConfig