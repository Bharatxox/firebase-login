import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { MyContext } from "../context/authContext/myContext";

export const PrivateRoute = ({ children }) => {
  const { userLogin, loader } = useContext(MyContext);

  if (loader) {
    return <div>Loading...</div>;
  }

  return userLogin ? children : <Navigate to="/" replace />;
};
