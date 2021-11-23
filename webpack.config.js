const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const mode = process.env.NODE_ENV;
const isDev = mode === 'development';
const generateFilename = ext => isDev ?
  `[name].${ext}` :
  `[name].[contenthash].${ext}`;

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: './index.js',
    basket: './script.js',
  },
  output: {
    filename: `./js/${generateFilename('js')}`,
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    assetModuleFilename: '[path][name][ext][query]',
    environment: {
      arrowFunction: false,
    }
  },
  mode,
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
      excludeChunks: ['basket'],
      minify: {
        collapseWhitespace: !isDev,
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'basket.html',
      template: './basket.html',
      excludeChunks: ['main'],
      minify: {
        collapseWhitespace: !isDev,
      }
    }),
    new MiniCssExtractPlugin({
      filename: `./css/${generateFilename('css')}`,
    }),
    new CopyPlugin({
      patterns: [
        { from: 'img', to: 'img' },
        { from: '*.json' },
        { from: 'server.php', to: 'server.php' }
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          },
        },
      },
      {
        test: /\.(c|sa|sc)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.json$/i,
        type: 'asset/resource',
      },
    ]
  },
  devServer: {
    static: './dist',
    port: 3000,
    hot: true,
    compress: true,
    client: {
      overlay: true,
    },
    devMiddleware: {
      writeToDisk: true,
    },
    historyApiFallback: true,
  },
  devtool: isDev && 'source-map'
};