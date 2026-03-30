/** @type {import('next').NextConfig} */
const nextConfig = {
  // Output standalone build for smaller Docker images
  output: 'standalone',
  // Allow cross-origin requests from any IP in development
  allowedDevOrigins: ['100.99.105.67:3000'],
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,POST,PUT,DELETE,OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type, Authorization' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
