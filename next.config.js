/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/form",
        permanent: false,
      }
    ]
  }
}

module.exports = nextConfig;
