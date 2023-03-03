import React, { useMemo, useState } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import google from "../assets/google.svg";
import { SignIn, Singup } from "../lib/types";
import { checkValidation } from "../lib/helperFunctions";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
const SigninForm = () => {
  const requiredVal = useMemo<(keyof SignIn)[]>(
    () => ["email", "password"],
    []
  );
  const [error, setError] = useState<{
    isError: boolean;
    message: string;
  }>();
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const form = new FormData(e.target as HTMLFormElement);
      const entries = Object.fromEntries(form) as Singup;
      const keys = Object.keys(entries);
      checkValidation(requiredVal, keys, entries);
      const user = await signInWithEmailAndPassword(
        auth,
        entries.email,
        entries.password
      );
      console.log(user);
      const res = await getDoc(doc(db, "users", user.user.uid));
      console.log(res.data());
      (e.target as HTMLFormElement).reset();
    } catch (error: any) {
      setError({
        isError: true,
        message: `${error.message.split("Firebase: Error").join(" ")}`,
      });
    }
  };
  return (
    <>
      <form
        className="text-primaryBlack flex flex-col gap-4 w-full"
        onSubmit={submitHandler}
        onBlur={() => setError({ isError: false, message: "" })}
      >
        <h1 className="text-xl font-bold uppercase text-center">
          Welcome Back
        </h1>
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
        {error?.isError && (
          <span className="text-red-600 text-center">{error.message}</span>
        )}
        <button className="px-4 py-2 bg-black text-gray rounded-md font-bold uppercase max-w-xl mx-auto  w-full">
          Log in
        </button>
      </form>
      <p className="text-center">OR</p>
      <Button color="transparent">
        <div className="flex gap-3 items-center justify-center font-semibold text-primaryBlack">
          <img src={google} width={30} height={30} alt="Google" />
          <span>Log in with Google</span>
        </div>
      </Button>
    </>
  );
};

export default SigninForm;
