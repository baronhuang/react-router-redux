/**
 * Created by Administrator on 2017/1/11.
 */

/**
 * 用在react的if判断
 * */
import React, {Component} from "react";

class NgIf extends Component {
    render() {
        if (this.props.show) {
            return (
                this.props.children
            );
        } else {
            return null
        }
    }
}

export default NgIf;