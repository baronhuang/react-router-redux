/**
 * Created by Administrator on 2017/1/5 0005.
 */

import React, {Component} from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'
import {browserHistory} from 'react-router'
import Toast from '../components/Toast'

// mapStateToProps
@connect(state => state)
export default class App extends Component {

    constructor(props){
        super();
        // this.state = {
        //     type: 'other'
        // }
    }

    selectTab = (type)=>{
        // console.log(type)
        // this.setState({type: type});
        browserHistory.push(`${type}`);
    }

    render(){

        const {pathname} = this.props.location;
        return (
            <div id="app-container">
                <div className="weui-tab">
                    <div className={classnames('weui-tab__panel', {'full': !(['/', '/my'].indexOf(pathname) != -1)})}>
                        {this.props.children}
                    </div>
                    <div className={classnames('weui-tabbar', {'hide': !(['/', '/my'].indexOf(pathname) != -1)})}>
                        <div onClick={this.selectTab.bind(this, '/')} className={classnames('weui-tabbar__item', {'weui-bar__item_on':pathname=='/'})}>
                            <p className="weui-tabbar__label">
                                发现
                            </p>
                        </div>
                        <div onClick={this.selectTab.bind(this, '/my')} className={classnames('weui-tabbar__item', {'weui-bar__item_on':pathname=='/my'})}>
                            <p className="weui-tabbar__label">
                                我
                            </p>
                        </div>
                    </div>
                </div>

                <Toast toast={this.props.toast}></Toast>
            </div>
        )
    }
}
