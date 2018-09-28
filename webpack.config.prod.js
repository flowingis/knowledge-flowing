const commonConfiguration = require('./webpack.config.common')

console.log('TEST', env.GOGGLE_CLIENT_ID)

module.exports = {
  ...commonConfiguration,
  mode: 'production',
  devtool: 'none'
}
