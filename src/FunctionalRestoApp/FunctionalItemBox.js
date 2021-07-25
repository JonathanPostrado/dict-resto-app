import React from 'react';
// import RestoApp from './RestoApp';
import './FunctionalItemBox.css';

class FunctionalItemBox extends React.Component{

    orderClickHandler = () => {
        this.props.addToCart(this.props.item);
    }

    deleteClickHandler = () => {
        this.props.deleteItem(this.props.item);
    }

    editClickHandler = () => {
        this.props.editItem(this.props.item);
    }
    render(){
        let {name, price, image, category} = this.props.item;
        return(
            <div className="ItemBox">
                <img src={image} alt={this.props.item.name} />
                <div>
                    <strong>{name}</strong> <br />
                    <small>{category}</small> <br />
                    <p>Php {price}</p>
                    {/* <button onClick={() => this.orderClickHandler(name)}>Order</button> */}
                    <button onClick={this.orderClickHandler}>Order</button>
                    <button onClick={this.editClickHandler}>Edit</button>
                    <button onClick={this.deleteClickHandler}>Delete</button>
                </div>
            </div>

        )
    }

}

export default FunctionalItemBox;