import React from "react";
import "./LoginForm.css";
import { FaUserAstronaut } from "react-icons/fa6";
import { GiKeyLock } from "react-icons/gi";


const LoginForm = () => {
  return (
    <div className="wrapper">
      <form action="">
        <h1>Account Login</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" required />
          <FaUserAstronaut className="icon" />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required />
          <GiKeyLock className="icon" />
        </div>

        <div className="remember-forgot">
          <label>
            <input type="checkbox" />
            Remember me this time.
          </label>
          <a href="#">Forgot password? ...Again?</a>
        </div>
        <button type="submit">Login</button>
        <div className="register-link">
          <p>
            Don't have an account? <a href="#">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
