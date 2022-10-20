import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './contexts/user.context';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <UserProvider>
     <App />
     </UserProvider>
    </BrowserRouter>
  </React.StrictMode>);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
