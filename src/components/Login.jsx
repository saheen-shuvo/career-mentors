import React, { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { FaGoogle } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Bounce, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet";


const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const emailRef = useRef();

  const handleEmailChange = (e) => {
    setInputEmail(e.target.value);
    setEmail(e.target.value);
  };

  const navigate = useNavigate();
  const { signInUser, signInWithGoogle } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        // console.log(result.user);
        e.target.reset();

        toast.success("Logged in Successfully", {
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

        navigate("/");
      })
      .catch((error) => {
        console.log("ERROR", error.message);
      });
  };

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    navigate("/resetPassword", { state: { email } });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        // console.log(result.user);

        toast.success("Logged in Successfully", {
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
        
        navigate("/");
      })
      .catch((error) => console.log("ERROR", error.message));
  };

  return (
    <div className="hero py-8">
          <Helmet>
    <title>Career Mentor's | Log in</title>
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
                onChange={handleEmailChange}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <button
                onClick={() => setShowPass(!showPass)}
                className="btn btn-xs absolute bottom-[45px] right-2"
              >
                {showPass ? <FaEyeSlash /> : <FaEye />}
              </button>
              <input
                type={showPass ? "text" : "password"}
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label onClick={handleForgetPassword} className="label">
                <Link
                  to="/resetPassword"
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-5">
              <button className="btn btn-primary">Login</button>
            </div>
            <div className="form-control">
              <button onClick={handleGoogleSignIn} className="btn">
                <FaGoogle />
                Login with Google
              </button>
            </div>
          </form>
          <p className="text-xs text-center mb-7">
            Don't have an account? Please{" "}
            <Link className="underline" to="/register">
              register.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
