import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import './checkout-item.styles.scss';


const CheckOutItem = ({cartItem}) => {
    const {name , quantity , imageUrl,price} = cartItem;
    const {addItemToCart, deleteItemFromCart ,removeItem} = useContext(CartContext);
    return(
        
           <div className="checkout-item-container">
            <div className="image-container">
<img src={imageUrl} alt={name}/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">{quantity}</span>
            <span className="price">{price}</span>
        <div onClick={() => removeItem(cartItem)} className="remove-button">&#9747;</div>
           </div>
    );

}
export default CheckOutItem;