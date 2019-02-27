import React, {Component} from 'react';
import Login from '../presentational/Login';

class LoginContainer extends Component{
    constructor(){
        super();
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
                console.log('erro ao logar');
            }else{
                console.log('LOGOU');
            }
        });
        
    }
    render(){
        return <Login loginAttempt={this.loginAttempt}/>
    }
};

export default LoginContainer;