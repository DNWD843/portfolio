const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    main: './src/scripts/index.js',
    fourRules: './src/projects/FOUR_RULES/index.js',
    releaseCard: './src/projects/release-card',
    treasure: './src/projects/treasure/treasure.js',
    howToLearn: './src/projects/howToLearn',
    russianTravel: './src/projects/russianTravel',
    mesto: './src/projects/mesto/src/scripts/index.js',
  },
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: '[name].bundle.js',
  },
  experiments: {
    asset: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: ['babel-loader'],
      },
      {
        test: /\.(gif|png|jpg|jpeg)$/,
        type: 'asset/inline',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        type: 'asset/inline',
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader',
        ],
        /*Загрузчики используются вебпаком справа налево,
        так что последним должен быть sass-loader(если его установили и используем),
         затем PostCSS, затем CSS и, наконец, style-loader,
         который применяет скомпилированные стили к элементам DOM*/
      },
      {
        test: /\.html$/,
        use: [{ loader: 'html-loader' }],
      },
    ],
  },
  /*mode: 'development',
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, './dist'),
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },*/
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      template: './src/projects/FOUR_RULES/index.html',
      filename: 'fourRules.html',
      chunks: ['fourRules'],
    }),
    new HtmlWebpackPlugin({
      template: './src/projects/release-card/index.html',
      filename: 'releaseCard.html',
      chunks: ['releaseCard'],
    }),
    new HtmlWebpackPlugin({
      template: './src/projects/BALL_BLOCKS.html',
      filename: 'ballAndBlocks.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/projects/hangman.html',
      filename: 'hangman.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/projects/treasure/treasure.html',
      filename: 'treasure.html',
      chunks: ['treasure'],
    }),
    new HtmlWebpackPlugin({
      template: './src/projects/painter.html',
      filename: 'painter.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/projects/snake.html',
      filename: 'snake.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/projects/howToLearn/index.html',
      filename: 'howToLearn.html',
      chunks: ['howToLearn'],
    }),
    new HtmlWebpackPlugin({
      template: './src/projects/russianTravel/index.html',
      filename: 'russianTravel.html',
      chunks: ['russianTravel'],
    }),
    new HtmlWebpackPlugin({
      template: './src/projects/mesto/src/index.html',
      filename: 'mesto.html',
      chunks: ['mesto'],
      src: './images/headerLogo.svg',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
