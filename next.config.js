const withPlugins = require('next-compose-plugins')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withPlugins([withBundleAnalyzer], {
  target: 'serverless',
  future: {
    webpack5: true,
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgo: true,
            svgoConfig: { removeViewBox: false, removeDesc: false },
          },
        },
      ],
    })
    return config
  },
})
