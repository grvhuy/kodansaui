/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "pqxhavcshlsgvyjmkhkv.supabase.co",
      },
      {
        hostname: "cdn.kodansha.us", // Thêm hostname này
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.kodansa.tqbaoo.host/api/:path*',
      },
      {
        source: '/api/:path*',
        destination: 'https://cdn.kodansha.us/:path*',
      },
    ];
  },
};

export default nextConfig;
