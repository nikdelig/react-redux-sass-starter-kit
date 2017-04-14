const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const config = {
  devtool: 'source-map',
  entry: ['webpack/hot/dev-server' , './src/js/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
  },
  module: {
      rules: [{
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
      }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({template: './index.html'})
  ],
};

module.exports = config;
