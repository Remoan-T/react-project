import React , {useState} from "react";
import { signInWithGooglePopup , createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import Button from "../../components/button/button.component";
import FormInput from "../../components/form-input/form-input.component";




const SignIn = () => {

    const defaultFormFields = {
        email: "",
        password:""
    };

    const [formFields , setFormFields] = useState(defaultFormFields);
    const {email , password} = formFields;
    

    const hundleChange = (event) => {
        const {name , value} = event.target;
    setFormFields({...formFields , [name] : value })
    console.log(value);
        
    }


    const logGoogleUser = async () => {

        const {user} = await signInWithGooglePopup();
         createUserDocumentFromAuth(user);
    
            
        };
        
    return(
        <div>
<form>

        <FormInput
          label='Email'
          type="text"
          onChange={hundleChange}
          name="email"
          value={email}
          required
        />

       <FormInput
          label='Password'
          type="password"
          onChange={hundleChange}
          name="password"
          value={password}
          required
        />


</form>

      <Button  >
                Sign In
            </Button>

            <Button onClick={logGoogleUser} buttonType='google'>
                Sign In With Google
            </Button>
     <SignUpForm />
            
            </div>

    );
}

export default SignIn;