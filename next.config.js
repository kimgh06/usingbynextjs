/** @type {import('next').NextConfig} */

const apikey = process.env;
const url = "https://api.themoviedb.org/3";
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/form",
        permanent: false,
      }
    ];
  },
  async rewrites() {
    return [{
      source: "/api/movies",
      destination: `${url}/movie/popular?api_key=${apikey}`
    }, {
      source: '/api/movies/:id',
      destination: `${url}/movie/:id`
    }];
  }
}

module.exports = nextConfig;
