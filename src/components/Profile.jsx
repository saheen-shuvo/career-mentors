import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { Helmet } from "react-helmet";


const Profile = () => {
  const emailRef = useRef();

  const navigate = useNavigate();
  const { signInUser, user } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        console.log("ERROR", error.message);
      });
  };

  return (
    <div className="hero py-8">
          <Helmet>
    <title>Career Mentor's | Profile</title>
    </Helmet>
      <div className="hero-content">
        <div className="card bg-base-100 w-full shrink-0 shadow-2xl p-10">
            <h1 className="text-center font-semibold text-2xl py-2">Personal Information</h1>
            <p>Name: {user?.displayName}</p>
            <p>Email: {user?.email}</p>
            <p>Photo URL: {user?.photoURL}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
