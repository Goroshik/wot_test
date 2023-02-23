/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'api.tanki.su',
        port: '',
        pathname: '/static/2.75.1_lst/wot/encyclopedia/vehicle/** ',
      },
    ],
  },
}

module.exports = nextConfig
