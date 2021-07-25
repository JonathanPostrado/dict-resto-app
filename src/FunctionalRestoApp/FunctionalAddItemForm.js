import { render } from '@testing-library/react';
import { update } from 'lodash';
// import React from 'react'
import { useState, useEffect } from 'react';

const FunctionalAddItemForm = (props) => {

    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState('');

    useEffect(() => {
        if (props.editItem){
            setName(props.editItem.name);
            setCategory(props.editItem.category);
            setPrice(props.editItem.price);
            setImage(props.editItem.image);
        }
    }, [props.editItem]);

    const btnClickHandler = () => {
        if (props.editItem) {
            update();
        } else {
            addNewItem();
        }
    }

    const addNewItem = (e) => {
        let newItem ={
            name: name,
            price: price,
            category: category,
            image: image
        }
        props.addItem(newItem);
    }

    const update = () => {
        let updatedItem = {
            id: props.editItem.id,
            name: name,
            price: price,
            category: category,
            image: image
        }

        props.updateItem(updatedItem);
    }

    return (
        <div>
            Name: <input 
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                // onChange={this.inputChangeHandler}
            />
            Category: <input 
                type="text"
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                // onChange={this.inputChangeHandler}
            />
            Price: <input 
                type="number"
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value )}
                // onChange={this.inputChangeHandler}
            />
            Image: <input 
                type="text"
                name="image"
                value={image}
                onChange={(e) => setImage(e.target.value )}
                // onChange={this.inputChangeHandler}
            />
            <button onClick={btnClickHandler}>{props.editItem ? 'EDIT ITEM' : 'ADD ITEM'}</button>
        </div>
    )

}

// class FunctionalAddItemForm extends React.Component{
//     state = {
//         name: 'burger',
//         category: '',
//         price: 0,
//         image: ''
//     }

//     inputChangeHandler = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value
//         })
//     }

//     addNewItem = () => {
//         let newItem ={
//             name: this.state.name,
//             price: this.state.price,
//             category: this.state.category,
//             image: this.state.image
//         }
//         this.props.addItem(newItem);
//     }


//     render() {
//         return (
//             <div>
//                 Name: <input 
//                     type="text"
//                     name="name"
//                     value={this.state.name}
//                     // onChange={(e) => this.setState({ name: e.target.value })}
//                     onChange={this.inputChangeHandler}
//                 />
//                 Category: <input 
//                     type="text"
//                     name="category"
//                     value={this.state.category}
//                     // onChange={(e) => this.setState({ category: e.target.value })}
//                     onChange={this.inputChangeHandler}
//                 />
//                 Price: <input 
//                     type="number"
//                     name="price"
//                     value={this.state.price}
//                     // onChange={(e) => this.setState({ price: e.target.value })}
//                     onChange={this.inputChangeHandler}
//                 />
//                 Image: <input 
//                     type="text"
//                     name="image"
//                     value={this.state.image}
//                     // onChange={(e) => this.setState({ image: e.target.value })}
//                     onChange={this.inputChangeHandler}
//                 />
//                 <button onClick={this.addNewItem}>Add</button>
//             </div>
//         )
//     }
// }


export default FunctionalAddItemForm;