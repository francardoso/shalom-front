import React from 'react';
import {Link} from 'react-router-dom';
const Header = ()=>{
    return (
        <nav className="navbar navbar-dark bg-dark">
        <Link className="navbar-brand" to={'/home'}>Shalom</Link>
        </nav>
    )
};

export default Header;