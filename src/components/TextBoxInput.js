/**
 * Created by Administrator on 2017/1/8.
 */


/**
 * 让input支持双向绑定
 * */
import React, {Component} from 'react'

export default class TextBoxInput extends Component {
    render() {
        const {model, type} = this.props;
        const props = {...this.props};
        delete props.model;
        const handleChange = function(e){
            model.value = e.target.value;
        }
        return (
            <input {...props} onChange={handleChange} value={model.value} />
        )
    }
}