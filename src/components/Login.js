import React, { useState, Fragment } from "react";
import { auth } from "../firebase/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Login = ({ gToken, setGToken }) => {
  async function handleLoginClick() {
    const googleProvider = new GoogleAuthProvider();
    googleProvider.addScope("https://www.googleapis.com/auth/calendar.events");
    // Referencia https://developers.google.com/identity/protocols/oauth2/scopes?hl=es-419
    await signInWithGoogle(googleProvider);
  }
  async function signInWithGoogle(googleProvider) {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      setGToken(token);
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
