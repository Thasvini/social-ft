import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Auth.css";
import Logo from "../../img/logo.png";

const Auth = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();

  const toggleForm = () => {
    setShowLogin((prevShowLogin) => !prevShowLogin);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/auth/register", {
        username,
        password,
        firstname: firstName, 
        lastname: lastName
      });
      console.log("Registration successful:", response.data);
      
      navigate("/home");
    } catch (error) {
      console.error("Registration failed:", error);
      
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/auth/login", {
        username,
        password
      });
      console.log("Login successful:", response.data);
      
      navigate("/home");
    } catch (error) {
      console.error("Login failed:", error);
      
    }
  };

  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>Connect!</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>
      {showLogin ? (
        <LogIn
          toggleForm={toggleForm}
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
        />
      ) : (
        <SignUp
          toggleForm={toggleForm}
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          firstName={firstName}
          setFirstName={setFirstName}
          lastName={lastName}
          setLastName={setLastName}
          handleSignUp={handleSignUp}
        />
      )}
    </div>
  );
};

function LogIn({ toggleForm, username, setUsername, password, setPassword, handleLogin }) {
  return (
    <div className="a-right">
      <form className="infoForm authForm" onSubmit={handleLogin}>
        <h3>Log In</h3>
        <div>
          <input
            type="text"
            placeholder="Username"
            className="infoInput"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username" 
          />
        </div>
        <div>
          <input
            type="password"
            className="infoInput"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password" 
          />
        </div>
        <div>
          <span style={{ fontSize: "12px" }}>
            Don't have an account <button className="button" onClick={toggleForm}>Sign up</button>
          </span>
          <button className="button infoButton" type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

function SignUp({ toggleForm, username, setUsername, password, setPassword, firstName, setFirstName, lastName, setLastName, handleSignUp }) {
  return (
    <div className="a-right">
      <form className="infoForm authForm" onSubmit={handleSignUp}>
        <h3>Sign up</h3>
        <div>
          <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            autoComplete="given-name" 
          />
          <input
            type="text"
            placeholder="Last Name"
            className="infoInput"
            name="lastname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            autoComplete="family-name" 
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            name="username"
            placeholder="Usernames"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username" 
          />
        </div>
        <div>
          <input
            type="password"
            className="infoInput"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password" 
          />
        </div>
        <div>
          <span style={{ fontSize: "12px" }}>
            Already have an account <button className="button" onClick={toggleForm}>Login</button>
          </span>
          <button className="button infoButton" type="submit">Signup</button>
        </div>
      </form>
    </div>
  );
}


export default Auth;