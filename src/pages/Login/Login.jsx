import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import "./Login.css";

const Login = () => {
  const { users } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userFound = Object.values(users).some((user) => user.email === email && user.password === password);

    if (userFound) {
      navigate("/home");
    } else {
      setError("Invalid credentials");
    }
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  return (
    <div className="container">
      <div className="logo-section">
        <img src="https://static.vecteezy.com/system/resources/previews/000/174/133/non_2x/job-search-in-newspaper-vector.jpg" alt="Job Search" />
      </div>
      <div className="login-section">
        <div className="login-form">
          <h2>Login</h2>
          {error && <div className="error-alert">{error}</div>}
          <form onSubmit={handleSubmit} className="form">
            <div className="input-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>

            <button type="submit" className="login-button">
              Login
            </button>
            <p className="p-tag">
              New User?<span> </span>
              <a href="/signup" className="signup-link" onClick={handleSignUp}>
                Create Account
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
