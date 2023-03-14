import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebase/config";
import Auth from "./pages/Auth";
import DJ from "./pages/DJ";
import User from "./pages/User";
import { successfull } from "./store/authSlice";

function App() {
  const user = useSelector(
    (store: {
      auth: {
        user: object;
      };
    }) => store.auth.user
  );
  const dispatch = useDispatch();
  // useEffect(() => {
  //   let timeout = null;
  //   const listen = onAuthStateChanged(auth, async (user) => {
  //     if (user) {
  //       // const res = await user.getIdToken()
  //       dispatch(
  //         successfull({
  //           user: user,
  //         })
  //       );
  //       timeout = setTimeout(() => {
  //         signOut(auth);
  //       }, 3600000);
  //     }
  //   });
  //   return () => {
  //     listen();
  //     if (timeout) {
  //       clearTimeout(timeout);
  //     }
  //   };
  // });
  return <DJ />;
}

export default App;
