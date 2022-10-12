import React from "react";
import { signInWithGooglePopup , createUserDocumentFromAuth , signInWithGoogleRedirect, auth} from "../../utils/firebase/firebase.utils";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";






const SignIn = () => {

useEffect( () => { const  Get = async () => {
    const response = await getRedirectResult(auth);
    if(response)
    createUserDocumentFromAuth(response.user);
    }
    return Get;
},[]);

    const logGoogleUser = async () => {

        const {user} = await signInWithGooglePopup();
         createUserDocumentFromAuth(user);
    
            
        };
        
    return(
        <div>
            <button onClick={logGoogleUser}>
                SignIn With Google
            </button>

            <button onClick={signInWithGoogleRedirect}>
                SignIn With Google Redirect
            </button>
            Sign In Page !!</div>
    );
}

export default SignIn;