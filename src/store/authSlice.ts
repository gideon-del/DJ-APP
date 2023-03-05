import { createSlice } from "@reduxjs/toolkit";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import { Auth } from "../lib/types";

const initialState: Auth = {
  isAuthenticating: false,
  user: null,
  error: {
    isError: false,
    message: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authenticating(state) {
      return {
        ...state,
        isAuthenticating: !state.isAuthenticating,
      };
    },
    successfull(state, action) {
      return {
        ...state,
        user: action.payload.user,
        error: {
          isError: false,
          message: "",
        },
      };
    },
    failed(state, action) {
      return {
        ...state,
        user: null,
        error: {
          isError: true,
          message: action.payload.message,
        },
      };
    },
    logout(state) {
      signOut(auth);
      return {
        ...state,
        user: null,
      };
    },
  },
});

export const { authenticating, failed, successfull, logout } =
  authSlice.actions;
export default authSlice.reducer;
