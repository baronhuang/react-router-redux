/**
 * Created by Administrator on 2017/1/7.
 */
import { call, put, takeEvery, takeLatest, fork, take } from 'redux-saga/effects'
import axios from 'axios'
import * as actions from '../actions'
import {browserHistory} from 'react-router'

/*延迟*/
export const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

/*拉取数据*/
export function fetch(method, url, params) {
    var options = {
        method: method,
        url: `/api/${url}`,
    }
    if(['post', 'put'].indexOf(method) != -1){
        options.data = params;
    }else{
        options.params = params;
    }
    return  axios(options);
}

/*注册*/
function* signup(action) {
    try {
        yield put(actions.toast.show({type: 'loading', msg: '提交中'}));
        const res = yield call(fetch, 'post', 'users', action.params);
        yield delay(2000);
        if(res.statusCode == 200){
            yield put(actions.user.success(action.type, res.data));
            browserHistory.push('/');
        }else{
            alert(res.msg);
        }
        yield put(actions.toast.hide());

    }catch (e){
        console.error(e);
        yield put(actions.toast.hide());
    }
}

/*登录*/
function* signin(action) {
    console.log(action);
    try {
        yield put(actions.toast.show({type: 'loading', msg: '登录中'}));
        const res = yield call(fetch, 'get', 'users', action.params);
        yield delay(500);
        if(res.statusCode == 200){
            yield put(actions.user.success(action.type, res.data));
            browserHistory.push('/');
        }else{
            alert(res.msg);
        }
        yield put(actions.toast.hide());

    }catch (e){
        console.error(e);
        yield put(actions.toast.hide());
    }
}


/*获取文章列表*/
function* getArticles(action) {
    try{
        yield put(actions.toast.show({type: 'loading', msg: '加载中'}));
        let res;
        const {params} = action;
        if(params && params.type == 'my'){
           res = yield call(fetch, 'get', 'articles/my');
        }else{
            res = yield call(fetch, 'get', 'articles/list', params);
        }
        yield delay(500);
        if(res.statusCode == 200){
            yield put(actions.article.success(action.type, res.data));
        }else{
            alert(res.msg);
        }
        yield put(actions.toast.hide());
    }catch (e){
        console.error(e);
        yield put(actions.toast.hide());
    }
}

/*添加文章*/
function* postArticles(action) {
    try{
        yield put(actions.toast.show({type: 'loading', msg: '提交中'}));
        const res = yield call(fetch, 'post', 'articles', action.params);
        yield delay(500);
        if(res.statusCode == 200){
            yield put(actions.article.success(action.type, res.data));
            browserHistory.push('/my');
        }else{
            alert(res.msg);
        }
        yield put(actions.toast.hide());
    }catch (e){
        console.error(e);
        yield put(actions.toast.hide());
    }
}

export default function* root() {
    yield takeEvery(actions.USER.POST, signup);
    yield takeEvery(actions.USER.GET, signin);
    yield takeEvery(actions.ARTICLE.GET, getArticles);
    yield takeEvery(actions.ARTICLE.POST, postArticles);
    // yield takeEvery('abc', oo);
}