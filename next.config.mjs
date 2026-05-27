/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: 'www.technolife.com',
        protocol: 'https'
      },
      {
        hostname: 'encrypted-tbn0.gstatic.com',
        protocol: 'https'
      }
    ]
  }
}
export default nextConfig
