/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
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
}