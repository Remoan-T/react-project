import React from "react";
import Home from "./routes/home/home.component";
import { Routes ,Route } from "react-router-dom";
import Navigation from "./components/navigation/navigation.component";
import Authentication from "./routes/sign-in/authentication.component";


const Shop =() => {
  return (
    <div>The Shop Component !!</div>
  );
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}> 
          <Route index element={<Home />}/>
          <Route path="home" element={<Home />}/>
          <Route path='shop' element={<Shop />} />     
          <Route path='auth' element={<Authentication />} />    
      </Route>
    </Routes>
  );
};

export default App;
