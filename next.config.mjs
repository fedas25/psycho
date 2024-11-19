/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  // optimizeFonts: false
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  experimental: {
    externalDir: true,
  }
};

export default nextConfig;
