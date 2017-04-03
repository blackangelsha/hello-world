
import React, {Component} from 'react';
import './common.css';


export default class SalaryIncrease extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="increaseItem" onClick={()=>this.props.showMask(this.props.reward)}>
                {
                  this.props.reward.name
                }
            </div>
        );
    }


}



