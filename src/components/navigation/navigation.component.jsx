import React , {Fragment ,useContext} from "react";
import { selectCurrentUser } from "../../store/user/user.selecter";
import { useSelector } from "react-redux";
import { Outlet  } from "react-router-dom";
import { userSignOut } from "../../utils/firebase/firebase.utils";
import {ReactComponent as Crwnlogo} from '../../assets/crown.svg';
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";
import { NavigationContainer , LinksContainer , LogoContainer, NavLink } from "./navigation.styles";



const Navigation = () => {
   const currentUser = useSelector(selectCurrentUser)
   const {isCartOpen} = useContext(CartContext);
    return(
      <Fragment>
 <NavigationContainer>
           
               <LogoContainer to= '/'>
                <Crwnlogo className='logo' />
               </LogoContainer>
            
            <LinksContainer>
              <NavLink to='/shop'>
                Shop
              </NavLink>
              {
                currentUser ? (<NavLink as='span' onClick={userSignOut}>  Sign Out</NavLink>) :
                 (<NavLink to='/auth'>
                Sign In
              </NavLink>)
              }
              <CartIcon />
             </LinksContainer>
             {isCartOpen && <CartDropdown/>}
             </NavigationContainer>
       
        <Outlet />

        </Fragment>
    );
  }
  
export default Navigation;