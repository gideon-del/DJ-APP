import React, { useMemo, useState } from "react";
import Button from "../UI/Button";
import google from "../assets/google.svg";
import Input from "../UI/Input";
import { auth, db } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { Singup } from "../lib/types";
import { checkValidation } from "../lib/helperFunctions";
const SignupForm = () => {
  const requiredValues = useMemo<(keyof Singup)[]>(
    () => ["name", "email", "password", "role"],
    []
  );
  const [authenticating, setAuthenticating] = useState(false);
  const [error, setError] = useState<{
    isError: boolean;
    message: string;
  }>();
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setAuthenticating(true);
    try {
      const form = new FormData(e.target as HTMLFormElement);
      const entries = Object.fromEntries(form) as Singup;
      const keys = Object.keys(entries);
      checkValidation(requiredValues, keys, entries);
      const user = await createUserWithEmailAndPassword(
        auth,
        entries.email,
        entries.password
      );
      const res = await setDoc(doc(db, "users", user.user.uid), {
        name: entries.name,
        email: entries.email,
        role: entries.role,
      });
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
        onBlur={() =>
          setError({
            isError: false,
            message: "",
          })
        }
      >
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
        <div>
          <p className="text-center text-secondaryBlack font-bold mb-4">
            Do you want to sign up as
          </p>
          <div className="flex justify-evenly">
            <div>
              <input type="radio" id="guest" name="role" value="guest" />
              <label htmlFor="guest">Guest</label>
            </div>
            <div>
              <input type="radio" id="dj" name="role" value="dj" />
              <label htmlFor="dj">DJ</label>
            </div>
          </div>
        </div>
        {error?.isError && (
          <span className="text-red-600 text-center">{error.message}</span>
        )}
        <button className="px-4 py-2 bg-black text-gray rounded-md font-bold uppercase max-w-xl mx-auto  w-full">
          Sign Up
        </button>
      </form>
    </>
  );
};

export default SignupForm;
