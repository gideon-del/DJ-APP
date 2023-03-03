import Card from "../UI/Card";
import logo from "../assets/logo.svg";
import Input from "../UI/Input";
import Button from "../UI/Button";
import google from "../assets/google.svg";
const Signup = () => {
  return (
    <div className="signup">
      <Card>
        <div className="self-center">
          <img src={logo} width="50" height={50} alt="Logo" />
        </div>
        <form className="text-primaryBlack flex flex-col gap-4 w-full">
          <h1 className="text-xl font-bold uppercase text-center">Sign up</h1>
          <div className="flex flex-col w-full">
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <Input id="name" name="name" type="text" />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <Input id="email" name="email" type="email" />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="pass" className="sr-only">
              Password
            </label>
            <Input id="pass" name="password" type="password" />
          </div>
          <button className="px-4 py-2 bg-black text-gray rounded-md font-bold uppercase max-w-xl mx-auto  w-full">
            Sign Up
          </button>
        </form>
        <p className="text-center">OR</p>
        <Button color="transparent">
          <div className="flex gap-3 items-center justify-center font-semibold text-primaryBlack">
            <img src={google} width={30} height={30} alt="Google" />
            <span>Sign Up with Google</span>
          </div>
        </Button>
      </Card>
      <div className="auth-bg"></div>
    </div>
  );
};

export default Signup;
