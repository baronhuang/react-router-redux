/**
 * Created by Administrator on 2017/1/11.
 */

import React, {Component} from 'react'
import { connect } from 'react-redux'
import Articlelist from '../components/Articlelist'
import * as actions from '../actions'


// mapStateToProps
@connect(state => state)
export default class Setting extends Component {

    save = ()=>{
        const fileObj = document.getElementById("uploaderInput").files[0];
        const formData = new FormData();
        formData.append('files', fileObj);
        this.props.dispatch(actions.user.postAvatar(formData));
    }

    render(){
        return (
            <div className="setting-page">
                <div className="weui-cells weui-cells_form">
                    <div className="weui-cell">
                        <div className="weui-cell__hd"><label className="weui-label">昵称</label></div>
                        <div className="weui-cell__bd">
                            <input className="weui-input" type="text"  placeholder="昵称" />
                        </div>
                    </div>
                    <div className="weui-cell">
                        <div className="weui-cell__bd">
                            <div className="weui-uploader">
                                <div className="weui-uploader__hd">
                                    <p className="weui-uploader__title">头像上传</p>
                                    {/*<div className="weui-uploader__info">0/2</div>*/}
                                </div>
                                <div className="weui-uploader__bd">
                                    <ul className="weui-uploader__files" id="uploaderFiles">
                                        {/*<li className="weui-uploader__file" style={{'background-image':url(./images/pic_160.png)}}></li>*/}
                                        {/*<li className="weui-uploader__file" style="background-image:url(./images/pic_160.png)"></li>*/}
                                        {/*<li className="weui-uploader__file" style="background-image:url(./images/pic_160.png)"></li>*/}

                                    </ul>
                                    <div className="weui-uploader__input-box">
                                        <input id="uploaderInput" className="weui-uploader__input" type="file" name="files" accept="image/*" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="weui-btn-area">
                    <button className="weui-btn weui-btn_primary" onClick={this.save}>保存</button>
                </div>
            </div>
        )
    }
}