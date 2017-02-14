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
                [action.payload.option]: action.payload.data
            };

        case actions.ARTICLE.POST_SUCCESS:
            action.payload.user = {};
            return {
                ...state,
                my: [action.payload, ...state.my]
            };

        case actions.ARTICLE.DELETE_SUCCESS:
            return {
                ...state,
                my: state.my.filter((item, i) => i !== action.payload)
            }
        default:
            return state;
    }
}


export default {
    articles
}