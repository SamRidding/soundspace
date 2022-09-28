import axios from "axios";
import React, { useState } from "react";
import styles from "../../styles/FormPage.module.css";

import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { useHistory } from "react-router-dom";
import { useSetCurrentUser } from "../../contexts/CurrentUserContexts";
import { setTokenTimestamp } from "../../utils/utils";

const LogInForm = () => {
  const setCurrentUser = useSetCurrentUser();

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
      const { data } = await axios.post("/dj-rest-auth/login/", logInData);
      setCurrentUser(data.user);
      setTokenTimestamp(data);
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
    <div className={styles.FormContain}>
      <Form onSubmit={handleSubmit} className={styles.Form}>
        <h1>LOG IN</h1>
        <Form.Group>
          <Form.Label className={styles.container}>Display name</Form.Label>
          <Form.Control
            className={styles.FormInput}
            type="text"
            placeholder="Enter Username"
            name="username"
            value={username}
            onChange={handleChange}
            required
          />
        </Form.Group>
        {errors?.username?.map((message, idx) => (
          <Alert key={idx} variant="warning">
            {message}
          </Alert>
        ))}
        <Form.Group>
          <Form.Label className={styles.container}>Display name</Form.Label>
          <Form.Control
            className={styles.FormInput}
            type="password"
            placeholder="Enter Password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
        </Form.Group>
        {errors?.password?.map((message, idx) => (
          <Alert key={idx} variant="warning">
            {message}
          </Alert>
        ))}
        <Button type="submit" className={styles.FormBtn}>
          Log in
        </Button>
        {errors.non_field_errors?.map((message, idx) => (
          <Alert key={idx} variant="warning">
            {message}
          </Alert>
        ))}
      </Form>
    </div>
  );
};

export default LogInForm;
