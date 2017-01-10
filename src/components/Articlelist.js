/**
 * Created by Administrator on 2017/1/7.
 */

import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import utils from '../utils'

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

    render(){

        const {dataList} = this.props;
        return (
            <div className="weui-panel__bd">
                {
                    dataList.map((item, i)=>{
                        return (
                            <div key={item._id} className="weui-media-box weui-media-box_text">
                                <h4 className="weui-media-box__title">{item.user.name}</h4>
                                <p className="weui-media-box__desc">{item.content}</p>
                                <ul className="weui-media-box__info">
                                    <li className="weui-media-box__info__meta"><i className="ion-heart"></i>({item.like})</li>
                                    <li className="weui-media-box__info__meta">{utils.dateFormat(item.createdAt)}</li>
                                    <li className="weui-media-box__info__meta weui-media-box__info__meta_extra">
                                        其它信息
                                    </li>
                                </ul>
                            </div>
                        )
                    })
                }
            </div>

        )
    }
}