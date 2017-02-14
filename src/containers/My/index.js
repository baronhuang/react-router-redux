/**
 * Created by Administrator on 2017/1/7.
 */

/*用户后台的总包*/
import React, {Component} from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router'
import * as actions from '../../actions'

// mapStateToProps
@connect(state => {
    return {
        userInfo: state.userInfo
    }
})
export default class My extends Component {

    componentWillMount(){
        /*进入组件先检测登录状态*/
        if(!this.props.userInfo._id){
            this.props.dispatch(actions.user.getMy());
        }
    }

    render(){
        let children = null;
        if(this.props.userInfo._id){
            children = this.props.children;
        }
       return (
           <div className="my-page">
               {children}
           </div>
       )
    }
}