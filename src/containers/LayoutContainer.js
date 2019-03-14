import React, {Component} from 'react';
import Header from '../presentational/Header';

class LayoutContainer extends Component{
    render(){
        return (
            <React.Fragment>
                <Header/>
                {this.props.children}
            </React.Fragment>
        )
    }
};

export default LayoutContainer;