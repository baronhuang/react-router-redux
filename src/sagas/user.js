/**
 * Created by Administrator on 2017/1/12.
 */

/*用户*/
import { call, put, takeEvery, takeLatest, fork, take } from 'redux-saga/effects'
import {browserHistory} from 'react-router'
import * as actions from '../actions'
import utils from '../utils'


export default {
    /*注册*/
    * signup(action) {
        try {
            yield put(actions.toast.show({type: 'loading', msg: '提交中'}));
            const res = yield call(utils.fetch, 'post', 'users/signup', action.params);
            yield utils.delay(2000);
            if(res.statusCode == 200){
                yield put(actions.user.success(actions.USER.GET, res.data));
                browserHistory.push('/');
            }else{
                alert(res.msg);
            }
            yield put(actions.toast.hide());

        }catch (e){
            console.error(e);
            yield put(actions.toast.hide());
        }
    },
    /*登录*/
    * signin(action) {
        console.log(action);
        try {
            yield put(actions.toast.show({type: 'loading', msg: '登录中'}));
            const res = yield call(utils.fetch, 'get', 'users/signin', action.params);
            yield utils.delay(500);
            if(res.statusCode == 200){
                yield put(actions.user.success(actions.USER.GET, res.data));
                browserHistory.push('/');
            }else{
                alert(res.msg);
            }
            yield put(actions.toast.hide());

        }catch (e){
            console.error(e);
            yield put(actions.toast.hide());
        }
    },
    /*上传头像*/
    * postAvatar(action) {
        try {
            yield put(actions.toast.show({type: 'loading', msg: '提交中'}));
            const res = yield call(utils.fetch, 'post', 'users/avatar', action.params, 'file');
            yield utils.delay(1000);
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
    },
    /*修改用户信息*/
    * putUser(action){
        try {
            yield put(actions.toast.show({type: 'loading', msg: '提交中'}));
            const {_id, name, avatarFiles} = action.params;
            const res1 = yield call(utils.fetch, 'put', 'users', {_id, name});
            if(res1.statusCode == 200){
                if(avatarFiles){
                    const res2 = yield call(utils.fetch, 'post', 'users/avatar', avatarFiles, 'file');
                    yield utils.delay(1000);
                    if(res2.statusCode == 200){
                        yield put(actions.user.success(action.type, res2.data));
                        browserHistory.push('/my');
                    }else{
                        alert(res2.msg);
                    }
                }else{
                    browserHistory.push('/my');
                }
            }else{
                alert(res1.msg);
            }

            yield put(actions.toast.hide());

        }catch (e){
            console.error(e);
            yield put(actions.toast.hide());
        }
    },
    /*获取登录用户的信息*/
    * getMy(action){
        try {
            const res = yield call(utils.fetch, 'get', 'users/my', action.params);
            if(res.statusCode == 200){
                yield put(actions.user.success(actions.USER.GET, res.data));
            }else{
                // alert(res.msg);
            }
        }catch (e){
            console.error(e);
        }
    }
}