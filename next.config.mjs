/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.PAGES_BASE_PATH || "",
  poweredByHeader: false,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
