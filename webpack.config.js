const path = require('path')
const webpack = require('webpack')

const APP_DIR = path.resolve(__dirname)

module.exports = {
  entry: path.join(__dirname, 'src/index.js'),
  mode: 'development',
  devtool: 'source-map',
  output: {
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react']
        }
        // include: APP_DIR
      }
    ]
  }
}
