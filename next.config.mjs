/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io","res.cloudinary.com", "assets.aceternity.com","images.unsplash.com"]
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
