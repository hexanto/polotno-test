/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["ucarecdn.com", "ess-web-cdn.s3.us-east-1.amazonaws.com"],
  },
};

export default nextConfig;
