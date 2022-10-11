import React from "react";
import { signInWithGooglePopup , createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";




const SignIn = () => {
    const logGoogleUser = async () => {

        const {user} = await signInWithGooglePopup();
         createUserDocumentFromAuth(user);
    
            
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