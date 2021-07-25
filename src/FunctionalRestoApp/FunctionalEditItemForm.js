import React from 'react'

class FunctionalEditItemForm extends React.Component{
    state = {
        name: this.props.editItem.name,
        category: this.props.editItem.category,
        price: this.props.editItem.price,
        image: this.props.editItem.image
    }

    inputChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addNewItem = () => {
        let newItem ={
            name: this.state.name,
            price: this.state.price,
            category: this.state.category,
            image: this.state.image
        }
        this.props.addItem(newItem);
    }

    update = () => {
        let updatedItem = {
            id: this.props.editItem.id,
            ...this.state
        }

        this.props.updateItem(updatedItem);
    }


    render() {
        return (
            <div>
                Name: <input 
                    type="text"
                    name="name"
                    value={this.state.name}
                    // onChange={(e) => this.setState({ name: e.target.value })}
                    onChange={this.inputChangeHandler}
                />
                Category: <input 
                    type="text"
                    name="category"
                    value={this.state.category}
                    // onChange={(e) => this.setState({ category: e.target.value })}
                    onChange={this.inputChangeHandler}
                />
                Price: <input 
                    type="number"
                    name="price"
                    value={this.state.price}
                    // onChange={(e) => this.setState({ price: e.target.value })}
                    onChange={this.inputChangeHandler}
                />
                Image: <input 
                    type="text"
                    name="image"
                    value={this.state.image}
                    // onChange={(e) => this.setState({ image: e.target.value })}
                    onChange={this.inputChangeHandler}
                />
                <button onClick={this.update}>Edit Item</button>
            </div>
        )
    }
}


export default FunctionalEditItemForm;