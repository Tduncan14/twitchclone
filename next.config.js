/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images:{
    domains:[
      "avatars.githubusercontent.com",
       "robohash.org",
       "static-cdn.jtvnw.net"
     
    ]
  }, eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}
