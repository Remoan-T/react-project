import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss";
import Button from "../button/button.component";
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  

  const resetForm = () => {
    setFormFields(defaultFormFields);
  };

  const hundleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const hundleSubmit = async (event) => {
    event.preventDefault();
    try {
     await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      
      
    
    
      resetForm();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("The password is Incorrect !");
          break;
        case "auth/user-not-found":
          alert("This Account Does not Exist !");
          break;
          case "auth/network-request-failed":
          alert("Check Your Internet Or Use VPN (FireBase Ristrected in Syria )!");
          break;
        default:
          console.log(error);

      }
    }
  };

  const signInWithGoogle = async () => {
   await signInWithGooglePopup();
    
  };

  return (
    <div className="sign-in-container">
      <h2>Already Have An Account ?</h2>
      <span>Sign In With Email And Password</span>
      <form onSubmit={hundleSubmit}>
        <FormInput
          label="Email"
          type="email"
          onChange={hundleChange}
          name="email"
          value={email}
          required
        />

        <FormInput
          label="Password"
          type="password"
          onChange={hundleChange}
          name="password"
          value={password}
          required
        />

        <div className="buttons-container">
          <Button type="submit"> Sign In</Button>

          <Button type="button" onClick={signInWithGoogle} buttonType="google">
            Sign In With Google
          </Button>
        </div>
      </form>
    </div>
  );
};
export default SignInForm;
