import React, {Component} from 'react';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Login from './views/Login';
import Home from './views/Home';

const mapStateToProps = state =>({
    isLogged: state.loginReducer.isLogged
});

class AppRoutes extends Component{
    render(){
        const isLogged = this.props.isLogged;
        return(
            <Router>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <PrivateRoute exact path="/home" isLogged={isLogged} component={Home}/>                
                </Switch>
            </Router>
        )
    }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        rest.isLogged
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    )} />
)

export default connect(mapStateToProps,null)(AppRoutes);