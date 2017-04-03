import React, {Component} from 'react';
import {connect} from'react-redux'
import {teacherLoginData} from './actions'
import {hashHistory} from 'react-router';
class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <input type="text" placeholder="user" ref="username"/>
                <input type="password" placeholder="password" ref="password"/>
                <button onClick={this.login}>登陆</button>
            </div>
        );
    }

    login() {
        let user = this.refs.username.value;
        let password = this.refs.password.value;
        fetch(`http://192.168.60.110:8080/cms/login/login.do?roleName=${user}&password=${password}&roleType=1&officeType=1`)
            .then(json=>json.json())
            .then(json=> {
                if (json.status == 201) {
                    alert(json.message);
                } else if (json.status == 200) {
                    this.props.onSuper(json);
                    // console.log(this.props);
                    // this.props.dispatch(teacherLoginData(json))
                    hashHistory.push("/super");               }
            }, err=> {
                alert("服务器异常");
            })
    }

}

function maneger(state) {
console.log(state);
    return {
        "123":333
    }
}

const mapDispatchToProps = {
    onSuper:teacherLoginData
};
export default connect(maneger,mapDispatchToProps)(Login);
// export default connect(select)(login);

