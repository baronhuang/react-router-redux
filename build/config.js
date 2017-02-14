
/**
 * webpack等的总配置
 * */
var path = require('path');
module.exports = {
  port: 9000,
  rootPath: path.resolve(__dirname, '../'),
  path: path.join(__dirname, '../dist'), /*这个是文件最终生成在哪里的目录，跟publicPath不一样*/
  publicPath: '/',  /*这个是相对于path的目录，是文件到时候build到path里面的目录*/
  proxyTable: {           /*代理配置*/
    '/api': 'http://localhost:3000/'
  },
}
