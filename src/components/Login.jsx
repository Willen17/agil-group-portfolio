import React from "react";
import "../CSS/Login.css";
import login from "../assets/login.png";

const Login = ({ isShowLogin }) => {
  return (
    <div className={`${!isShowLogin ? "active" : ""} show`}>
      <div className="login-form">
        <div className="form-box">
          <form>
            <div className="logo-text">
              <img src={login} alt="loginicon" style={{ width: "50px" }} />
              <h3>Login</h3>
            </div>
            <input type="text" name="username" placeholder="Username" />
            <input type="password" name="password" placeholder="Password" />
            <p>Create account</p>
            <button className="login-btn" type="submit">
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
