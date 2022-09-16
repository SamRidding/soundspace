import axios from "axios";
import React, { useState } from "react";
import styles from "../../styles/LogInForm.module.css";

import { useHistory } from "react-router-dom";

const LogInForm = () => {
  const [logInData, setLogInData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = logInData;

  const [errors, setErrors] = useState({});

  const history = useHistory();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/dj-rest-auth/login/", logInData);
      history.push("/");
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  const handleChange = (event) => {
    setLogInData({
      ...logInData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className={styles.center}>
      <form onSubmit={handleSubmit}>
        <div className={styles.container}>
          <h1>LOG IN</h1>
          <input
            type="text"
            placeholder="Enter Username"
            name="username"
            value={username}
            onChange={handleChange}
            required
          ></input>
          {errors.username?.map((message, idx) => (
            <div key={idx}>{message}</div>
          ))}
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          ></input>
          {errors.password?.map((message, idx) => (
            <div key={idx}>{message}</div>
          ))}
          <div>
            <button type="submit">Log In</button>
          </div>
          {errors.non_field_errors?.map((message, idx) => (
            <div key={idx}>{message}</div>
          ))}
        </div>
      </form>
    </div>
  );
};

export default LogInForm;
