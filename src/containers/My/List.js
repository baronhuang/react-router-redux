/**
 * Created by Administrator on 2017/1/27.
 */


/**
 * 我的段子列表
 * */
import React, {Component} from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router'
import Articlelist from '../../components/Articlelist'
import * as actions from '../../actions'

// mapStateToProps
@connect(state => state)
export default class MyList extends Component {

    componentWillMount(){
        if(this.props.articles.my.length == 0){
            this.props.dispatch(actions.article.get({option: 'my'}));
        }

    }

    render(){
        return (
            <div className="my-list">
                <div className="my-header">
                    <div className="mask">
                        <div className="weui-flex">
                            <img className="avatar " style={{'backgroundImage': `url(${this.props.userInfo.avatar})`}}  alt=""/>
                            <div className="weui-flex__item info">
                                <p>{this.props.userInfo.name}</p>
                                <div><Link to="/my/setting" className="setting-btn weui-btn weui-btn_plain-primary weui-btn_mini">设置</Link></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="weui-panel">
                    <div className="weui-panel__hd">我的段子</div>
                    <Articlelist dispatch={this.props.dispatch} type="my" dataList={this.props.articles.my}></Articlelist>
                </div>

                <Link to="my/edit">
                    <div className="compose-btn">
                        <i className="ion-compose"></i>
                    </div>
                </Link>

            </div>
        )
    }
}
