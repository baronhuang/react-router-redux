/**
 * Created by Administrator on 2017/1/5 0005.
 */

/**
 * reducers 汇总文件
 * */
import { combineReducers } from 'redux'
import user from './user'
import article from './article'
import components from './components'





export default combineReducers({
    ...user,
    ...article,
    ...components,
})
