const withSass = require('@zeit/next-sass');
const path = require('path');
const glob = require('glob');
const CompressionPlugin = require('compression-webpack-plugin');

/*****************************************************************************
 * SET YOUR CONFIGURATION HERE
 *****************************************************************************/

 // Set base path if your static app does not start from root
const basePath = ''; // '/spa-github-page-template'

// Get pages to be exported as static pages
// I have added logic to automatically detect all custom .js files in the
// `pages` directory, but you can change more if required
const pageFiles = glob.sync('**/*.js', {
  cwd: './pages/'
});

const exportPathMap = pageFiles.filter(function(file){
  // Filter out redundant files
  return !file.startsWith('_');
}).map(function(file){
  // Remove .js extensions and normalise each path
  const path = file.replace('.js', '');
  const normalisedIndexPath = path.replace(/(\/|)index/, '');
  const leadingSlashPath = `/${normalisedIndexPath}`;

  return leadingSlashPath;
}).reduce(function(acc, path){
  // Reduce to a single exportPathMap
  acc[path] = { page: path };
  
  return acc;
}, {});

/*****************************************************************************
 *****************************************************************************/

const webpackBasePath = process.env.SPA_EXP_BUILD === 'true' ? basePath : ''

module.exports = withSass({
  publicRuntimeConfig: {
    basePath: webpackBasePath,
  },
  assetPrefix: webpackBasePath,
  exportPathMap: function() {
    return exportPathMap;
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
    );

    config.plugins.push(new CompressionPlugin());
    config.resolve.alias['@styles'] = path.join(__dirname, 'styles');
    config.resolve.alias['@helpers'] = path.join(__dirname, 'helpers');
    config.resolve.alias['@images'] = path.join(__dirname, 'images');

    return config;
  }
});