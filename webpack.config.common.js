const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const dist = path.join(__dirname, 'dist')

module.exports = {
  entry: [
    'babel-polyfill',
    path.join(__dirname, 'src', 'index.js'),
    path.join(__dirname, 'style', 'index.scss')
  ],
  output: {
    path: dist,
    filename: '[name].bundle.js'
  },
  resolve: {
    alias: {
      src: path.join(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.svg$/,
        use: ['url-loader?mimetype=image/svg+xml']
      },
      {
        rules: [
          {
            test: /\.scss$/,
            use: [
              'style-loader',
              'css-loader',
              'sass-loader'
            ]
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: false
    })
  ]
}
