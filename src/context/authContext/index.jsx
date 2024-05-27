import { useEffect, useState, createContext, useContext } from "react";
import { auth } from "../../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { MyContext } from "./myContext";

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLogin, setUserLogin] = useState(false);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        setUserLogin(true);
      } else {
        setCurrentUser(null);
        setUserLogin(false);
      }
      setLoader(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    userLogin,
    loader,
  };

  return (
    <MyContext.Provider value={value}>{!loader && children}</MyContext.Provider>
  );
}
