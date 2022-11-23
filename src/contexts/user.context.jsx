import React, { createContext, useEffect, useReducer } from "react";
import {
  onAuthStateChangedListner,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

const REDUCERS_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

const INITIAL_VALUES = {
  currentUser: null,
};

const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case REDUCERS_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: payload };

    default:
      throw new Error(`unhandeled Type ${type} in userReducer`);
  }
};

export const UserProvider = ({ children }) => {
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_VALUES);

  const setCurrentUser = (user) => {
    dispatch({ type: REDUCERS_TYPES.SET_CURRENT_USER, payload: user });
  };
  const value = { currentUser };
  useEffect(() => {
    const unsubsucribe = onAuthStateChangedListner((user) => {
      setCurrentUser(user);
      if (user) createUserDocumentFromAuth(user);
    });
    return unsubsucribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
