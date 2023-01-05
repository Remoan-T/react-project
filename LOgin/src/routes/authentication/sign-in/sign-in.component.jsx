import { Route, Routes } from "react-router-dom";
import SignUp from "../sign-up/sign-up.component";
import UserPage from "../user-page/user-page.component";
import SignInForm from "../../../components/sign-in-form/sign-in-form.component";
import "./sign-in.styles.scss";
import { UserContext } from "../../../contexts/user.context";
import { useContext} from "react";

const Authentication = () => {
  const { currentUser ,buttonClicked} = useContext(UserContext);
  

  return (
    <div className={buttonClicked ? 'clicked-container' : 'authentication-container'}>
      <Routes>
        <Route path="signup" element={<SignUp />} />
      </Routes>
      {currentUser ? <UserPage /> : <SignInForm />}

    </div>
  );
};

export default Authentication;
