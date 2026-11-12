import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../services/authService";

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await login(username, password);

      const token = res.data.token;

      localStorage.setItem("token", token);
      localStorage.setItem("username", username);

      navigate("/home");

    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div className="page">
      <form className="card" onSubmit={handleSubmit}>
        <h2>Sign in</h2>
        <p className="subtitle">Welcome back. Enter your details.</p>

        <label>Username</label>
        <input
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Sign In</button>

        <p className="footer-link">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
 