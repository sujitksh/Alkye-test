/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'untitled-twkmuar27a-uc.a.run.app'
      },
    ],
  },
};

export default nextConfig;
