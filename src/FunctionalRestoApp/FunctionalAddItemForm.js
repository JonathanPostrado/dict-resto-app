import { useState, useEffect } from 'react';
import './FunctionalRestoApp.css';

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
        <tr>
            <td className="custom-td">
            Name: <input 
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            </td>
            <td className="custom-td">
            Category: <input 
                type="text"
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            />
            </td>
            <td className="custom-td">
            Price: <input 
                type="number"
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value )}
            />
            </td>
            <td className="custom-td">
            Image: <input 
                type="text"
                name="image"
                value={image}
                onChange={(e) => setImage(e.target.value )}
            />
            </td>
            <td>
            <button className="btn blue btn-block" onClick={btnClickHandler}>{props.editItem ? 'EDIT ITEM' : 'ADD ITEM'}</button></td>
        </tr>
    )
}

export default FunctionalAddItemForm;