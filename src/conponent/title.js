
import React, {Component} from 'react';
import './common.css';


export default class Title extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="title" style={{backgroundColor:this.props.color}}>
                {
                    this.props.name
                }
            </div>
        );
    }


}



