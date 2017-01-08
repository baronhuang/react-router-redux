/**
 * Created by Administrator on 2017/1/8.
 */


/**
 * Toast 组件
 * */
import React, {Component, PropTypes} from 'react'
import classnames from 'classnames'


export default class Toast extends Component {
    /**
     * taoast: {
     *  open: 是否显示,
     *  type: loading or success toast的提示类型,
     *  msg: 提示信息
     * }
     * */
    static propTypes = {
        toast: PropTypes.object.isRequired
    };

    render(){
        const {open, type, msg} = this.props.toast;
        return (
            <div className={classnames('toast', {'show': open})}>
                <div className="weui-mask_transparent"></div>
                <div className="weui-toast">
                    <i className={classnames('weui-icon_toast', {'weui-loading': type=='loading', 'weui-icon-success-no-circle': type=='success'})}></i>
                    <p className="weui-toast__content">{msg}</p>
                </div>
            </div>
        )
    }
}