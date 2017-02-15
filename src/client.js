/**
 * Created by Administrator on 2017/1/4 0004.
 */

/**
 * 前端的入口文件
 * */
import React from 'react'
import ReactDom from 'react-dom'
import {Router, browserHistory} from 'react-router'
import {Provider} from 'react-redux'
import routes from './routes'

/*-----自定义部分-----*/
import 'weui/dist/style/weui.min.css'
import 'ionicons/css/ionicons.min.css'
import './less/app.less'
import configStore from './store'
import sagas from './sagas'



const store = configStore(window.__initialState__)
store.runSaga(sagas)

ReactDom.render(
    <Provider store={store}>
        <Router
            routes={routes}
            history={browserHistory}
        />
    </Provider>,
    document.getElementById('mount')
)