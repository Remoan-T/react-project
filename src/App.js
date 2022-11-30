import { setCurrentUser } from "./store/user/user.action";
import { useDispatch } from "react-redux";
import React , { useEffect } from "react";
import {
  onAuthStateChangedListner,
  createUserDocumentFromAuth,
} from "./utils/firebase/firebase.utils";

import Home from "./routes/home/home.component";
import { Routes ,Route } from "react-router-dom";
import Navigation from "./components/navigation/navigation.component";
import Authentication from "./routes/sign-in/authentication.component";
import Shop from "./routes/shop/shop.component";
import CheckOut from "./routes/checkout/checkout.component";






const App = () => {


  const dispatch = useDispatch();
  useEffect(() => {

    const unsubsucribe = onAuthStateChangedListner((user) => {
     dispatch(setCurrentUser(user));
      if (user) createUserDocumentFromAuth(user);
    });
    return unsubsucribe;
  }, []);
  
  return (
    <Routes>
      <Route path="/" element={<Navigation />}> 
          <Route index element={<Home/>}/>
          <Route path="home" element={<Home />}/>
          <Route path='shop/*' element={<Shop />} />     
          <Route path='auth' element={<Authentication />} /> 
          <Route path='checkout' element={<CheckOut/>} />
      </Route>
   
    </Routes>
  );
};

export default App;
