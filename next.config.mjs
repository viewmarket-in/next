/** @type {import('next').NextConfig} */
const nextConfig = {
  // Increase chunk timeout to prevent loading errors
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  },
  // Configure webpack optimization
  webpack: (config, { isServer }) => {
    // Only apply to client-side
    if (!isServer) {
      // Increase chunk timeout
      config.output.chunkLoadTimeout = 10000; // 10 seconds

      // Optimize chunk splitting
      config.optimization.splitChunks = {
        chunks: "all",
        cacheGroups: {
          // Create a separate chunk for react and react-dom
          react: {
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            name: "react",
            chunks: "all",
          },
          // Create a separate chunk for vendors
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
            priority: 10,
            reuseExistingChunk: true,
          },
        },
      };
    }

    return config;
  },
  // Enable experimental features for better chunk handling
  experimental: {
    // Optimize package imports
    optimizePackageImports: [
      "lucide-react",
      "@radix-ui/react-icons",
      // Add other large packages you're using
    ],
  },
};

export default nextConfig;
