/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: { ignoreBuildErrors: true },
  images: {
    domains: ['pharmnet-dz.com'],
  },
};

export default nextConfig;
