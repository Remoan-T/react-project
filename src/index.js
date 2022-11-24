import React from 'react';
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import { store } from './store/store';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './contexts/user.context';
import { CategoriesProvider } from './contexts/categories.context';
import { CartProvider } from './contexts/cart.context';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
     <BrowserRouter>
       <UserProvider>
         <CategoriesProvider>
           <CartProvider>
              <App />
            </CartProvider>
         </CategoriesProvider>   
     </UserProvider>
    </BrowserRouter>
   </Provider>
  </React.StrictMode>);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
