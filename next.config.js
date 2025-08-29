/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname, // prevents workspace root warning
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drive.google.com",
      },
    ],
  },
};

module.exports = nextConfig;
