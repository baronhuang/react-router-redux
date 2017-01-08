/**
 * Created by Administrator on 2017/1/7.
 */

import React, {Component} from 'react'
import { connect } from 'react-redux'

// mapStateToProps
@connect(state => state)
export default class Detail extends Component {
    render(){
        return (
            <div className="detail">
                <div className="weui-article">
                    <h1>大标题</h1>
                    <section>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat.
                        </p>
                    </section>
                </div>
            </div>
        )
    }
}