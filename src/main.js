/**
 * Created by Administrator on 2017/1/4 0004.
 */

import React from 'react'
import ReactDom from 'react-dom'
import {Router, browserHistory} from 'react-router'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunkMiddleware from  'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import createLogger from 'redux-logger'
import Immutable from 'immutable'
import _ from 'lodash'
import axios from 'axios'

import reducers from './reducers'
import routes from './routes'
import sagas from './sagas'


/*配置axios */
/*需要对post进行formdata转换*/
axios.interceptors.request.use(function (config) {
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    console.log(333, config.data)
    if(config.data){
        var str = [];
        var data = config.data;
        for(var p in data)
            if (data.hasOwnProperty(p) && data[p]) {
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(data[p]));
            }
        config.data = str.join("&");
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

/*默认过滤返回的数据*/
axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response.data;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});

console.log(process.env);
const sagaMiddleware = createSagaMiddleware()
const middleware = [thunkMiddleware, sagaMiddleware];

if(process.env.NODE_ENV == 'development'){
    // middleware.push(createLogger({
    //     stateTransformer: state => {
    //         const newState = {};
    //         for (const i of Object.keys(state)) {
    //             if (Immutable.Iterable.isIterable(state[i])) {
    //                 newState[i] = state[i].toJS();
    //             } else {
    //                 newState[i] = state[i];
    //             }
    //         }
    //         return newState;
    //     }
    // }));
}


const initState = {};
// Object.keys(window.__initialState__).map(key => (
//     initState[key] = Immutable.fromJS(window.__initialState__[key])
// ));

const store = createStore(
    reducers,
    initState,
    applyMiddleware(...middleware)
);

if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
        const nextRootReducer = require('./reducers')
        store.replaceReducer(nextRootReducer)
    })
}

sagaMiddleware.run(sagas);

ReactDom.render(
    <Provider store={store}>
        <Router
            routes={routes}
            history={browserHistory}
        />
    </Provider>,
    document.getElementById('mount')
)