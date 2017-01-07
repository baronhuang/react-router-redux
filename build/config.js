// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path');

module.exports = {
  

  port: 8000,
  rootPath: path.resolve(__dirname, '../'),
  path: path.join(__dirname, '../public'), /*这个是文件最终生成在哪里的目录，跟publicPath不一样*/
  publicPath: '/',  /*这个是相对于path的目录，是文件到时候build到path里面的目录*/
  proxyTable: {
    // '/api': 'http://localhost:9101/'
  },
  // CSS Sourcemaps off by default because relative paths are "buggy"
  // with this option, according to the CSS-Loader README
  // (https://github.com/webpack/css-loader#sourcemaps)
  // In our experience, they generally work as expected,
  // just be aware of this issue when enabling this option.
  cssSourceMap: false


  // build: {
  //   // env: require('./prod.env'),
  //   index: path.resolve(__dirname, '../dist/index.html'),
  //   assetsRoot: path.resolve(__dirname, '../dist'),
  //   assetsSubDirectory: 'static',
  //   assetsPublicPath: '/',
  //   productionSourceMap: true,
  //   // Gzip off by default as many popular static hosts such as
  //   // Surge or Netlify already gzip all static assets for you.
  //   // Before setting to `true`, make sure to:
  //   // npm install --save-dev compression-webpack-plugin
  //   productionGzip: false,
  //   productionGzipExtensions: ['js', 'css']
  // },
  //
  // dev: {
  //   // env: require('./dev.env'),
  //   port: 8000,
  //   assetsSubDirectory: 'static',
  //   assetsPublicPath: '/',
  //   proxyTable: {
  //     // '/api': 'http://localhost:9101/'
  //   },
  //   // CSS Sourcemaps off by default because relative paths are "buggy"
  //   // with this option, according to the CSS-Loader README
  //   // (https://github.com/webpack/css-loader#sourcemaps)
  //   // In our experience, they generally work as expected,
  //   // just be aware of this issue when enabling this option.
  //   cssSourceMap: false
  // }
}
