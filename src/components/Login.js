import React from "react";
import { FacebookOutlined, GoogleOutlined } from "@ant-design/icons";
import firebase from "firebase/app";
import "firebase/app";
import {auth} from "../firebase";

function Login() {
  return (
    <div id="login-page">
      <div id="login-card">
        <h2 className="login__banner">Welcome to DeChat</h2>

        <div className="login-button google"
        onClick={()=>auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}>
          <GoogleOutlined></GoogleOutlined>Sign In with Google
        </div>
      </div>
    </div>
  );
}

export default Login;
