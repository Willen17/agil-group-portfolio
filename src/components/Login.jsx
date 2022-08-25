import React, { useState } from "react";
import "../CSS/Login.css";
import login from "../assets/login.png";

const Login = ({ isShowLogin }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [signUp, setSignUp] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleSignup = () => {
    setSignUp(true);
  };
  return (
    <>
      {!setSignUp ? (
        <div className={`${!isShowLogin ? "active" : ""} show`}>
          <div className="login-form">
            <div className="form-box">
              <form>
                <div className="logo-text">
                  <img src={login} alt="loginicon" style={{ width: "50px" }} />
                  <h3>Sign up</h3>
                </div>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
                <div className="align-right">
                  <p style={{ cursor: "pointer" }} onClick={handleLogin}>
                    You already have an account? Sign in
                  </p>
                  <button
                    onClick={handleSignup}
                    className="login-btn"
                    type="submit"
                  >
                    SIGN UP
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className={`${!isShowLogin ? "active" : ""} show`}>
          <div className="login-form">
            <div className="form-box">
              <form>
                <div className="logo-text">
                  <img src={login} alt="loginicon" style={{ width: "50px" }} />
                  <h3>Log In</h3>
                </div>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
                <div className="align-right">
                  <p style={{ cursor: "pointer" }} onClick={handleSignup}>
                    Create account
                  </p>
                  <button
                    onClick={handleLogin}
                    className="login-btn"
                    type="submit"
                  >
                    LOGIN
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
