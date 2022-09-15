import React from "react";
import styles from "../../styles/SignUpForm.module.css"

const SignUpForm = () => {
  return (
    <div className={styles.center}>
      <form>
        <div className={styles.container}>
          <h1>SIGN UP</h1>
          <input
            type="text"
            placeholder="Enter Username"
            name="username"
            required
          ></input>
          <input
            type="text"
            placeholder="Enter Password"
            name="password1"
            required
          ></input>
          <input
            type="text"
            placeholder="Confirm Password"
            name="password2"
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
