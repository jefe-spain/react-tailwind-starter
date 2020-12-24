const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackBar = require('webpackbar')


const progreesHandler = percentage => console.log(percentage)

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new webpackBar()
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },  
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    quiet: true,
    open: true
  } 
};