/**
 * Created by Administrator on 2017/1/7.
 */

import React, {Component} from 'react'
import { connect } from 'react-redux'

// mapStateToProps
@connect(state => state)
export default class My extends Component {
    render(){
       return (
           <div>2222</div>
       )
    }
}