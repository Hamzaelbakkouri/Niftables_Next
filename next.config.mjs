/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    assetPrefix: process.env.NODE_ENV === 'production' ? '/Niftables_Next/' : '',
    async redirects() {
      return [
        {
          source: '/videos/:path*',
          destination: '/:path*',
          permanent: true,
        },
      ];
    },
  };

export default nextConfig;
