/**
 * Created by Administrator on 2017/1/5 0005.
 */

import { combineReducers } from 'redux'
import Immutable from 'immutable';
// import actionTypes from '../actions';


const initState = {initDone: false};

function userInfo(state = initState, action) {
    console.log(222, state)
    return state;
}

export default {
    userInfo
}
