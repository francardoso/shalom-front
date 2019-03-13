import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setIsLogged} from '../actions/login';

import Login from '../presentational/Login';

const mapStateToProps = state =>({
    isLogged: state.loginReducer.isLogged
});

const mapDispatchToProps = dispatch =>({
    _setIsLogged: (loginData) => dispatch(setIsLogged(loginData))  
});

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
                },()=>{
                    this.props._setIsLogged({
                        userId:'14848'
                    })
                });
            }
        });
    }
    render(){
        return <Login loginAttempt={this.loginAttempt} loginError={this.state.loginError}/>
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(LoginContainer);