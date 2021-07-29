import { useState } from 'react';
import FunctionalAddItemForm from './FunctionalAddItemForm.js';
import FunctionalItemBox from './FunctionalItemBox.js';
import './FunctionalRestoApp.css';

const FunctionalRestoApp = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            name: "Burger",
            price: 50,
            category: "Food",
            status: 'active',
            image: "https://image.flaticon.com/icons/svg/1046/1046784.svg"
        },
        {
            id: 2,
            name: "Pizza",
            price: 100,
            category: "Food",
            status: 'active',
            image: "https://image.flaticon.com/icons/svg/1046/1046771.svg"
        },
        {
            id: 3,
            name: "Fries",
            price: 25,
            category: "Food",
            status: 'active',
            image: "https://image.flaticon.com/icons/svg/1046/1046786.svg"
        },
        {
            id: 4,
            name: "Coffee",
            price: 35,
            category: "Drink",
            status: 'active',
            image: "https://image.flaticon.com/icons/svg/1046/1046785.svg"
        },
        {
            id: 5,
            name: "Iced Tea",
            price: 45,
            category: "Drink",
            status: 'active',
            image: "https://image.flaticon.com/icons/svg/1046/1046782.svg"
        },
        {
            id: 6,
            name: "Hot Tea",
            price: 45,
            category: "Drink",
            status: 'active',
            image: "https://image.flaticon.com/icons/svg/1046/1046792.svg"
        },
    ])

    const [filter, setFilter] = useState('All');
    const [cart, setCart] = useState([])
    const [editItem, setEdit] = useState(false)

    const changeDisplay = (category) => {
        setFilter(category)
    }

    const addItem = (newItem) => {
        newItem.id = items.length + 1;
        const itemsCopy = [...items];
        itemsCopy.push(newItem);

        setItems(itemsCopy)
    }

    const addToCart = (item) =>{
        const cartCopy = [...cart];
        const index = cartCopy.findIndex(cartItem => cartItem.id === item.id)
        if (index === -1) {
            item.quantity = 1;
            cartCopy.push(item);
        } else {
            cartCopy[index].quantity++;
        }
        setCart(cartCopy)
    }

    const deleteItem = (item) => {
        const index = items.indexOf(item)
        const itemsCopy = [...items]
        itemsCopy.splice(index,1)
        setItems(itemsCopy)
    }

    const editItems = (item) => {
        setEdit(item)
    }

    const updateItem = (item) => {
        const itemsCopy = [...items];
        const index = itemsCopy.findIndex(i => i.id === item.id);
        itemsCopy[index] = item;
        setItems(itemsCopy)
        setEdit(false)
    }

    const itemFiltered = (filter === 'All') ? 
            items : 
            items.filter(item => item.category === filter);

    const itemDisplay = itemFiltered
        .map(item =>
            <FunctionalItemBox key={item.id} item={item} edit={editItem} addToCart={addToCart} deleteItem={deleteItem} editItem={editItems}/>
            
    )
    let cartDisplay = cart
    .map(item => {
            return (
                <tr>
                    <td><img src={item.image} alt={item.name} width={80} /></td>
                    <td>x {item.quantity}</td>
                    <td> Php {item.quantity * item.price}</td>
                </tr>
            )

    })

    return(
        <div>
            <div><br />
                <table>
                        <thead>
                            <tr>
                                <th colSpan="5">{editItem ? 'EDIT ITEM' : 'ADD ITEM'}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <FunctionalAddItemForm item={items} addItem={addItem} editItem={editItem}  updateItem= {updateItem}/> <br />
                        </tbody>
                    </table>
            </div>
            <div>
                <table>
                        <thead>
                            <tr>
                                <th colSpan="3">Sort by Categories</th>
                            </tr>
                        </thead>
                        <tbody>
                            <td><button className="btn blue btn-block" onClick={() => changeDisplay('All')}>All</button></td>
                            <td><button className="btn blue btn-block" onClick={() => changeDisplay('Food')}>Food</button></td>
                            <td><button className="btn blue btn-block"onClick={() => changeDisplay('Drink')}>Drink</button></td>
                        </tbody>
                    </table>
            </div> <br />
            <div id="display">
                    <table>
                        <thead>
                            <tr>
                                <th colSpan="5">Items</th>
                            </tr>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {itemDisplay}
                        </tbody>
                    </table>
            </div> <br />

            <div>    
                    <table>
                        <thead>
                            <tr>
                                <th colSpan="3">Cart</th>
                            </tr>
                            <tr>
                                <th>Image</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartDisplay}
                        </tbody>
                    </table>

            </div>
        </div>
    )

}

export default FunctionalRestoApp;