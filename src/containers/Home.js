/**
 * Created by Administrator on 2017/1/5.
 */

import React, {Component} from 'react'
import { connect } from 'react-redux'

// mapStateToProps
@connect(state => state)
export default class Home extends Component {
    // constructor(){
    //     super();
    // }
    render(){
        console.log(this.props)
        return (
            <div>6666</div>
        )
    }
}