import {me, login} from "../../redux/auth-reducer";
import Login from "./Login";
import React from 'react';
import {connect} from "react-redux";



class LoginContainer extends React.Component {

    componentDidUpdate() {
      //this.props.me();
        
    }
    
    render() {
        return <>
            <Login loginPage={this.props.loginPage}
                    login={this.props.login}
                    me={this.props.me}

             />
        </>
    }
}
let mapStateToProps = (state) => {
    return {
        loginPage: state.loginPage
    }
}


export default connect(mapStateToProps, {me, login})(LoginContainer);