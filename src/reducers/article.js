/**
 * Created by Administrator on 2017/1/8.
 */

import Immutable from 'immutable';
import * as actions from '../actions';


/*文章数据*/
function articles(state = {my: [], list: []}, action) {
    switch (action.type){
        case actions.ARTICLE.GET_SUCCESS:
            // return [...state, ...action.data];
            return {
                ...state,
                [action.data.dataType]: action.data.data
            };

        case actions.ARTICLE.POST_SUCCESS:
            action.data.user = {};
            return {
                ...state,
                my: [action.data, ...state.my]
            };

        case actions.ARTICLE.DELETE_SUCCESS:
            return {
                ...state,
                my: state.my.filter((item, i) => i !== action.data)
            }
        default:
            return state;
    }
}


export default {
    articles
}