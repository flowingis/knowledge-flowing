const commonConfiguration = require('./webpack.config.common')
const webpack = require('webpack')

module.exports = {
  ...commonConfiguration,
  plugins: [
    ...commonConfiguration.plugins,
    new webpack.EnvironmentPlugin({
      GOGGLE_CLIENT_ID: 'dummy',
      GOGGLE_API_KEY: 'dummy',
      PIPEDRIVE_API_TOKEN: 'dummy',
      PIPEDRIVE_COMPANY_DOMAIN: 'ideato',
      BASE_GOOGLE_DRIVE_DIRECTORY: '1WZS3_nShJv-Im3xPd69UytYHl0mWstkD',
      DISCOVERY_ELEMENTS_SPREADSHEET_ID:
        '1Naop1VImN2N6EZAyxVdrqIg_s4onjVbD1MHdX3C43q0',
      DISCOVERY_ELEMENTS_SPREADSHEET_RANGE: 'Elements!A2:C'
    })
  ],
  mode: 'production',
  devtool: 'none'
}
