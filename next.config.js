/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  // Add favicon configuration
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Link',
            value: '<https://avatars.githubusercontent.com/u/12870266?v=4>; rel="icon"',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig 