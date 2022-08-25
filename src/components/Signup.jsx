import React, { useState } from "react";
import login from "../assets/login.png";

const Signup = ({ isShowLogin }) => {
  const [formSubmited, setFormSubmited] = useState(false);
  if (!open) return null;

  const submitForm = () => {
    setFormSubmited(true);
  };

  return (
    <div className={`${!isShowLogin ? "active" : ""} show`}>
      <div className="login-form">
        <div className="form-box">
          <form>
            <div className="logo-text">
              <img src={login} alt="loginicon" style={{ width: "50px" }} />
              <h3>Signup</h3>
            </div>
            <input type="text" name="username" placeholder="Username" />
            <input type="password" name="password" placeholder="Password" />
            <input type="password" name="password" placeholder="Password" />
            <div className="align-right">
              <p>You already have an account? Sign in</p>
              <button className="login-btn" type="submit">
                SIGN UP
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
