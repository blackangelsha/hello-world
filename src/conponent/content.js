/**
 * Created by Administrator on 2017/3/13 0013.
 */
import React, {Component} from 'react';
import './common.css';
import Score from './score'
import Title from './title'
import SalaryIncrease from './salary_increase'

export default class Content extends Component {
    constructor(props) {
        super(props);

    }


    render() {

        return (
            
                <div>
                    <Score score={this.props.student.score}/>
                    <Title name="奖励加薪项目" color="#eed63b"/>
                    <div className="increase-box">
                        {
                            this.props.rewards.map((obj,index)=>{
      if(obj.type==1){
                                return <SalaryIncrease reward={obj}
                                                       key={index}
                                                       showMask={this.props.showMask}
                                   
         />         }

                            })
                        }
                        
                       
                    </div>
                    <Title name="惩罚减薪项目" color="#544b14"/>
                </div>

           
        );
    }


}


