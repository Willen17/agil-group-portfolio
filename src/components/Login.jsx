import React, { useEffect, useState } from "react";
import "../CSS/Login.css";
import login from "../assets/login.png";

const Login = ({ isOpen }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [toggleSignup, setToggleSignup] = useState(false);

  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [newUser, setNewUser] = useState(() => {
    const saved = localStorage.getItem("newUser");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem("newUser", JSON.stringify(newUser));
  }, [newUser]);

  if (!isOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(user + " signed in");
    setIsLoggedIn(true);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("signed up");
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

  const handleSignOut = () => {
    localStorage.removeItem("userDetails");
    console.log("signed out!");
    setIsLoggedIn(false);
  };

  const handleClose = (e) => {
    e.preventDefault();
    console.log("closed popup");
    setIsLoggedIn(true);
  };

  return (
    <>
      {!toggleSignup ? (
        <div className={`${!isOpen ? "active" : ""} show`}>
          <div className="login-form">
            <div className="form-box">
              <form onSubmit={handleLogin}>
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
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
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
                  <button className="login-btn" type="submit">
                    LOGIN
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className={`${!isOpen ? "active" : ""} show`}>
          <div className="login-form">
            <div className="form-box">
              <form onSubmit={handleSignup}>
                <div className="logo-text">
                  <img src={login} alt="loginicon" style={{ width: "50px" }} />
                  <h3>Sign up</h3>
                </div>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  required
                  onChange={(e) => setNewUser(e.target.value)}
                  value={newUser}
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
                  <button className="login-btn" type="submit">
                    SIGN UP
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      {isLoggedIn ? (
        <div className="login-form">
          <div className="form-box">
            <form>
              <div className="logo-text">
                <h3 style={{ fontFamily: "Plajmfont" }}>Plajm</h3>
                <button
                  style={{
                    backgroundColor: "transparent",
                    color: "black",
                  }}
                >
                  <h3 className="close" onClick={handleClose}>
                    X
                  </h3>
                </button>
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
      ) : null}
    </>
  );
};

export default Login;
