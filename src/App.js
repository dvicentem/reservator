import logo from "./logo.svg";
import "./App.css";

import { auth } from "./firebase/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function App() {
  async function handleLoginClick() {
    const googleProvider = new GoogleAuthProvider();
    await signInWithGoogle(googleProvider);
  }
  async function signInWithGoogle(googleProvider) {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <button id="btn-google-login" onClick={handleLoginClick}>
        Login con Google
      </button>
    </div>
  );
}

export default App;
