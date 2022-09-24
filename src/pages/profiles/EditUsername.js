import React from 'react'

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const EditUsername = () => {
  return (
    <div className={styles.FormContain}>
      <Form onSubmit={handleSubmit} className={styles.Form}>
        <Form.Group>
          <Form.Label className={styles.FormLabel}>Display name</Form.Label>
          <Form.Control
            className={styles.FormInput}
            type="text"
            placeholder="Enter new username"
            onChange={handleChange}
            name="username"
            value={username}
          />
        </Form.Group>

        <Button type="submit" className={styles.FormBtn}>Save</Button>
      </Form>
    </div>
  )
}

export default EditUsername