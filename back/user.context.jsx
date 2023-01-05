import React ,{ createContext , useEffect, useState} from 'react';
import { onAuthStateChangedListner ,createUserDocumentFromAuth} from '../utils/firebase/firebase.utils';



export const  UserContext = createContext({
currentUser: null,
setCurrentUser: () => null
});


export const UserProvider = ({children}) =>{
    const [currentUser , setCurrentUser] =useState(null);
    const  value = {currentUser,setCurrentUser};

    
useEffect(() =>{
const unsubsucribe = onAuthStateChangedListner((user) => {
setCurrentUser(user);
if(user)createUserDocumentFromAuth(user);
}) 
 return unsubsucribe;   
},[]);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}