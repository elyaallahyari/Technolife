/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: 'www.technolife.com',
        protocol: 'https'
      }
    ]
  }
}

export default nextConfig
