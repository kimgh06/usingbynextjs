/** @type {import('next').NextConfig} */

const apikey = "5035c021fc6a2236a7950c34e421ac51";
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
      destination: `${url}/movie/:id?api_key=${apikey}`
    }];
  }
}

module.exports = nextConfig;
