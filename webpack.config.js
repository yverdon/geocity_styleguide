const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const plugins = [
  new MiniCssExtractPlugin(),
  new SpriteLoaderPlugin(),
  new CleanWebpackPlugin({
    cleanOnceBeforeBuildPatterns: ['**/*', '!.gitkeep'],
  }),
];

module.exports = {
  mode: process.env.NODE_ENV,
  resolve: {
    extensions: ['.js', '.css'],
    alias: {
      '@': path.resolve(__dirname, 'assets'),
    },
  },
  entry: {
    common: path.resolve(__dirname, 'assets/scripts/common.js'),
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js',
    library: 'Toolkit',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  plugins,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(svg|png|jpe?g|gif|webp)$/,
        exclude: path.resolve('./assets/icons'),
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/',
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name][ext]',
        },
      },
      {
        test: /\.svg$/,
        include: path.resolve('./assets/icons'),
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              extract: true,
              spriteFilename: 'assets/icons.svg',
              esModule: false,
            },
          },
          'svgo-loader',
        ],
      },
    ],
  },
  devServer: {
    proxy: {
      '**': {
        target: 'http://localhost:4000',
      },
    },
    allowedHosts: 'localhost'.split(/\s+/),
    host: '0.0.0.0',
    port: 3000,
    compress: true,
    client: {
      overlay: true,
      // Enable `webSocketURL` if you use Pontsun configuration
      // webSocketURL: {
      //   port: 443,
      // },
    },
    static: {
      directory: './components/**/*.nunj',
    },
  },
  optimization: {
    minimizer: [new TerserJSPlugin(), new CssMinimizerPlugin()],
  },
};
