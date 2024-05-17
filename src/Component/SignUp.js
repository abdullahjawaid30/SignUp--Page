import React from "react";
import "./SignUp.css"; 
import backgroundImage from "../images/Autumn-amico 1.png"; 

const SignUp = () => {
  return (
    <div className="signup-container">
      <div className="signup-content">
        <div className="signup-image">
          <img src={backgroundImage} alt="Scenic background" />
        </div>
        <div className="signup-form">
          <h1 className="form-title">Create Account</h1>
          <form>
            <div className="input-group">
              <input type="text" placeholder="Enter Full Name" required />
            </div>
            <div className="input-group">
              <input type="email" placeholder="Enter Your Email" required />
            </div>
            <div className="input-group">
              <input
                type="password"
                placeholder="Enter Your Password"
                required
              />
            </div>
            <button type="submit" className="signup-button">
              Sign-Up
            </button>
            <div className="separator">- OR -</div>
            <div className="social-login">
              <button className="google-btn">G</button>
              <button className="facebook-btn">F</button>
              <button className="twitter-btn">T</button>
            </div>
            <p className="login-link">
              Already have an account? <a href="/login">Login</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
