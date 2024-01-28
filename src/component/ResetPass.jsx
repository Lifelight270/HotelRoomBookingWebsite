import React,{useState} from 'react';
import axios from 'axios';

const ResetPass = ({ userId, token }) => {
    const [passwords, setPasswords] = useState({
      password: "",
      confirmPassword: "",
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setPasswords({
        ...passwords,
        [name]: value,
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (passwords.password !== passwords.confirmPassword) {
        alert("Passwords do not match");
        return;
      }
  
      try {
        // Send a request to the server to update the password
        await axios.post(`http://localhost:5000/reset-password/${forgetUser._id}/${resetToken}`, {
          password: passwords.password,
        });
  
        // Provide feedback to the user (you may want to display a modal or redirect to a login page)
        alert("Password reset successfully");
  
        // Reset the state and navigate the user to the login page or do any other necessary action
        setPasswords({
          password: "",
          confirmPassword: "",
        });
  
        // Redirect to the login page or another appropriate route
        // history.push("/login"); // Assuming you're using react-router or similar
  
      } catch (error) {
        console.error("Error during password reset:", error.message);
        alert("Error occurred while resetting the password");
      }
    };
  
    return (
      <div>
        <h2>Reset Password</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="password">New Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={passwords.password}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={passwords.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Reset Password</button>
        </form>
      </div>
    );
  };
  
  export default ResetPass;
  