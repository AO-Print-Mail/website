const withPlugins = require('next-compose-plugins')

const webpack = (config) => {
  config.module.rules.push({
    test: /\.md$/,
    use: 'raw-loader',
  })
  return config
}

module.exports = withPlugins([], { target: 'serverless', webpack })
