/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // ✅ Required for Server Actions in this template
    serverActions: true,
  },
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
  },
};

module.exports = nextConfig;
