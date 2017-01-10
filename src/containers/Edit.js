/**
 * Created by Administrator on 2017/1/10.
 */


import React, {Component} from 'react'
import { connect } from 'react-redux'
import Articlelist from '../components/Articlelist'
import * as actions from '../actions'
import TextBoxInput from '../components/TextBoxInput'
import Binder from 'react-binding'

// mapStateToProps
@connect(state => state)
export default class Edit extends Component {

    constructor(){
        super();
        this.state = {
            content: '',
            publicity: 0
        }
    }

    selectpublicity = (e)=>{
        if(e.target.checked){
            this.setState({'publicity': 1});
        }else{
            this.setState({'publicity': 0});
        }

    }

    save = ()=>{
        this.props.dispatch(actions.article.post(this.state));
    }

    render(){
        return (
            <div className="edit-page">
                <div className="weui-cells weui-cells_form">
                    <div className="weui-cell edit-wrap">
                        <div className="weui-cell__bd">
                            <TextBoxInput type="textarea" className="weui-textarea" placeholder="请输入内容" model={Binder.bindToState(this,'content')} rows="5" />
                            {/*{this.state.content}*/}
                            {/*<textarea className="weui-textarea" placeholder="请输入文本" rows="3"></textarea>*/}
                            <div className="weui-textarea-counter"><span>{this.state.content.length}</span>/200</div>
                        </div>
                    </div>

                    <div className="weui-cell weui-cell_switch">
                        <div className="weui-cell__bd">是否公开</div>
                        <div className="weui-cell__ft">
                            <input className="weui-switch" onClick={this.selectpublicity} type="checkbox" />
                        </div>
                    </div>
                </div>

                <div className="weui-btn-area">
                    <button className="weui-btn weui-btn_primary" onClick={this.save}>发布</button>
                </div>
            </div>
        )
    }
}