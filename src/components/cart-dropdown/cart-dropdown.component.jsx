import { CartDropdownContainer,CartItemsStyle ,EmptyMessage} from './cart-dropdown.styles';
import { useNavigate } from 'react-router-dom';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';



const CartDropdown =() => {
const {cartItems} = useContext(CartContext);
const navigate = useNavigate();

const goToCheckOut = () => navigate('/checkout');


return (
    <CartDropdownContainer>
      <CartItemsStyle>
        {cartItems.length ? cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        )) : (<EmptyMessage>Cart is Empty !</EmptyMessage>)}
      </CartItemsStyle>
      <Button onClick={goToCheckOut}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );

}

export default CartDropdown;