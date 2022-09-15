import React, { useState } from "react";
import styles from "../../styles/SignUpForm.module.css"

const SignUpForm = () => {
  const [signUpData, setSignUpData] = useState({
    username: "",
    password1: "",
    password2: "",
  });
  const { username, password1, password2 } = signUpData;

  return (
    <div className={styles.center}>
      <form>
        <div className={styles.container}>
          <h1>SIGN UP</h1>
          <input
            type="text"
            placeholder="Enter Username"
            name="username"
            value={username}
            required
          ></input>
          <input
            type="text"
            placeholder="Enter Password"
            name="password1"
            value={password1}
            required
          ></input>
          <input
            type="text"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            required
          ></input>
          <div>
            <button type="submit">
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
