import React from "react";

const Login = (props) => {
  return (
    <div className="login-container">
      <h1 className="welcome-message">
        Welcome to the Decentralized Voting Application
      </h1>
      <p className="description">
        Empower your vote securely and transparently with blockchain technology.
      </p>
      <button className="login-button" onClick={props.connectWallet}>
        Connect with MetaMask
      </button>
    </div>
  );
};

export default Login;
