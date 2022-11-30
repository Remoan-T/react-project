import React, { createContext, useEffect, useReducer } from "react";
import {
  onAuthStateChangedListner,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";


export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

const INITIAL_VALUES = {
  currentUser: null,
};



export const UserProvider = ({ children }) => {
 

  const value = { };
  

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
