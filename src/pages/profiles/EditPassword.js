import React from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import styles from "../../styles/FormPage.module.css"
import { useHistory, useParams } from "react-router-dom";
import { useCurrentUser } from "../../contexts/CurrentUserContexts";

const EditPassword = () => {
  const history = useHistory();
  const {id} = useParams();
  const currentUser = useCurrentUser();

  

  return (
    <div className={styles.FormContain}>
      <Form className={styles.Form}>
        <Form.Group>
          <Form.Label className={styles.FormLabel}>New Password</Form.Label>
          <Form.Control
            className={styles.FormInput}
            type="text"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label className={styles.FormLabel}>Confirm New Password</Form.Label>
          <Form.Control
            className={styles.FormInput}
            type="text"
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
