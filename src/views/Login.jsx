import React, {Component} from 'react';

import LoginContainer from '../containers/LoginContainer';

class Login extends Component{
    render(){
        console.log('foo props', this.props);
        return (
            <LoginContainer history={this.props.history}/>
        )
    }
};

export default Login;