const withSass = require('@zeit/next-sass');
const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');

/*****************************************************************************
 * SET YOUR CONFIGURATION HERE
 *****************************************************************************/

 // Set base path if your static app does not start from root
const basePath = '/spa-github-page-template'

/*****************************************************************************
 *****************************************************************************/

const webpackBasePath = process.env.SPA_EXP_BUILD === 'true' ? basePath : ''

module.exports = withSass({
  publicRuntimeConfig: {
    basePath: webpackBasePath,
  },
  assetPrefix: webpackBasePath,
  exportPathMap: function() {

    // Get all file name in pages/

    // For all pages if it starts with index.js

    return {
      '/': { page: '/' },
      '/cats': { page: '/cats' }
    };
  },
  webpack: function(config) {
    config.module.rules.push(
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
            fallback: 'file-loader',
            publicPath: `${webpackBasePath}/_next/static/images/`,
            outputPath: 'static/images/',
            name: '[name].[hash:15].[ext]',
          },
        },
      }
    )

    config.plugins.push(new CompressionPlugin())
    config.resolve.alias['@styles'] = path.join(__dirname, 'styles')
    config.resolve.alias['@helpers'] = path.join(__dirname, 'helpers')
    config.resolve.alias['@images'] = path.join(__dirname, 'images')

    return config;
  }
});