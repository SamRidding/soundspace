import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import styles from "../../styles/FormPage.module.css";
import { useHistory, useParams } from "react-router-dom";
import { useCurrentUser } from "../../contexts/CurrentUserContexts";
import { axiosRes } from "../../api/axiosDefaults";

const EditPassword = () => {
  const history = useHistory();
  const { id } = useParams();
  const currentUser = useCurrentUser();

  const [userData, setUserData] = useState({
    new_pw1: "",
    new_pw2: "",
  });
  const { new_pw1, new_pw2 } = userData;

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
      console.log(err);
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
            type="password"
            value={new_pw1}
            onChange={handleChange}
            name="new_pw1"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label className={styles.FormLabel}>
            Confirm New Password
          </Form.Label>
          <Form.Control
            className={styles.FormInput}
            placeholder="Confirm new password"
            type="password"
            value={new_pw2}
            onChange={handleChange}
            name="new_pw2"
          />
        </Form.Group>

        <Button type="submit" className={styles.FormBtn}>
          Save
        </Button>
      </Form>
    </div>
  );
};

export default EditPassword;
