/**
 * Created by Administrator on 2017/1/8.
 */

import Immutable from 'immutable';
import * as actions from '../actions';


/*文章数据*/
function articles(state = [], action) {
    switch (action.type){
        case actions.ARTICLE.GET_SUCCESS:
            return [...state, ...action.data];

        case actions.ARTICLE.POST_SUCCESS:
            return [...state, ...action.data];

        // case actions.ARTICLE.ERROR:
        //     alert(action.error);
        default:
            return state;
    }
}


export default {
    articles
}