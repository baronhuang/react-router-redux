/**
 * Created by Administrator on 2017/1/12.
 */

/*文章*/
import { call, put, takeEvery, takeLatest, fork, take } from 'redux-saga/effects'
import {browserHistory} from 'react-router'
import * as actions from '../actions'
import utils from '../utils'


export default {
    /*获取文章列表*/
    * getArticle (action) {
        try{
            yield put(actions.toast.show({type: 'loading', msg: '加载中'}));
            let res;
            const {params} = action;
            res = yield call(utils.fetch, 'get', `articles/${params.option}`);
            // yield utils.delay(500);
            if(res.statusCode == 200){
                yield put(actions.article.success(action.type, {data: res.data, option: params.option}));
            }else{
                alert(res.msg);
            }
            yield put(actions.toast.hide());
        }catch (e){
            console.error(e);
            yield put(actions.toast.hide());
        }
    },
    /*添加文章*/
    * postArticle(action){
        try{
            yield put(actions.toast.show({type: 'loading', msg: '提交中'}));
            const res = yield call(utils.fetch, 'post', 'articles', action.params);
            yield utils.delay(500);
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
    },
    /*删除文章*/
    * deleteArticle (action) {
        try{
            yield put(actions.toast.show({type: 'loading', msg: '删除中'}));
            const res = yield call(utils.fetch, 'delete', 'articles', {_id: action.params._id});
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
}