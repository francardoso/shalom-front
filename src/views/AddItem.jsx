import React, {Component} from 'react';

import LayoutContainer from '../containers/LayoutContainer';
import AddItemContainer from '../containers/AddItemContainer';

class AddItem extends Component{
    render(){
        return(
           <LayoutContainer>
               <AddItemContainer/>
           </LayoutContainer>
        )
    }
};

export default AddItem;