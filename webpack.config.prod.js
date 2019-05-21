const path = require("path");
const webpack = require("webpack");
const clearWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  entry: ['./src/App'],
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: "bundle.js", //"bundle.[hash].js",
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
  plugins: [
    new clearWebpackPlugin(['dist']),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/templates/index.html'
    }),
    new Dotenv(),
  ]
};