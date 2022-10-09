import React from "react";
import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";



const SignIn = () => {
    const logGoogleUser = async () => {

        const response = await signInWithGooglePopup();
        console.log(response);
            
        };
        
    return(
        <div>
            <button onClick={logGoogleUser}>
                SignIn With Google
            </button>
            Sign In Page !!</div>
    );
}

export default SignIn;