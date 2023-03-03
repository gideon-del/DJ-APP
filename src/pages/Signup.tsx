import Card from "../UI/Card";
import logo from "../assets/logo.svg";
import SignupForm from "../components/SignupForm";
import SigninForm from "../components/SigninForm";
import { useState } from "react";
const Signup = () => {
  const [login, setLogin] = useState(false);
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

export default Signup;
