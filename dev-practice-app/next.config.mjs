/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { dev }) {
    // Only enable source maps in development
    if (dev) {
      config.devtool = "source-map"; // This will enable source maps
    }
    return config;
  },
};

export default nextConfig;
