/**
 * Created by Administrator on 2017/1/7.
 */

import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import utils from '../utils'
import NgIf from './NgIf'

/**
 * 文章列表，可复用
 * */
export default class Articlelist extends Component {

    /**
     * 文章列表数据
     * dataList: [{
     *  content: 内容,
     *  like: 点赞数,
     *  publicity: 是否私密,
     *  createdAt: 创建时间,
     *  user: { 用户信息
     *    name: 用户名,
     *    avatar: 头像,
     *  }
     * }]
     * */
    static propTypes = {
        dataList: PropTypes.array.isRequired
    };

    delete = (item, index)=>{
        console.log(item);
        if (confirm("确定要删除这条段子？")) {
            this.props.dispatch(actions.article.delete({_id:item._id, index}));
        } else {
        }
    }

    render(){
        const {dataList} = this.props;
        return (
            <div className="weui-panel__bd article-list">
                {
                    dataList.map((item, i)=>{
                        return (
                            <div key={item._id} className="weui-media-box weui-media-box_text">
                                <NgIf show={this.props.type!='my'}>
                                    <div className="weui-media-box__title user-info">
                                        <div className="avatar" style={{'backgroundImage': `url(${item.user.avatar})`}}></div>
                                        <span className="name">{item.user.name}</span>
                                    </div>
                                </NgIf>
                                <p className="desc">{item.content}</p>
                                <ul className="weui-media-box__info">
                                    <li className="weui-media-box__info__meta"><i className="ion-heart"></i>({item.like})</li>
                                    <li className="weui-media-box__info__meta">{utils.dateFormat(item.createdAt)}</li>
                                    <NgIf show={this.props.type=='my'}>
                                        <li className="weui-media-box__info__meta ctrl-item">
                                            <NgIf show={item.publicity}>
                                                <span>公开</span>
                                            </NgIf>
                                            <NgIf show={!item.publicity}>
                                                <span>私密</span>
                                            </NgIf>
                                            <i className="ion-trash-b" onClick={this.delete.bind(this, item, i)}></i>
                                        </li>
                                    </NgIf>
                                </ul>
                            </div>
                        )
                    })
                }
            </div>

        )
    }
}