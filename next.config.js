/** @type {import('next').NextConfig} */
const withGraphql = require('next-plugin-graphql')
const withImages = require("next-images");

module.exports = withGraphql(withImages({
  images: {
      domains: ['www.pngitem.com','images.unsplash.com','plus.unsplash.com','explorer-api.walletconnect.com'],
  },
  webpack(config, options) {
      return config;
  }
}))