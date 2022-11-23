import React , {Fragment ,useContext} from "react";
import { UserContext } from "../../contexts/user.context";
import { Outlet  } from "react-router-dom";
import { userSignOut } from "../../utils/firebase/firebase.utils";
import {ReactComponent as Crwnlogo} from '../../assets/crown.svg';
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";
import { NavigationContainer , LinksContainer , LogoContainer, NavLink } from "./navigation.styles";



const Navigation = () => {
  const {currentUser}=useContext(UserContext);
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