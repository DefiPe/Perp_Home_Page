/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  ...nextConfig, // Spread existing Next.js config
  images: {
    domains: ['cryptologos.cc', 'media1.giphy.com', 'defipe.b-cdn.net'], // Add other external domains you are using
  },
  async rewrites() {
    return [
      {
        source: '/public/mail.html',
        destination: '/pages/api/subscriberUser.js',
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/airdrop',
        destination: 'https://test.defipe.io/fipe-club',
        permanent: false, // Use true if it's a permanent redirect (HTTP 308)
      },
    ];
  },
};
