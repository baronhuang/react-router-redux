/**
 * Created by Administrator on 2017/1/5 0005.
 */

import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './containers/App'
import Home from './containers/Home'
import My from './containers/My'
import Detail from './containers/Detail'
import Sign from './containers/Sign'
import Edit from './containers/Edit'
import Setting from './containers/Setting'

export default (
    <Route path="/" component={App}>
        <IndexRoute  component={Home} />
        <Route path="/my" component={My} />
        <Route path="/detail/:id" component={Detail} />
        <Route path="/signin" component={Sign} />
        <Route path="/signup" component={Sign} />
        <Route path="/edit" component={Edit} />
        <Route path="/setting" component={Setting} />
    </Route>
);
