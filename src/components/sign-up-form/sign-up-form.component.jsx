import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
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
      const response = await createAuthUserWithEmailAndPassword(
        email,
        password,
        displayName
      );
      await createUserDocumentFromAuth(response.user, { displayName });
      resetForm();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email Already Registed !");
      } else {
        console.log("Error In User Creation !!", error);
      }
    }
  };

  return (
    <div>
      <form onSubmit={hundleSubmit}>
        <FormInput
          label='name'
          type="text"
          onChange={hundleChange}
          name="displayName"
          value={displayName}
          required
        />

        <FormInput
          label='Email'
          type="email"
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

        <FormInput
        label='Confirm Password'
          type="password"
          onChange={hundleChange}
          name="confirmPassword"
          value={confirmPassword}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUpForm;
