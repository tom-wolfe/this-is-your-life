const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  context: path.join(__dirname, './src'),
  mode: 'development',
  target: 'web',
  performance: { hints: false },
  entry: [
    './index.js', './styles/index.scss'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: ['babel-loader'] },
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.handlebars$/, use: ['raw-loader'] }
    ]
  },
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules')
    ],
    alias: {
      handlebars: 'handlebars/dist/handlebars.min.js'
    }
  }
}