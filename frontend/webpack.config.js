const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'production',
  entry: './src/index.js',

  output: {
    publicPath: '/',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/images/[hash][ext][query]',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@containers': path.resolve(__dirname, 'src/containers/'),
      '@hooks': path.resolve(__dirname, 'src/hooks/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@img': path.resolve(__dirname, 'src/assets/imgs/'),
      '@config': path.resolve(__dirname, 'src/utils/config/'),
      '@constants': path.resolve(__dirname, 'src/utils/constants/'),
    },
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|gif|jpg|svg|ico)$/,
        type: 'asset',
      },
    ],
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new Dotenv({
      systemvars: true,
    }),
  ],

  devServer: {
    historyApiFallback: true,
  },
};
