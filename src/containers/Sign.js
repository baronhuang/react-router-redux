/**
 * Created by Administrator on 2017/1/7.
 */

/**
 * 登录和注册
 * */
import React, {Component} from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router';
import classnames from 'classnames'
import Binder from 'react-binding'
import TextBoxInput from '../components/TextBoxInput'
import * as actions from '../actions'

// mapStateToProps
@connect(state => state)
export default class Login extends Component {

    constructor(){
        super();
        this.state = {
            /*注册信息*/
            signupInfo: {
                phone: '',
                name: '',
                password: ''
            },
            /*登录信息*/
            signinInfo: {
                phone: '',
                password: ''
            }
        }
    }

    /*登录*/
    signin = ()=>{
        const {phone, password} = this.state.signinInfo;
        if(phone && password){
            this.props.dispatch(actions.user.signin(this.state.signinInfo));
        }else{
            alert('请输入完整信息');
        }
    }

    /*注册*/
    signup = ()=>{
        console.log(this.state);
        const {phone, name, password} = this.state.signupInfo;
        if(phone && name && password){
            this.props.dispatch(actions.user.signup(this.state.signupInfo));
        }else{
            alert('请输入完整信息');
        }

    }

    render(){
        const {pathname} = this.props.location;
        return (
            <div className="sign-page">
                <h1>段子手</h1>
                <div className={classnames('signin', {'hide': pathname!='/signin'})}>
                    <div className="input-list">
                        <div className="item">
                            <TextBoxInput type="text" placeholder="手机号" model={Binder.bindToState(this,'signinInfo','phone')} />
                        </div>
                        <div className="item">
                            <TextBoxInput type="password" placeholder="密码" model={Binder.bindToState(this,'signinInfo','password')} />
                        </div>
                    </div>
                    <div className="ctrl">
                        <button className="weui-btn weui-btn_primary" onClick={this.signin}>登录</button>
                        <div className="bottom"><Link to="/signup">注册账号</Link></div>
                    </div>
                </div>
                <div className={classnames('signup', {'hide': pathname!='/signup'})}>
                    <div className="input-list">
                        <div className="item">
                            <TextBoxInput type="text" placeholder="手机号" model={Binder.bindToState(this,'signupInfo','phone')} />
                        </div>
                        <div className="item">
                            <TextBoxInput type="text" placeholder="用户名" model={Binder.bindToState(this,'signupInfo','name')} />
                        </div>
                        <div className="item">
                            <TextBoxInput type="password" placeholder="密码" model={Binder.bindToState(this,'signupInfo','password')} />
                        </div>
                    </div>
                    <div className="ctrl">
                        <button className="weui-btn weui-btn_primary" onClick={this.signup}>注册</button>
                        <div className="bottom"><Link to="/signin">登录账号</Link></div>
                    </div>
                </div>
            </div>
        )
    }
}