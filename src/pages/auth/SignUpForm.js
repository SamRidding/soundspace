import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "../../styles/FormPage.module.css";

import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const SignUpForm = () => {
  const [signUpData, setSignUpData] = useState({
    username: "",
    password1: "",
    password2: "",
  });

  const { username, password1, password2 } = signUpData;

  const history = useHistory();

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/dj-rest-auth/registration/", signUpData);
      history.push("/signin");
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  return (
    <div className={styles.FormContain}>
      <Form onSubmit={handleSubmit} className={styles.Form}>
        <h1>SIGN UP</h1>
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
          <Form.Label className={styles.container}>Password</Form.Label>
          <Form.Control
            className={styles.FormInput}
            type="password"
            placeholder="Enter Password"
            name="password1"
            value={password1}
            onChange={handleChange}
            required
          />
        </Form.Group>
        {errors?.password1?.map((message, idx) => (
          <Alert key={idx} variant="warning">
            {message}
          </Alert>
        ))}
        <Form.Group>
          <Form.Label className={styles.container}>Password</Form.Label>
          <Form.Control
            className={styles.FormInput}
            type="password"
            placeholder="Re-enter Password"
            name="password2"
            value={password2}
            onChange={handleChange}
            required
          />
        </Form.Group>
        {errors?.password2?.map((message, idx) => (
          <Alert key={idx} variant="warning">
            {message}
          </Alert>
        ))}
        <Button type="submit" className={styles.FormBtn}>
          Sign Up
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

export default SignUpForm;
