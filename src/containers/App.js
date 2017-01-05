/**
 * Created by Administrator on 2017/1/5 0005.
 */


import React, {Component} from 'react'
import { connect } from 'react-redux'

// mapStateToProps
@connect(state => state)
export default class App extends Component {

    constructor(props){
        console.log(props)
        super();
    }

    render(){
        return (
            <div>{this.props.children}</div>
        )
    }
}
