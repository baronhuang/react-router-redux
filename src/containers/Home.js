/**
 * Created by Administrator on 2017/1/5.
 */


/*首页，发现广场*/
import React, {Component} from 'react'
import { connect } from 'react-redux'
import Articlelist from '../components/Articlelist'
import * as actions from '../actions'


// mapStateToProps
@connect(state => state)
export default class Home extends Component {
    constructor(){
        super();
    }
    componentWillMount(){
        if(this.props.articles.list.length == 0){
            this.props.dispatch(actions.article.get({option: 'list'}));
        }

    }

    componentWillReceiveProps(nextProps) {
        // console.log(333, this.props.articles === nextProps.articles);
    }

    // shouldComponentUpdate(nextProps) {
    //     const value = this.props.articles === nextProps.articles;
    //     console.log('value', value);
    //
    //     return false;
    // }

    render(){
        return (
            <div className="home-page">
                <div className="weui-panel">
                    <div className="weui-panel__hd">发现广场</div>
                    <Articlelist dataList={this.props.articles.list}></Articlelist>
                </div>
            </div>
        )
    }
}