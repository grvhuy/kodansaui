/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      hostname: "pqxhavcshlsgvyjmkhkv.supabase.co"
    }]
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.kodansa.tqbaoo.host/api/:path*'
      }
    ]
  }
};

export default nextConfig;
