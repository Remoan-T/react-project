import './checkout.styles.scss';
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckOutItem from '../../components/checkout-item/checkout-item.component';

const CheckOut = () => {
const {cartItems} = useContext(CartContext);

    return(
        
        <div className='checkout-container'>

            <div className='checkout-header'>

                <div className='header-block'>
                 <span>Product</span>
                </div>

                <div className='header-block'>
                 <span>Discription</span>
               </div>

               <div className='header-block'>
                <span>Quantity</span>
              </div>

              <div className='header-block'>
               <span>Price</span>
              </div>
               <span>Remove</span>
              <div className='header-block'>

              </div>



            </div>
            
{cartItems.map((cartItem)=> <CheckOutItem key={cartItem.id} cartItem={cartItem}/>)}
<span className='total'>Total : 0</span>


        </div>
    );
}
export default CheckOut;