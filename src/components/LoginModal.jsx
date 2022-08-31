import { CloseSharp } from "@mui/icons-material";
import {
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
} from "@mui/material";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import swal from "sweetalert";
import login from "../assets/login.png";

import henrik from "../assets/henke.jpg";
import profileblob from "../assets/profileblob.svg";
import "../CSS/Login.css";

export const LoginModal = ({ isOpen, handleClose }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("user"))
      ? JSON.parse(localStorage.getItem("user")).isLoggedIn
      : false
  );
  const [toggleSignup, setToggleSignup] = useState(false);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, [isLoggedIn]);

  useEffect(() => {
    if (user) {
      console.log(user);
    } else return;
  }, [user]);

  const handleLogin = (e) => {
    e.preventDefault();

    let currentUsername = e.target.username.value;
    let currentPassword = e.target.password.value;

    let currentUser = JSON.parse(localStorage.getItem("user"));

    if (
      currentUser &&
      currentUser.username === currentUsername &&
      currentUser.password === currentPassword
    ) {
      handleClose();
      swal("You are logged in!", `Good job ${currentUsername}!`, "success");

      let signedUpUser = {
        username: currentUsername,
        password: currentPassword,
        isLoggedIn: true,
      };

      localStorage.setItem("user", JSON.stringify(signedUpUser));

      setIsLoggedIn(true);
    } else {
      swal({
        icon: "error",
        title: "Oops...",
        text: "Wrong username or password!",
      });
      e.target.password.value = "";
      e.target.username.value = "";
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();

    console.log(e.target.username.value, e.target.password.value);

    let signedUpUser = {
      username: e.target.username.value,
      password: e.target.password.value,
      isLoggedIn: false,
    };

    localStorage.setItem("user", JSON.stringify(signedUpUser));

    setToggleSignup(false);
  };

  const handleSignOut = () => {
    handleClose();
    let signedUpUser = {
      username: user.username,
      password: user.password,
      isLoggedIn: false,
    };

    localStorage.setItem("user", JSON.stringify(signedUpUser));
    setIsLoggedIn(false);

    console.log("clicked sign out ");

    swal("You are now logged out!", "", "success");
  };

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="max-width-dialog-title"
      fullWidth
    >
      <DialogActions>
        <IconButton color="error" component="label" onClick={handleClose}>
          <CloseSharp />
        </IconButton>
      </DialogActions>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          padding: " 0 2rem",
        }}
      >
        {user && user.isLoggedIn === true ? (
          <p
            style={{
              fontFamily: "Fredoka",
              fontSize: "2.5rem",
              margin: "0rem 0rem 1rem 0rem",
            }}
          >
            Hello {user.username}
          </p>
        ) : (
          <>
            {" "}
            <img src={login} alt="loginicon" style={{ width: "50px" }} />
            <p style={{ fontFamily: "Fredoka", fontSize: "2.5rem" }}>
              {toggleSignup ? "Sign Up" : "Log In"}
            </p>
          </>
        )}
      </div>
      <DialogContent>
        <div>
          {user && user.isLoggedIn ? (
            <div>
              <div
                style={{
                  height: "8rem",

                  display: "flex",
                  alignItems: "center",

                  flexDirection: "row",
                }}
              >
                <div
                  style={{
                    height: "10rem",
                    background: `url(${profileblob})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    width: "10rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={henrik}
                    style={{
                      height: "60%",
                      borderRadius: "100%",
                    }}
                    alt="profilepicture"
                  ></img>
                </div>
              </div>
              <p style={{ cursor: "pointer", margin: "1rem 0" }}>
                Handle your account
              </p>
              <button className="logout-btn" onClick={handleSignOut}>
                SIGN OUT
              </button>
            </div>
          ) : (
            <div className="form">
              {toggleSignup ? (
                <form onSubmit={handleSignup}>
                  {/* this is sign up */}

                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                    autoComplete="false"
                    required
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    autoComplete="false"
                    required
                  />
                  <div className="align-right">
                    <p
                      style={{ cursor: "pointer", fontSize: "1rem" }}
                      onClick={(e) => setToggleSignup(false)}
                      className="toggleSign"
                    >
                      Already a member? Sign in
                    </p>
                    <button className="login-btn" type="submit">
                      SIGN UP
                    </button>
                  </div>
                </form>
              ) : (
                <form onSubmit={handleLogin}>
                  {/* this is login */}

                  <input
                    type="text"
                    name="username"
                    id="username"
                    required
                    placeholder="Username"
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    autoComplete="true"
                    required
                  />
                  <div className="align-right">
                    <p
                      style={{ cursor: "pointer", fontSize: "1rem" }}
                      className="toggleSign"
                      onClick={(e) => setToggleSignup(true)}
                    >
                      Create account
                    </p>
                    <button className="login-btn" type="submit">
                      LOGIN
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

LoginModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};
