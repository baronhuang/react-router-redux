/**
 * Created by Administrator on 2017/2/5.
 */

/**
 * 服务器端渲染
 * */

// require('babel-register')();
process.env.NODE_ENV = 'production'
import path from 'path'
import express from 'express'
import proxyMiddleware from 'http-proxy-middleware'
import fs from 'fs'
import React from 'react'
import {renderToString} from 'react-dom/server'
import { match, createMemoryHistory, RouterContext } from 'react-router'
import {Provider} from 'react-redux'
import serialize from 'serialize-javascript'

import config from './config'
import routes from '../src/routes'
import configStore from '../src/store'
import sagas from '../src/sagas'


console.log(process.env.NODE_ENV);
const app = express();
const port = config.port;
const proxyTable = config.proxyTable;

Object.keys(proxyTable).forEach(function (context) {
    let options = proxyTable[context]
    if (typeof options === 'string') {
        options = { target: options }
    }
    app.use(proxyMiddleware(context, options))
})

// app.use(require('connect-history-api-fallback')())
app.use('/css', express.static(path.resolve(__dirname, '../dist/css')));
app.use('/js', express.static(path.resolve(__dirname, '../dist/js')));
app.use('/img', express.static(path.resolve(__dirname, '../dist/img')));
app.use('/fonts', express.static(path.resolve(__dirname, '../dist/fonts')));

const html = (content, initialState) => {
    /*读取dist里面生成的index.html*/
    let template = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf-8');
    template = template.replace('<div id=mount></div>', `<div id=mount>${content}</div>`);
    template = template.replace('window.__initialState__={}',
        `window.__initialState__ = ${initialState};`);
    return template;
}

app.use(function(req, res) {
    console.log('req', req.url)
    const store = configStore()

    // Note that req.url here should be the full URL path from
    // the original request, including the query string.
    match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
        // console.log(error, redirectLocation, renderProps)
        if (error) {
            res.status(500).send(error.message)
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search)
        } else if (renderProps && renderProps.components) {
            const rootComp = <Provider store={store}>
                                <RouterContext {...renderProps} />
                            </Provider>

            store.runSaga(sagas).done.then(() => {
                console.log('sagas complete')
                res.status(200).send(
                    html(
                        renderToString(rootComp),
                        serialize(store.getState())
                    )
                )
            }).catch((e) => {
                console.log(e.message)
                res.status(500).send(e.message)
            })

            renderToString(rootComp)
            store.close()

        } else {
            res.status(404).send('Not found')
        }
    })
})


module.exports = app.listen(port, function (err) {
    if (err) {
        console.log(err)
        return
    }
    console.log('Listening at http://localhost:' + port + '\n')
})