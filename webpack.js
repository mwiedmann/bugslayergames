/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const config = {
  entry: './src/index.tsx',
  output: {
    filename: `[name].[hash].min.js`,
    chunkFilename: `[name].[chunkhash].min.js`,
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    // Need to add the .tsx, .ts extensions for ts-loader
    extensions: ['.tsx', '.ts', '.js']
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin([
      { from: 'src/images', to: 'images' },
      { from: 'runtimes', to: 'runtimes' },
      { from: 'src/css', to: 'css' },
      { from: 'site-config' }
    ]),
    new HtmlWebpackPlugin({
      template: 'src/index.ejs',
      minify: false
    })
  ]
}

module.exports = config
