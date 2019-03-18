import React,{Component} from 'react';

import AddItemForm from '../presentational/AddItemForm';

class AddItemContainer extends Component{
    handleSubmit(product){
        fetch('http://localhost:3002/addItem', {
            method: "POST",
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(product)
        })
        .then(response => response.json())
        .then(result =>{
            console.log('foo result', result);
        });
    }
    render(){
        return(
            <AddItemForm handleSubmit={this.handleSubmit}/>
        )
    }
}

export default AddItemContainer;