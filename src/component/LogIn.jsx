import React, { useState } from "react";
import axios from "axios";
import "./Component.css";
import { Link } from "react-router-dom";

const LogIn = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [forgotPasswordMode, setForgotPasswordMode] = useState(false);
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState("");
  // const [showSignup, setShowSignup] = useState(false);

  const handleForgotPasswordSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/forgot-password", {
        email: forgotPasswordEmail,
      });

      alert("Reset password instructions sent to your email");

      setForgotPasswordMode(false);
      setForgotPasswordEmail("");
    } catch (error) {
      console.error("Error during forgot password:", error.message);
      alert("Error occurred while processing forgot password");
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/login", credentials);

      console.log("Login successful");
      alert("Successfully logged in");
    } catch (error) {
      console.error("Error during login:", error.message);
      alert("Error occurred");
    }
  };
  return (
    <>
      <div className="login">
        <div className="container">
          <div className="row flex-box">
            <div className="col form-box">
              <div className="login-box">
                {forgotPasswordMode ? (
                  <form
                    className="forget-form"
                    onSubmit={handleForgotPasswordSubmit}
                  >
                    <h2 className="text-center">Forgot Password</h2>
                    <div className="forget-email">
                      <label htmlFor="forgotPasswordEmail">Email</label>
                      <input
                        type="email"
                        id="forgotPasswordEmail"
                        name="forgotPasswordEmail"
                        value={forgotPasswordEmail}
                        onChange={(e) => setForgotPasswordEmail(e.target.value)}
                        required
                      />
                    </div>
                    <button type="submit">Reset Password</button>
                  </form>
                ) : (
                  <form className="form-input" onSubmit={handleSubmit}>
                    <h2 className="text-center">Login</h2>
                    <div>
                      <label htmlFor="identifier">Email</label>
                      <input
                        type="email"
                        id="identifier"
                        name="email"
                        value={credentials.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        value={credentials.password}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <button type="submit" className="login-btn">
                      Login
                    </button>
                    <hr />
                    <p>
                      Create One?
                      <Link to="/signup">Click Here</Link>
                    </p>
                    <div>
                      <p>
                        <button
                          type="button"
                          className="login-btn"
                          onClick={() =>
                            setForgotPasswordMode((prevMode) => !prevMode)
                          }
                        >
                          {forgotPasswordMode
                            ? "Back to Login"
                            : "Forgot Password"}
                        </button>
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
