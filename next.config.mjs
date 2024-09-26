import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
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
        source: "/api/:path*",
        destination: "https://api.kodansa.tqbaoo.host/api/:path*",
      },
      {
        source: "/api/:path*",
        destination: "https://cdn.kodansha.us/:path*",
      },
    ];
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig)
