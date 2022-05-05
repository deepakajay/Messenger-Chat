import React from "react";
import { FacebookOutlined, GoogleOutlined } from "@ant-design/icons";

function Login() {
  return (
    <div id="login-page">
      <div id="login-card">
        <h2>Welcome to DeChat!</h2>

        <div className="login-button google">
          <GoogleOutlined></GoogleOutlined>Sign In ith Google
        </div>
        <br></br>
        <br></br>
        <div className="login-button facebook">
          <FacebookOutlined></FacebookOutlined>
          Sign In with Facebook
        </div>
      </div>
    </div>
  );
}

export default Login;
