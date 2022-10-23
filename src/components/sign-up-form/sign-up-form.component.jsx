import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";

import "./sign-up.styles.scss";
import Button from "../button/button.component";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetForm = () => {
    setFormFields(defaultFormFields);
  };

  const hundleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const hundleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords Dont Match !");
      return;
    }
    createUser();
  };

  const createUser = async () => {
    try {
      const {user} = await createAuthUserWithEmailAndPassword(
        email,
        password
      );


      
    
      await createUserDocumentFromAuth(user, { displayName });
     
      
      resetForm();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email Already Registed !");
      }
      else if (error.code === "auth/weak-password")
        alert("Weak Password !");
      else {
        console.log("Error In User Creation !!", error);
      }
    
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't Have An Account ?</h2>
      <span>Sign Up With Email And Password</span>
      <form onSubmit={hundleSubmit}>
        <FormInput
          label="name"
                                             //otherProps
          type="text"                    
          onChange={hundleChange}       
          name="displayName"
          value={displayName}
          required
        />

        <FormInput
          label="Email"
                                             //otherProps
          type="email"
          onChange={hundleChange}
          name="email"
          value={email}
          required
        />

        <FormInput
          label="Password"
                                             //otherProps
          type="password"
          onChange={hundleChange}
          name="password"
          value={password}
          required
        />

        <FormInput
          label="Confirm Password"
                                             //otherProps
          type="password"
          onChange={hundleChange}
          name="confirmPassword"
          value={confirmPassword}
          required
        />

        <Button type="submit"> Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
