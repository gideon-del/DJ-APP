import Card from "../UI/Card";
import logo from "../assets/logo.svg";
import SignupForm from "../components/SignupForm";
import SigninForm from "../components/SigninForm";
import { useCallback, useEffect, useState } from "react";
import Button from "../UI/Button";
import google from "../assets/google.svg";
import { auth, db } from "../firebase/config";
import { useDispatch } from "react-redux";
import { successfull } from "../store/authSlice";
// import { doc, getDoc, setDoc } from "firebase/firestore";
const Auth = () => {
  const [login, setLogin] = useState(false);
  const dispatch = useDispatch();
  const toggleLogin = () => {
    setLogin((prev) => !prev);
  };

  return (
    <div className="signup">
      <Card>
        <div className="self-center">
          <img src={logo} width="50" height={50} alt="Logo" />
        </div>
        {login ? <SigninForm /> : <SignupForm />}
        <p className="text-center">OR</p>

        <p
          className="cursor-pointer text-center text-secondaryBlack font-bold"
          onClick={toggleLogin}
          role="link"
        >
          {login
            ? "Dont have an account. Create one now"
            : "Already a user. Log in"}
        </p>
      </Card>
      <div className="auth-bg"></div>
    </div>
  );
};

export default Auth;
