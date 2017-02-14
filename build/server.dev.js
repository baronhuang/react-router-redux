/**
 * Created by Administrator on 2017/1/4 0004.
 */

/**
 * 开发环境的server服务
 * */
'use strict'
/*支持es6语法*/
require('babel-register')();
var path = require('path');
var express = require('express');

var webpack = require('webpack')
var config = require('./config')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.config.dev')

// default port where dev server listens for incoming traffic
var port = config.port
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.proxyTable

var app = express()
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
    // publicPath: webpackConfig.output.publicPath,
    stats: {
        colors: true,
        chunks: false
    }
})

var hotMiddleware = require('webpack-hot-middleware')(compiler)
// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
    var options = proxyTable[context]
    if (typeof options === 'string') {
        options = { target: options }
    }
    app.use(proxyMiddleware(context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)
app.use(hotMiddleware)

// app.use('/static', express.static('./static'))

module.exports = app.listen(port, function (err) {
    if (err) {
        console.log(err)
        return
    }
    console.log('Listening at http://localhost:' + port + '\n')
})
