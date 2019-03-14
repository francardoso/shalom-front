import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ItemCard from '../presentational/ItemCard';

class StockContainer extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="card-columns">
                    <ItemCard/>
                    <ItemCard/>
                    <ItemCard/>
                    <ItemCard/>
                </div>
                <Link to={'/addItem'} className='btn btn-primary'>Adicionar novo produto</Link>
            </React.Fragment>
        )
    }
}

export default StockContainer;