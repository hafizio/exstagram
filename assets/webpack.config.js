const CopyWebpackPlugin = require("copy-webpack-plugin")
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  devtool: 'source-map',
  entry: ['bootstrap-loader', './static/js/app.js'],
  output: {
    path: __dirname.substr(0, __dirname.lastIndexOf("/")) + "/priv/static/",
    filename: "js/app.js"
  },
  plugins: [
    new ExtractTextPlugin({ filename: 'css/app.css', allChunks: true }),
    new CopyWebpackPlugin([{ from: './static/assets/' }]),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      Tether: "tether",
      "window.Tether": "tether",
      Alert: "exports-loader?Alert!bootstrap/js/dist/alert",
      Button: "exports-loader?Button!bootstrap/js/dist/button",
      Carousel: "exports-loader?Carousel!bootstrap/js/dist/carousel",
      Collapse: "exports-loader?Collapse!bootstrap/js/dist/collapse",
      Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
      Modal: "exports-loader?Modal!bootstrap/js/dist/modal",
      Popover: "exports-loader?Popover!bootstrap/js/dist/popover",
      Scrollspy: "exports-loader?Scrollspy!bootstrap/js/dist/scrollspy",
      Tab: "exports-loader?Tab!bootstrap/js/dist/tab",
      Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
      Util: "exports-loader?Util!bootstrap/js/dist/util"
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          plugins: ['transform-decorators-legacy'],
          presets: ['env', 'react', 'es2015', 'stage-2', 'stage-0']
        },
      },
      { test: /bootstrap[\/\\]dist[\/\\]js[\/\\]umd[\/\\]/, loader: 'imports-loader?jQuery=jquery' },
      { test: /\.(woff2?|svg)$/, loader: 'url-loader?limit=10000' },
      { test: /\.(ttf|eot)$/, loader: 'file-loader' },
    ],
  }
}
