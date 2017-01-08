/**
 * Created by Administrator on 2017/1/8.
 */

import * as actions from '../actions';

/*控制toast全局变量*/
function toast(state = {}, action) {
    switch (action.type){
        case actions.SHOW_TOAST:
            return Object.assign({open: true}, action.options);
        case actions.HIDE_TOAST:
            return Object.assign({open: false}, action.options);
        default:
            return state;
    }
}

export default {
    toast
}