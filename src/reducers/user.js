/**
 * Created by Administrator on 2017/1/5 0005.
 */

import Immutable from 'immutable';
import * as actions from '../actions';


/*用户数据*/
function userInfo(state = {}, action) {
    switch (action.type){
        case actions.USER.GET_SUCCESS:
        case actions.USER.POST_SUCCESS:
        case actions.USER.PUT_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}


export default {
    userInfo
}
