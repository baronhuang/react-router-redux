/**
 * Created by Administrator on 2017/2/9.
 */

/**
 * 配置store
 * 前端跟服务器端共用
 * */
import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware, { END } from 'redux-saga'
import createLogger from 'redux-logger'
import reducers from './reducers'


console.log(process.env.NODE_ENV);
export default function configStore(initialState = {}) {
    const sagaMiddleware = createSagaMiddleware()
    const middleware = [sagaMiddleware];

    if(process.env.NODE_ENV == 'development'){
        if (module.hot) {
            // Enable Webpack hot module replacement for reducers
            module.hot.accept('./reducers', () => {
                const nextRootReducer = require('./reducers')
                store.replaceReducer(nextRootReducer)
            })
        }

        middleware.push(createLogger())
    }

    const store = createStore(
        reducers,
        initialState,
        applyMiddleware(...middleware)
    );

    store.runSaga = sagaMiddleware.run
    store.close = () => store.dispatch(END)
    return store
}

