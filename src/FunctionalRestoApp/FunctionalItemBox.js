import './FunctionalItemBox.css';

const FunctionalItemBox = (props) => {
    const orderClickHandler = () => {
        props.addToCart(props.item);
    }

    const deleteClickHandler = () => {
        props.deleteItem(props.item);
    }

    const editClickHandler = () => {
        props.editItem(props.item);
    }

    const {name, price, image, category} = props.item;
    
    console.log(props)
    return(

        <tr>
            <td><img src={image} alt={props.item.name} width="100px"></img></td>
            <td><strong>{name}</strong></td>
            <td><small>{category}</small></td>
            <td><p>Php {price}</p></td>
            <td><i class="icon fas fa-cart-plus" onClick={orderClickHandler}></i>
                <i class="icon fas fa-edit" onClick={editClickHandler}></i>
                <i className="icon fas fa-times"onClick={deleteClickHandler}></i>
            </td>
        </tr>
    )
}

export default FunctionalItemBox;