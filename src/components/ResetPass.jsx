import React, { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase.init";
import { Bounce, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet";

const ResetPass = () => {

  const emailRef = useRef();

  const navigate = useNavigate();
  const { signInUser } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        // console.log(result.user);
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        console.log("ERROR", error.message);
      });
  };

  const handleForgetPassword = () => {
    // console.log(emailRef.current.value, "get me email address");
    const email = emailRef.current.value;
    if (!email) {
      console.log("Please Provide a valid Email Address");
    } else {
      sendPasswordResetEmail(auth, email).then(() => {
        toast.success("Password Reset Email sent. Please check gmail.", {
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
      });
    }
  };


  return (
    <div className="hero py-8">
          <Helmet>
    <title>Career Mentor's | Reset Password</title>
    </Helmet>
      <div className="hero-content">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                ref={emailRef}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-5">
              <a href="https://mail.google.com/mail/u/0/#inbox"><button  onClick={handleForgetPassword} className="btn btn-primary">Reset Password</button></a>
            </div>
          </form>
          <p className="text-xs text-center mb-7">
            Want to create another account?<br></br>
            <Link className="underline" to="/register">
              click here.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetPass;
