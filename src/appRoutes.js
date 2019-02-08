import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Login from './views/Login';
import Home from './views/Home';

class AppRoutes extends Component{
    render(){
        const isLogged = false;
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

export default AppRoutes;