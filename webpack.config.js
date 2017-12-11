const path = require('path');
const webpack = require('webpack');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

console.log(path.resolve(__dirname, 'src/index.jsx'));

const APP_DIR = path.resolve(__dirname, 'src');
const BUILD_DIR = path.resolve(__dirname, 'dist');

module.exports = {
  devServer: {
    inline: true,
    contentBase: './',
    port: 3000
  },
  entry: path.resolve(APP_DIR, 'index.jsx'),
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'env']
        }
      },
      {
        test: /\.scss/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  },
  plugins: [
    new LiveReloadPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(APP_DIR, 'index.html')
    })
  ]
};
