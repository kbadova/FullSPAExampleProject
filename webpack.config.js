var path = require('path');

var LiveReloadPlugin = require('webpack-livereload-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var APP_DIR = path.resolve(__dirname, 'src');
var BUILD_DIR = path.resolve(__dirname, 'dist');

module.exports = {
  entry: path.resolve(APP_DIR, 'index.jsx'),
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new LiveReloadPlugin(),
    new HtmlWebpackPlugin({
      template: APP_DIR + '/index.html'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
