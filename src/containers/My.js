/**
 * Created by Administrator on 2017/1/7.
 */

import React, {Component} from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router'
import Articlelist from '../components/Articlelist'
import * as actions from '../actions'

// mapStateToProps
@connect(state => state)
export default class My extends Component {

    componentWillMount(){
        if(this.props.articles.my.length == 0){
            this.props.dispatch(actions.article.get({type: 'my'}));
        }

    }

    render(){
       return (
           <div className="my-page">
                <div className="my-header">
                    <div className="mask">
                        <div className="weui-flex">
                            <img className="avatar " src={require('../images/avatar.jpg')} alt=""/>
                            <div className="weui-flex__item info">
                                <p>我是段子手</p>
                                <div><Link to="/setting" className="setting-btn weui-btn weui-btn_plain-primary weui-btn_mini">设置</Link></div>
                            </div>
                        </div>

                    </div>
                </div>

               <div className="weui-panel">
                   <div className="weui-panel__hd">我的段子</div>
                   <Articlelist dispatch={this.props.dispatch} type="my" dataList={this.props.articles.my}></Articlelist>
               </div>

               <Link to="/edit">
                   <div className="compose-btn">
                       <i className="ion-compose"></i>
                   </div>
               </Link>

           </div>
       )
    }
}