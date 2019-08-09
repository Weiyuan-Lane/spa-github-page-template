const withSass = require('@zeit/next-sass');
const path = require('path');

module.exports = withSass({
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
            publicPath: '/_next/static/images/',
            outputPath: 'static/images/',
            name: '[name].[hash:15].[ext]',
          },
        },
      }
    )

    config.resolve.alias['@styles'] = path.join(__dirname, 'styles')
    config.resolve.alias['@layouts'] = path.join(__dirname, 'layouts')
    config.resolve.alias['@images'] = path.join(__dirname, 'images')

    return config;
  }
});