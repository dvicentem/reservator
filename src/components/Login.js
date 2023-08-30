import React, { useState, Fragment } from "react";
import { auth } from "../firebase/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Login = () => {
  async function handleLoginClick() {
    const googleProvider = new GoogleAuthProvider();
    await signInWithGoogle(googleProvider);
  }
  async function signInWithGoogle(googleProvider) {
    try {
      const res = await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Fragment>
      <button id="btn-google-login" onClick={handleLoginClick}>
        Login con Google
      </button>
    </Fragment>
  );
};

export default Login;
