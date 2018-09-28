const commonConfiguration = require('./webpack.config.common')
const Dotenv = require('dotenv-webpack')

module.exports = {
  ...commonConfiguration,
  plugins: [
    ...commonConfiguration.plugins,
    new Dotenv()
  ],
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    host: '0.0.0.0'
  }
}
