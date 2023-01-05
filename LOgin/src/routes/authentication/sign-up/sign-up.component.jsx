import SignUpForm from "../../../components/sign-up-form/sign-up-form.component";
import "./sign-up.styles.scss";
import { UserContext } from "../../../contexts/user.context";
import { useContext } from "react";

const SignUp = () => {
  const { currentUser } = useContext(UserContext);
  return (

    
    <div className="sign-up-container">


      {!currentUser && <SignUpForm /> }

    </div>
  );
};

export default SignUp;
