import React, { useState } from "react";
import styles from "../../styles/LogInForm.module.css";

const LogInForm = () => {
  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = signInData;

  return (
    <div className={styles.center}>
      <form>
        <div className={styles.container}>
          <h1>LOG IN</h1>
          <input
            type="text"
            placeholder="Enter Username"
            name="username"
            value={username}
            required
          ></input>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={password}
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
