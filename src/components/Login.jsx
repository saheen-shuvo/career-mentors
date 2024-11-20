import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { FaGoogle } from "react-icons/fa6";

const Login = () => {

    const navigate = useNavigate();
    const {signInUser} = useContext(AuthContext);

    const handleLogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password);

        signInUser(email, password)
        .then(result => {
            console.log(result.user);
            e.target.reset();
            navigate('/')
        })
        .catch(error => {
            console.log("ERROR", error.message)
        })
    }

  return (
    <div className="hero py-8">
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
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div className="form-control">
              <button className="btn"><FaGoogle />Login with Google</button>
            </div>
          </form>
          <p className="text-xs text-center mb-7">Don't have an account? Please <Link className="underline" to="/register">register.</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
