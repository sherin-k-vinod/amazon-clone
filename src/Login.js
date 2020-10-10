import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const hostory = useHistory();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const login = (event) => {
    event.preventDefault();
    //login
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //login redirect to home
        hostory.push("/");
      })
      .catch((event) => alert(event.message));
  };
  const register = (event) => {
    event.preventDefault();
    //login
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // register user and redirect to home
        hostory.push("/");
      })
      .catch((event) => alert(event.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://www.marketplace.org/wp-content/uploads/2019/07/ama2.png"
          alt=""
          className="login__logo"
        />
      </Link>
      <div className="login__form">
        <h1>Sign in</h1>
        <form>
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={(event) => setemail(event.target.input)}
          />
          <h5>password</h5>
          <input
            type="password"
            value={password}
            onChange={(event) => setpassword(event.target.input)}
          />
          <button type="submit" onClick={login} className="login__signInButton">
            sign in
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button onClick={register} className="login__registerButton">
          create your amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
