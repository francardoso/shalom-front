import React, {Component} from 'react';
import logo from '../assets/images/logo.png'

class Login extends Component{
    constructor(){
        super();
        this.state = {
            email: '', 
            password: '' 
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        const el = event.target;
        const input = el.id;

        switch (input){
            case 'email':
                this.setState({
                    ...this.state,
                    email: el.value
                });
                break;
            case 'password':
                this.setState({
                    ...this.state,
                    password: el.value
                });
                break;
            default:
                return
        }
    }
    handleSubmit(event){
        event.preventDefault();
        const credentials = this.state;
        this.props.loginAttempt(credentials);
    }
    render(){
        return(
            <React.Fragment>
                <img src={logo} alt="Shalom Logo" id="logo"/>
                <div id="loginContainer">
                    <h2>Olá! Faça seu login</h2>
                    <input id="email" name="email" placeholder="email" className="form-control" onChange={this.handleChange}/> 
                    <input id="password" name="password" placeholder="senha" type="password" className="form-control" onChange={this.handleChange}/>
                    <button className="btn btn-primary" onClick={this.handleSubmit}>Acessar</button>
                </div>
            </React.Fragment>
        )

    }
}

export default Login;