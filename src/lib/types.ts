import { UserInfo } from "firebase/auth";

type Singup = {
  email: string;
  password: string;
  role: string;
  name: string;
};

type SignIn = {
  email: string;
  password: string;
};

interface Auth {
  user: UserInfo | null;
  error?: {
    message: string;
    isError: boolean;
  };
  isAuthenticating: boolean;
}
export type { Singup, SignIn, Auth };
