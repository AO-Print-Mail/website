const withPlugins = require('next-compose-plugins')
// TODO: configure this to ignore netlify build - because it threw an error
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// })

module.exports = withPlugins(
  [
    /*withBundleAnalyzer*/
  ],
  {
    target: 'serverless',
    future: {
      webpack5: true,
    },
    images: {
      domains: ['maps.googleapis.com'],
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

      // if (!options.isServer) {
      //   const CircularDependencyPlugin = require('circular-dependency-plugin')
      //   config.plugins.push(
      //     new CircularDependencyPlugin({
      //       exclude: /node_modules/,
      //       failOnError: true,
      //       allowAsyncCycles: false,
      //       cwd: process.cwd(),
      //     })
      //   )
      // }
      return config
    },
  }
)
