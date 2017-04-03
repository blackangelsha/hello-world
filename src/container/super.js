/**
 * Created by Administrator on 2017/3/28 0028.
 */
import React, {Component} from 'react';
import {connect} from'react-redux';
import {leftLinkRight} from './actions';
class Super extends Component {
    render() {
        return (
            <div>
                <div style={{width:"300px",height:"auto",float:"left"}}>
                    {
                        this.props.students.map((obj, index)=> {
                            return <div key={index}
                                        style={{cursor:"pointer",
                                        backgroundColor:"yellow",
                                        boxSizing:"border-box",
                                        padding:"5px",
                                        border:"1px solid red"}}
                            onClick={()=>this.props.onLink(index)}>{obj.sname}</div>
                        })
                    }
                </div>
                <div style={{width:"300px",
                height:"300px",
                backgroundColor:"blue"
                ,float:"left",
        fontSize:"100px",
        color:"#fff"}}>
{
    this.props.students[this.props.linkIndex].sname
}
</div>
</div>
);
}
}
function maneger(state) {//行为发生需要操作的数据
    console.log(state);
    return {
        students: state.teacherLoginData.students,
        linkIndex:state.containerLink.linkIndex||0
    }
}
const mapDispatchToProps = {//action派遣的行为
    onLink:leftLinkRight
};
export default connect(maneger, mapDispatchToProps)(Super);

