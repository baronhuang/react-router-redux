/**
 * Created by Administrator on 2017/1/11.
 */


/**
 * 个人设置
 * */
import React, {Component} from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import Binder from 'react-binding'
import TextBoxInput from '../../components/TextBoxInput'


// mapStateToProps
@connect(state => state)
export default class Setting extends Component {

    constructor(props){
        super();
        this.state = {
            userInfo: props.userInfo
        }
    }

    componentWillMount(){

    }

    /*点击保存*/
    save = ()=>{
        const fileObj = document.querySelector('#select-img').files[0];
        const {_id, name} = this.state.userInfo;
        let avatarFiles;
        if(fileObj){
            avatarFiles = new FormData()
            avatarFiles.append('files', fileObj);
        }

        this.props.dispatch(actions.user.put({_id, name, avatarFiles}));
    }

    /*选择头像*/
    selectAvatar = (e)=>{
        var file = e.target.files[0];
        var src = window.URL.createObjectURL(file);
        document.querySelector('.preview-img').style.backgroundImage = `url(${src})`;
        console.log(src)
    }

    render(){
        return (
            <div className="setting-page">
                <div className="weui-cells weui-cells_form">
                    <div className="weui-cell">
                        <div className="weui-cell__hd"><label className="weui-label">昵称</label></div>
                        <div className="weui-cell__bd">
                            <TextBoxInput className="weui-input" type="text" placeholder="请输入昵称" model={Binder.bindToState(this,'userInfo','name')} />
                        </div>
                    </div>
                    <div className="weui-cell">
                        <div className="weui-cell__hd"><label className="weui-label">头像</label></div>
                        <div className="weui-cell__bd">
                            <div className="preview-img" style={{'backgroundImage': `url(${this.state.userInfo.avatar})`}} alt=""/>
                            <input id="select-img" onChange={this.selectAvatar} className="weui-uploader__input" type="file" name="files" accept="image/*" />
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