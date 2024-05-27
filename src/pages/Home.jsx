import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { doSignOut } from "../firebase/auth";
import { MyContext } from "../context/authContext/myContext";

const HomePage = () => {
  const { currentUser } = useContext(MyContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await doSignOut();
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-lg rounded-lg text-center">
        <h2 className="text-2xl font-bold text-gray-700">
          Welcome {currentUser.email}!
        </h2>
        <button
          onClick={handleLogout}
          className="mt-4 px-4 py-2 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default HomePage;
