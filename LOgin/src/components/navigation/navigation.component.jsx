import React, { Fragment, useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { Outlet } from "react-router-dom";
import { ReactComponent as Crwnlogo } from "../../assets/crown.svg";
import {
  NavigationContainer,
  LinksContainer,
  LogoContainer,
  NavLink,
} from "./navigation.styles";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();

  const signOutUser = () => {
    setCurrentUser(null);
    localStorage.clear();
    navigate("/");
  };
  const { currentUser, setCurrentUser } = useContext(UserContext);
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <Crwnlogo className="logo" />
        </LogoContainer>

        <LinksContainer>
        {currentUser &&  <NavLink to="/auth">Mydata</NavLink>}
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              {" "}
              Sign Out
            </NavLink>
            
          ) : (
            <NavLink to="/auth">Sign In</NavLink>
          )}
          

          {currentUser && <b style={{fontSize:'20px',color:'gray'}}>{currentUser.email}</b>}
        </LinksContainer>
      </NavigationContainer>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
