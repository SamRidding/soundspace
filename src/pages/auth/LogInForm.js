import React from "react";
import styles from "../../styles/LogInForm.module.css";

const LogInForm = () => {
  return (
    <div className={styles.center}>
      <form>
        <div className={styles.container}>
          <h1>LOG IN</h1>
          <input
            type="text"
            placeholder="Enter Username"
            name="username"
            required
          ></input>
          <input
            type="password"
            placeholder="Enter Password"
            name="password1"
            required
          ></input>
          <div>
            <button type="submit">Log In</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LogInForm;
