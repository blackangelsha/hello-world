/**
 * Created by Administrator on 2017/3/14 0014.
 */

import React, {Component} from 'react';
import './common.css';


export default class Mask extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{display:this.props.showMask==false?"none":"block"}}>
            <div className="mask">

            </div>
            <div className="confirm">
                <label onClick={this.props.cancelMask}>取消</label>
                <label onClick={()=>this.props.changeScore(this.props.showMask)}>确定</label>
            </div>
                </div>
        );
    }


}


