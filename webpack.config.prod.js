const commonConfiguration = require('./webpack.config.common')
const webpack = require('webpack')

console.log(process.env.PROVA)

module.exports = {
  ...commonConfiguration,
  plugins: [
    ...commonConfiguration.plugins,
    new webpack.DefinePlugin({
      GOGGLE_CLIENT_ID: JSON.stringify(process.env.GOGGLE_CLIENT_ID),
      GOGGLE_API_KEY: JSON.stringify(process.env.GOGGLE_API_KEY),
      PIPEDRIVE_API_TOKEN: JSON.stringify(process.env.PIPEDRIVE_API_TOKEN),
      PIPEDRIVE_COMPANY_DOMAIN: JSON.stringify('ideato'),
      BASE_GOOGLE_DRIVE_DIRECTORY: JSON.stringify('1WZS3_nShJv')
    })
  ],
  mode: 'production',
  devtool: 'none'
}
