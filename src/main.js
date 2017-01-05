/**
 * Created by Administrator on 2017/1/4 0004.
 */

import React from 'react'
import ReactDom from 'react-dom'
import {Router, browserHistory} from 'react-router'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunkMiddleware from  'redux-thunk'
import createLogger from 'redux-logger'
import Immutable from 'immutable'
import _ from 'lodash'

import reducers from './reducers'
import routes from './routes'


console.log(process.env);
const middleware = [thunkMiddleware];


if(process.env.NODE_ENV == 'development'){
    middleware.push(createLogger({
        stateTransformer: state => {
            const newState = {};
            for (const i of Object.keys(state)) {
                if (Immutable.Iterable.isIterable(state[i])) {
                    newState[i] = state[i].toJS();
                } else {
                    newState[i] = state[i];
                }
            }
            return newState;
        }
    }));
}


const initState = {};
Object.keys(window.__initialState__).map(key => (
    initState[key] = Immutable.fromJS(window.__initialState__[key])
));

const store = createStore(
    reducers,
    initState,
    applyMiddleware(...middleware)
);
ReactDom.render(
    <Provider store={store}>
        <Router
            routes={routes}
            history={browserHistory}
        />
    </Provider>,
    document.getElementById('mount')
)