/**
 * Created by Administrator on 2017/1/5 0005.
 */

/**
 * 路由配置
 * */
import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './containers/App'
import Home from './containers/Home'
import Detail from './containers/Detail'
import Sign from './containers/Sign'
import My from './containers/My'
import MyList from './containers/My/List'
import Edit from './containers/My/Edit'
import Setting from './containers/My/Setting'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/detail/:id" component={Detail}/>
        <Route path="/signin" component={Sign}/>
        <Route path="/signup" component={Sign}/>
        {/*个人后台需要登录验证*/}
        <Route path="my" component={My}>
            <IndexRoute component={MyList}/>
            <Route path="edit" component={Edit}/>
            <Route path="setting" component={Setting}/>
        </Route>
    </Route>
);
