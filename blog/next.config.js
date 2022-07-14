/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    POSTS_API_URL: process.env.POSTS_API_URL,
    COMMENTS_API_URL: process.env.COMMENTS_API_URL,
    QUERY_API_URL: process.env.QUERY_API_URL
  }
}

module.exports = nextConfig
