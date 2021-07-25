import React from 'react';
import FunctionalAddItemForm from './FunctionalAddItemForm.js';
import FunctionalEditItemForm from './FunctionalEditItemForm.js';
import FunctionalItemBox from './FunctionalItemBox.js';
import './FunctionalRestoApp.css';

class FunctionalRestoApp extends React.Component{
    
    state = {
        items: [
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
        ],
        filter: 'All',
        cart: [],
        editItem: null
    }

    // itemDisplay = this.state.items.map(item =>
    //     <ItemBox key={item.id} item={item} />
        
    // )


    changeDisplay = (category) => {
        this.setState({
            filter: category
        });
    }

    // 1.) create a function in parent
    // 2.) pass that function as props to the child
    // 3.) invoke the function in child

    addItem = (newItem) => {
        newItem.id = this.state.items.length + 1;
        let itemsCopy = [...this.state.items];
        itemsCopy.push(newItem);

        this.setState({
            items: itemsCopy
        })
    }

    addToCart = (item) =>{
        let cartCopy = [...this.state.cart];

        let index = cartCopy.findIndex(cartItem => cartItem.id === item.id)
        if (index === -1) {
            item.quantity = 1;
            cartCopy.push(item);
        } else {
            cartCopy[index].quantity++;
        }

        this.setState({
            cart: cartCopy
        });

        // let exists = false;
        // cartCopy.forEach(cartItem => {
        //     if (cartItem.id === item.id) {
        //         exists = true;

        //         cartItem.quantity++;
        //     }
        // });

        // if (!exists) {
        //     item.quantity = 1;
        //     cartCopy.push(item);
        // }

        // this.setState({
        //     cart: cartCopy
        // });
    }

    deleteItem = (item) => {
        let itemsCopy = [...this.state.items];

        itemsCopy = itemsCopy.filter(i => i.id !== item.id)

        this.setState({
            items: itemsCopy
        });
    }

    editItem = (item) => {
        this.setState({
            editItem: item
        });
    }

    updateItem = (item) => {
        let itemsCopy = [...this.state.items];

        let index = itemsCopy.findIndex(i => i.id === item.id);
        itemsCopy[index] = item;

        this.setState({
            items: itemsCopy,
            editItem: null
        });
    }


    render(){
        let items = this.state.filter === 'All' ? 
            this.state.items : 
            this.state.items.filter(item => item.category === this.state.filter);

        let itemDisplay = items
            .map(item =>
                <FunctionalItemBox key={item.id} item={item} addToCart={this.addToCart} deleteItem={this.deleteItem} editItem={this.editItem}/>
                
        )
        let cartDisplay = this.state.cart
        .map(item => {
                return <div>
                    <img src={item.image} alt={item.name} width={35} />
                    x {item.quantity}
                    Php {item.quantity * item.price}
                </div>

            })

        return(
            <div>
                <FunctionalAddItemForm addItem={this.addItem} editItem = {this.state.editItem}  updateItem= {this.updateItem}/>
                <div>
                    <button onClick={() => this.changeDisplay('All')}>All</button>
                    <button onClick={() => this.changeDisplay('Food')}>Food</button>
                    <button onClick={() => this.changeDisplay('Drink')}>Drink</button>
                </div>
                {/* <div className="restoApp">
                    {itemDisplay}
                </div> */}
                {/* <FormActivity /> */}

                {/* {this.state.editItem &&
                    <FunctionalEditItemForm editItem = {this.state.editItem}  updateItem= {this.updateItem}/>
                } */}

                <h1>Resto App</h1>
                <div className="display">
                    <div id="RestoApp">
                        {itemDisplay}
                    </div>
                    <div className="CartDisplay">
                        <h2>Cart</h2>
                        {cartDisplay}
                    </div>
                </div>

            </div>
        );
    }

}

export default FunctionalRestoApp;