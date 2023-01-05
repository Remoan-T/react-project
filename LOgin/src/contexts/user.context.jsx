import { useEffect } from "react";
import { createContext, useState } from "react";

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
  setButtonClicked: () => null,
  buttonClicked: null
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [buttonClicked, setButtonClicked] = useState(null);
  const value = { currentUser, setCurrentUser , setButtonClicked, buttonClicked};

  useEffect(() => {
    localStorage.token && setCurrentUser(localStorage);
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
