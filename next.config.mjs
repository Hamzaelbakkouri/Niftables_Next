/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    async redirects() {
      return [
        {
          source: '/public/videos/:path*',
          destination: '/:path*',
          permanent: true,
        },
      ];
    },
  };

export default nextConfig;
