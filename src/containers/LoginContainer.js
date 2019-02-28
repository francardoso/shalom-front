import React, {Component} from 'react';
import Login from '../presentational/Login';

class LoginContainer extends Component{
    constructor(){
        super();
        this.state={
            loginError: false
        }
        this.loginAttempt = this.loginAttempt.bind(this);
    }
    loginAttempt(credentials){
        fetch('http://localhost:3002/login', {
            method: "POST",
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
        .then(response => response.json())
        .then(result => {
            if(result.error){
                this.setState({
                    loginError: true
                });
            }else{
                this.setState({
                    loginError: false
                });
            }
        });
        
    }
    render(){
        return <Login loginAttempt={this.loginAttempt} loginError={this.state.loginError}/>
    }
};

export default LoginContainer;