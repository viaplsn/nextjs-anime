/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ["cdn.myanimelist.net"]
  },
  async redirects() {
    return [
      {
        source: '/1',
        destination: '/',
        permanent: true
      }
    ]
  }
};

module.exports = nextConfig;
