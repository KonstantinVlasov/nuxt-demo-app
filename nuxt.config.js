'use strict'

const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  head: {
    title: 'Airbus Web App',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', content: 'Airbus Demo Web App' }
    ]
  },
  performance: {
    gzip: true
  },
  plugins: [
    '~plugins/vue-notifications'
  ],
  build: {
    vendor: [
      'axios'
    ],
    loaders: [{
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
        fallbackLoader: 'style-loader',
        loader: 'css-loader'
      })
    }, {
      test: /\.svg$/,
      loader: 'svg-inline-loader',
      exclude: /node_modules/
    }, {
      test: /(.*node_modules)(.*svg)(\?.*)?$/,
      loader: 'url-loader',
      query: {
        limit: 10000,
        name: 'imgs/[name].[hash:7].[ext]'
      }
    }, {
      test: /\.(png|jpe?g|gif)$/,
      loader: 'url-loader',
      query: {
        limit: 1000, // 1KO
        name: 'img/[name].[hash:7].[ext]'
      }
    }, {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url-loader',
      query: {
        limit: 1000, // 1 KO
        name: 'fonts/[name].[hash:7].[ext]'
      }
    }],
    extend (config) {
      config.plugins = config.plugins || []
      config.plugins.push(new ExtractTextPlugin('styles.css'))
    }
  },
  router: {
    linkActiveClass: '-active'
  },
  loading: {
    color: '#3BAFDA',
    height: '4px'
  }
}
