const path = require('path')
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true, 
}

module.exports = nextConfig;

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}
module.exports = {
  images: {
    domains: ['res.cloudinary.com', 'dev.to', 'unsplash.com', 'images.unsplash.com', 'api.lorem.space']
  }
}
