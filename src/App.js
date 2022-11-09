import React from "react";
import Home from "./routes/home/home.component";
import { Routes ,Route } from "react-router-dom";
import Navigation from "./components/navigation/navigation.component";
import Authentication from "./routes/sign-in/authentication.component";
import Shop from "./routes/shop/shop.component";
import CheckOut from "./routes/checkout/checkout.component";



const App = () => {
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
