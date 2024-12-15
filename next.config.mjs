/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: [],
      unoptimized: true,
      minimumCacheTTL: 60,
    },
};
export default nextConfig;
