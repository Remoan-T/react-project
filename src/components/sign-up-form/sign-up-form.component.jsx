import React ,{useState} from "react";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

const defaultFormFields ={
displayName: '',
email:'',
password:'',
confirmPassword:''
}


const SignUpForm = () =>{

    const [formFields , setFormFields] = useState(defaultFormFields);
    const {displayName , email , password ,confirmPassword} = formFields;


const hundleChange = (event) => {
    const {name , value} = event.target;
    setFormFields({...formFields,[name]: value});
    
}


const hundleSubmit = (event) => {
event.preventDefault();
console.log(email);


}


    return (

<div>
    <form onSubmit={hundleSubmit}>
<label>Name</label>
<input type='text' onChange={hundleChange} name='displayName' value={displayName} required/>

<label>Email</label>
<input type='email' onChange={hundleChange} name='email' value={email} required/>

<label>Password</label>
<input type='password' onChange={hundleChange} name='password' value={password} required/>

<label>Confirm Password</label>
<input type='password' onChange={hundleChange} name='confirmPassword' value={confirmPassword} required/>

<button type="submit" >Submit</button>
    </form>
</div>

    );
}

export default SignUpForm;