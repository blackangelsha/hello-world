/**
 * Created by Administrator on 2017/3/14 0014.
 */

import React, {Component} from 'react';
import './common.css';


export default class selectItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="selectItem" onClick={()=>this.props.changeIndex(this.props.index)}
            style={{backgroundColor:this.props.clickedStudent==this.props.index?"#eed63b":""}}
            >
                {
                    this.props.student.sname
                }
            </div>
        );
    }


}


