import React , {Fragment ,useContext} from "react";
import { UserContext } from "../../contexts/user.context";
import { Outlet , Link } from "react-router-dom";
import { userSignOut } from "../../utils/firebase/firebase.utils";
import {ReactComponent as Crwnlogo} from '../../assets/crown.svg';
import './navigation.styles.scss'


const Navigation = () => {
  const {currentUser}=useContext(UserContext);

    return(
      <Fragment>
        <div className="navigation">
           
               <Link className="logo-container" to= '/'>
                <Crwnlogo className='logo' />
               </Link>
            
            <div className="nav-links-container">
              <Link className="nav-link" to='/shop'>
                Shop
              </Link>
              {
                currentUser ? (<span className="nav-link" onClick={userSignOut}> Sign Out</span>) :
                 (<Link className="nav-link" to='/auth'>
                Sign In
              </Link>)
              }
              
             </div>
        </div>
        <Outlet />

        </Fragment>
    );
  }
  
export default Navigation;