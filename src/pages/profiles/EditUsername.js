import React, { useEffect, useState } from "react";

import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { axiosRes } from "../../api/axiosDefaults";
import { useHistory, useParams } from "react-router-dom";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../../contexts/CurrentUserContexts";

import styles from "../../styles/FormPage.module.css"

const EditUsername = () => {
  const [username, setUsername] = useState("");
  const [errors, setErrors] = useState({});
  const history = useHistory();
  const { id } = useParams();
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  useEffect(() => {
    if (currentUser?.profile_id?.toString() === id) {
      setUsername(currentUser.username);
    } else {
      history.push("/");
    }
  }, [currentUser, history, id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosRes.put("/dj-rest-auth/user/", {
        username,
      });
      setCurrentUser((prevUser) => ({
        ...prevUser,
        username,
      }));
      history.goBack();
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  return (
    <div className={styles.FormContain}>
      <Form onSubmit={handleSubmit} className={styles.Form}>
        <Form.Group>
          <Form.Label className={styles.FormLabel}>Display name</Form.Label>
          <Form.Control
            className={styles.FormInput}
            type="text"
            placeholder="Enter new username"
            onChange={(event) => setUsername(event.target.value)}
            name="username"
            value={username}
          />
        </Form.Group>
        {errors?.username?.map((message, idx) => (
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

export default EditUsername;
