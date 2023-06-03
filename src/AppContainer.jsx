import {me, login,  getAuth} from "./redux/auth-reducer";
import App from "./App";
import React from 'react';
import {connect} from "react-redux";



class AppContainer extends React.Component {

    componentDidUpdate() {
      //this.props.me();
        
    }
    
    render() {
        return <>
            <App authPage={this.props.authPage}
                    login={this.props.login}
                    me={this.props.me}
                    getAuth={this.props.getAuth}

             />
        </>
    }
}
let mapStateToProps = (state) => {
    return {
        authPage: state.authPage
    }
}


export default connect(mapStateToProps, {me, login,  getAuth})(AppContainer);