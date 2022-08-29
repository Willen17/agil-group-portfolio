import React, { useEffect, useState } from "react";
import "../CSS/Login.css";
import login from "../assets/login.png";

const Login = ({ isShowLogin }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [toggleSignup, setToggleSignup] = useState(false);
  const [userDetails, setuserDetails] = useState([]);

  useEffect(() => {
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
  }, [userDetails]);

  useEffect(() => {
    const userDetails = JSON.parse(localStorage.getItem("userDetails"));
    if (userDetails) {
      setuserDetails(userDetails);
    }
  }, [isLoggedIn]);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleSignup = () => {
    setSignUp(true);
  };

  const handleToggleSignin = () => {
    console.log("clicked sign in");
    setToggleSignup(false);
  };

  const handleToggleSignup = () => {
    console.log("clicked sign up");
    setToggleSignup(true);
  };

  // const handleSignOut = () => {
  //   localStorage.removeItem("userDetails");
  // };

  return (
    <>
      {!toggleSignup ? (
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
                  id="username"
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
                  <p style={{ cursor: "pointer" }} onClick={handleToggleSignup}>
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
      ) : (
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
                  <p style={{ cursor: "pointer" }} onClick={handleToggleSignin}>
                    Already have an account? Sign in
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
      )}
      {/* {!isLoggedIn ? (
        <div className="login-form">
          <div className="form-box">
            <form>
              <div className="logo-text">
                <h3 style={{ fontFamily: "Plajmfont" }}>Plajm</h3>
              </div>
              <h3>Welcome back!</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Delectus iusto non quae impedit nemo obcaecati voluptatum
                dolorem, et quam maiores a incidunt dolores vel ullam omnis cum
                enim at. Quae.
              </p>
              <div className="align-right">
                <p style={{ cursor: "pointer" }}>
                  Looking for a job? Click here!
                </p>
                <button
                  style={{ width: "10rem" }}
                  onClick={handleSignOut}
                  className="login-btn"
                  type="submit"
                >
                  SIGN OUT
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null} */}
    </>
  );
};

export default Login;
