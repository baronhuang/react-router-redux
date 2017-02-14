/**
 * Created by Administrator on 2017/1/7.
 */


/**
 * 所有saga的汇总
 * */
import {takeEvery, takeLatest} from 'redux-saga/effects'
import * as actions from '../actions'
import user from './user'
import article from './article'


export default function* root() {
    yield takeEvery(actions.USER_SIGNUP, user.signup);
    yield takeEvery(actions.USER_SIGNIN, user.signin);
    yield takeEvery(actions.USER_POST_AVATAR, user.postAvatar);
    yield takeEvery(actions.USER.PUT, user.putUser);
    yield takeEvery(actions.USER_GET_MY, user.getMy);
    yield takeEvery(actions.ARTICLE.GET, article.getArticle);
    yield takeEvery(actions.ARTICLE.POST, article.postArticle);
    yield takeEvery(actions.ARTICLE.DELETE, article.deleteArticle);
}