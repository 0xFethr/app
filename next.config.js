/** @type {import('next').NextConfig} */
const withGraphql = require('next-plugin-graphql')
const withImages = require("next-images");

module.exports = withGraphql(withImages({
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  webpack(config, options) {
      return config;
  }
}))