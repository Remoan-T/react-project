import React from "react";
import { Routes ,Route } from "react-router-dom";
import Navigation from "./components/navigation/navigation.component";
import Authentication from "./routes/authentication/sign-in/sign-in.component";
import UserPage from "./routes/authentication/user-page/user-page.component";





const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}> 
          <Route index  element={<Authentication />}/>  
          <Route path='auth/*' element={<Authentication />} />
          <Route path='*' element={<Authentication/>} />
         
          
      </Route>
   
    </Routes>
  );
};

export default App;
