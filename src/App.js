import React, { useState } from "react";
import './App.css';
import Github from "./images/github.png";
import X from "./images/x.png";
import Linkedin from "./images/linkedin.png";
import Discord from "./images/discord.png";
import Dashboard from "./components/Dashboard";
import Upload from "./components/Upload";


const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // dummy authentication logic 
    if (username === "admin" && password === "password") {
      setLoggedIn(true);
    } else {
      alert("Invalid username or password");
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  if (loggedIn) {
    return (
      <div className="app">
        <Dashboard onLogout={handleLogout} />
        <Upload onLogout={handleLogout} />
      </div>
    );
  }

  return (
    <div className="app">
      <div className="company-info">
        <div className="circle">
          <span className="circles">
            <p className="line"></p>
          </span>
        </div>
        <h1 className="company-name">BASE</h1>
        <div className="social-links">
          <a href="github.com" className="social-link">
            <img src={Github} className="social-img" alt="Github"></img>
          </a>
          <a href="github.com" className="social-link">
            <img src={X} className="social-img" alt="X"></img>
          </a>
          <a href="github.com" className="social-link">
            <img src={Linkedin} className="social-img" alt="Linkedin"></img>
          </a>
          <a href="github.com" className="social-link">
            <img src={Discord} className="social-img" alt="Discord"></img>
          </a>
        </div>
      </div>
      <div className="login-form">
        <div className="other-sign-in-options">
          <p className="sign-text">Sign in</p>
          <p className="acc">Sign in to your account</p>
          <div className="signin-opt">
            <button className="google-button">Sign in with Google</button>
            <button className="apple-button">Sign in with Apple</button>
          </div>
        </div>
        <form onSubmit={handleLogin}>
          <label htmlFor="username">Email address</label>
          <input type="text" id="username" name="username" placeholder="Email" required onChange={(e) => setUsername(e.target.value)} />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
          <div className="forgot-password">
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit" className="submit">Sign in</button>
        </form>
        <div className="new-register">
          <p>Don't have an account? <a href="#">Register here</a></p>
        </div>
      </div>
    </div>
  );
};

export default App;
