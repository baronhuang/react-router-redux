/**
 * Created by Administrator on 2017/1/8.
 */

import Immutable from 'immutable';
import * as actions from '../actions';


/*用户数据*/
function articles(state = [], action) {
    switch (action.type){
        case actions.ARTICLE.SUCCESS:
            if(action.method == 'add'){
                return [...state, action.data];
            }else{
                return action.data;
            }

        case actions.ARTICLE.ERROR:
            alert(action.error);
        default:
            return state;
    }
}


export default {
    articles
}