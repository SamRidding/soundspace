import React, { useEffect, useState } from "react";

import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import styles from "../../styles/FormPage.module.css";
import { useHistory, useParams } from "react-router-dom";
import { useCurrentUser } from "../../contexts/CurrentUserContexts";
import { axiosRes } from "../../api/axiosDefaults";

const EditPassword = () => {
  const history = useHistory();
  const { id } = useParams();
  const currentUser = useCurrentUser();

  const [userData, setUserData] = useState({
    new_password1: "",
    new_password2: "",
  });
  const { new_password1, new_password2 } = userData;

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    if (currentUser?.profile_id?.toString() !== id) {
      history.push("/");
    }
  }, [currentUser, history, id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosRes.post("/dj-rest-auth/password/change/", userData);
      history.goBack();
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  return (
    <div className={styles.FormContain}>
      <Form className={styles.Form} onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label className={styles.FormLabel}>New Password</Form.Label>
          <Form.Control
            className={styles.FormInput}
            placeholder="New password"
            autocomplete="new-password"
            type="password"
            value={new_password1}
            onChange={handleChange}
            name="new_password1"
          />
        </Form.Group>
        {errors?.new_password1?.map((message, idx) => (
          <Alert key={idx} variant="warning">
            {message}
          </Alert>
        ))}

        <Form.Group>
          <Form.Label className={styles.FormLabel}>
            Confirm New Password
          </Form.Label>
          <Form.Control
            className={styles.FormInput}
            placeholder="Confirm new password"
            autocomplete="new-password"
            type="password"
            value={new_password2}
            onChange={handleChange}
            name="new_password2"
          />
        </Form.Group>
        {errors?.new_password2?.map((message, idx) => (
          <Alert key={idx} variant="warning">
            {message}
          </Alert>
        ))}

        <Button type="submit" className={styles.FormBtn}>
          Save
        </Button>
      </Form>
    </div>
  );
};

export default EditPassword;
