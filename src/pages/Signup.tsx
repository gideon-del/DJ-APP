import Card from "../UI/Card";
import logo from "../assets/logo.svg";
import SignupForm from "../components/SignupForm";
import SigninForm from "../components/SigninForm";
import { useEffect, useState } from "react";
import Button from "../UI/Button";
import google from "../assets/google.svg";
import {
  getRedirectResult,
  GoogleAuthProvider,
  signInWithRedirect,
} from "firebase/auth";
import { auth } from "../firebase/config";

const propvider = new GoogleAuthProvider();
const Signup = () => {
  const [login, setLogin] = useState(false);
  const toggleLogin = () => {
    setLogin((prev) => !prev);
  };
  const signInWithGoogle = async () => {
    await signInWithRedirect(auth, propvider);
    const res = await getRedirectResult(auth);
    console.log(res?.user);
  };
  useEffect(() => {
    getRedirectResult(auth).then((result) => console.log(result?.user));
  }, []);
  return (
    <div className="signup">
      <Card>
        <div className="self-center">
          <img src={logo} width="50" height={50} alt="Logo" />
        </div>
        {login ? <SigninForm /> : <SignupForm />}
        <p className="text-center">OR</p>

        <Button color="transparent" onClick={signInWithGoogle}>
          <div className="flex gap-3 items-center justify-center font-semibold text-primaryBlack">
            <img src={google} width={30} height={30} alt="Google" />
            <span>{login ? "Log In" : "Sign up"} with Google</span>
          </div>
        </Button>
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
