/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "media.licdn.com"
      },
      {
        protocol: "https",
        hostname: "instagram.fixc1-3.fna.fbcdn.net",
      }
    ],
  },
};

export default nextConfig;
