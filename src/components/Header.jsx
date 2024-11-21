import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { Bounce } from "react-toastify";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const handleLogOut = () => {
    logOutUser()
      .then(() => {
        toast.success("Logged Out Successfully", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      })
      .catch((error) => console.log("ERROR", error.message));
  };

  return (
    <div className="mt-5 flex justify-between">
      <div>
        <h1 className="font-bold text-xl text-orange-700">Career Mentor's</h1>
      </div>
      <div className="flex gap-4">
        <NavLink to="/">Home</NavLink>
        {user && (
          <>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/reviews">Reviews</NavLink>
          </>
        )}
      </div>
      <div>
        {user ? (
          <>
            <div className="relative flex items-center gap-6">
              <div className="relative group">
                <img
                  className={
                    user.photoURL
                      ? "w-10 h-10 object-cover rounded-full"
                      : "hidden"
                  }
                  src={user?.photoURL}
                  alt=""
                />
                <div className="absolute bottom-[-35px] left-1/2 transform -translate-x-1/2 hidden p-2 group-hover:block text-black text-[9px] rounded-md">
                  {user?.displayName || "Unknown User"}
                </div>
              </div>
              <a onClick={handleLogOut} className="btn">
                Log out
              </a>
            </div>
          </>
        ) : (
          <Link to="/login" className="btn">
            Log in
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
