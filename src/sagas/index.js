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
export function fetch(method, url, params, type) {
    var options = {
        method: method,
        url: `/api/${url}`,
    }
    if(['post', 'put'].indexOf(method) != -1){
        options.data = params;
    }else{
        options.params = params;
    }

    options.type = type;
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
        const res = yield call(fetch, 'get', 'users/login', action.params);
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

/*上传头像*/
function* postAvatar(action) {
    try {
        yield put(actions.toast.show({type: 'loading', msg: '提交中'}));
        const res = yield call(fetch, 'post', 'users/avatar', action.params, 'file');
        yield delay(1000);
        if(res.statusCode == 200){
            yield put(actions.user.success(action.type, res.data));
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

/*获取文章列表*/
function* getArticles(action) {
    try{
        yield put(actions.toast.show({type: 'loading', msg: '加载中'}));
        let res;
        const {params} = action;
        res = yield call(fetch, 'get', `articles/${params.type}`);
        yield delay(500);
        if(res.statusCode == 200){
            yield put(actions.article.success(action.type, {data: res.data, dataType: params.type}));
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

function* deleteArticles(action) {
    try{
        yield put(actions.toast.show({type: 'loading', msg: '删除中'}));
        const res = yield call(fetch, 'delete', 'articles', {_id: action.params._id});
        if(res.statusCode == 200){
            // const data =
            yield put(actions.article.success(action.type, action.params.index));
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
    yield takeEvery(actions.USER_POST_AVATAR, postAvatar);
    yield takeEvery(actions.ARTICLE.GET, getArticles);
    yield takeEvery(actions.ARTICLE.POST, postArticles);
    yield takeEvery(actions.ARTICLE.DELETE, deleteArticles);
}