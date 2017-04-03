
import React, {Component} from 'react';
import './common.css';


export default class Score extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="score">
                {
                    this.props.score

                }
            </div>
        );
    }


}


