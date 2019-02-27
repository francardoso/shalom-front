import React, {Component} from 'react';
import logo from '../assets/images/logo.png'

class Login extends Component{
    constructor(){
        super();
        this.state = {
            login: '', 
            password: '' 
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        const el = event.target;
        const input = el.id;

        switch (input){
            case 'login':
                this.setState({
                    ...this.state,
                    login: el.value
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
                    <input id="login" name="login" placeholder="email" className="form-control" onChange={this.handleChange}/> 
                    <input id="password" name="password" placeholder="senha" type="password" className="form-control" onChange={this.handleChange}/>
                    <button className="btn btn-primary" onClick={this.handleSubmit}>Acessar</button>
                </div>
            </React.Fragment>
        )

    }
}

export default Login;