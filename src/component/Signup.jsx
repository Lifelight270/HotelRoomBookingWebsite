import React, { useState } from "react";
import axios from "axios";
import "./Component.css";
import { Link } from "react-router-dom";

const Signup = () => {
  const [signData, setSignData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onChangeData = (e) => {
    const { name, value } = e.target;
    setSignData({
      ...signData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (signData.password !== signData.confirmPassword) {
      console.error("Passwords do not match");
      alert("password donot match");
      return;
    }
    try {
      await axios.post("http://localhost:5000/api/signusers", signData);

      console.log("Data posted successfully");
      alert("successfully submitted");

      setSignData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error.message);
      alert("error");
    }
  };

  return (
    <div>
      <div className="sign-up">
        <div className="container">
          <div className="row">
            <div className="signup-box">
              <div className="signupForm">
                <h2 className="text-center">Sign Up</h2>
                <form className="signup-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={signData.username}
                      onChange={onChangeData}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={signData.email}
                      onChange={onChangeData}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={signData.password}
                      onChange={onChangeData}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={signData.confirmPassword}
                      onChange={onChangeData}
                      required
                    />
                  </div>
                  <button type="submit">Sign Up</button>
                  <hr />
                  <p>
                    Have an Account ? <Link to="/login">Log in</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
