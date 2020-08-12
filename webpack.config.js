const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: {
    main: './src/main.js',
  },
  output: {
    filename: 'assets/scripts/[name].js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    watchContentBase: true,
    writeToDisk: true,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: 'head',
      scriptLoading: 'defer',
    }),
    new MiniCssExtractPlugin({
      filename: './assets/styles/[name].css',
    }),
    new CleanWebpackPlugin({
      verbose: true,
    }),
  ],
};
