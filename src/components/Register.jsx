import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { FaGoogle } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { updateProfile } from "firebase/auth";
import { Bounce, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet";

const Register = () => {
  const [showPass, setShowPass] = useState(false);

  const navigate = useNavigate();
  const { createUser, signInWithGoogle, setLoading } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;

    // console.log(name, photo, email, password, terms);

    if(!terms){
      toast.warn("Please accept our terms and condition.", {
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
      return;
    }

    if (password.length < 6) {
      toast.warn("Password should be at least 6 characters or longer.", {
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
      return;
    }

    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>\/?`~])[A-Za-z\d!@#$%^&*()_+[\]{};':"\\|,.<>\/?`~]{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.warn("Password must contain at least one upper case, one lower case, and one special character", {
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
      return;
    }

    createUser(email, password)
      .then((result) => {

        // console.log(result.user);
        toast.success("Account Created Successfully", {
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

        const profile = {
          displayName: name,
          photoURL: photo,
        };
        return updateProfile(result.user, profile);
      })
        .then(() => {
          setLoading(true);
          e.target.reset();
          navigate("/");
        })
        .catch((error) => {
          console.log("Error:", error.message);
        })
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
    <title>Career Mentor's | Register</title>
    </Helmet>
      <div className="hero-content">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
                required
              />

              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />

              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="photo url"
                name="photo"
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
                className="btn btn-xs absolute bottom-[12px] right-2"
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
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
              <input type="checkbox" name="terms" className="checkbox" />
                <span className="label-text ml-1">
                  Accept our terms and condition
                </span>
              </label>
            </div>
            <div className="form-control">
              <button className="btn btn-primary">Register</button>
            </div>
            <div className="form-control">
              <button onClick={handleGoogleSignIn} className="btn">
                <FaGoogle />
                Register with Google
              </button>
            </div>
          </form>
          <p className="text-xs text-center mb-7">
            Already have an account? Please{" "}
            <Link className="underline" to="/login">
              log in.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
