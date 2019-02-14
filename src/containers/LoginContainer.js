import React, {Component} from 'react';
import Login from '../presentational/Login';

class LoginContainer extends Component{
    constructor(){
        super();
        this.loginAttempt = this.loginAttempt.bind(this);
    }
    loginAttempt(credentials){
        console.log('credentials', credentials);
    }
    render(){
        return <Login loginAttempt={this.loginAttempt}/>
    }
};

export default LoginContainer;