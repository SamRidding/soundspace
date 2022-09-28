import React, { useState, useEffect, useRef } from "react";
import { useHistory, useParams } from "react-router-dom";

import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import {
  useCurrentUser,
  useSetCurrentUser,
} from "../../contexts/CurrentUserContexts";
import { axiosReq } from "../../api/axiosDefaults";
import styles from "../../styles/FormPage.module.css";

const EditProfile = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const { id } = useParams();
  const history = useHistory();
  const imageFile = useRef();

  const [profileData, setProfileData] = useState({
    display_name: "",
    bio: "",
    profile_img: "",
  });
  const { display_name, bio } = profileData;

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const handleMount = async () => {
      if (currentUser?.profile_id?.toString() === id) {
        try {
          const { data } = await axiosReq.get(`/profiles/${id}/`);
          const { display_name, bio, profile_img } = data;
          setProfileData({ display_name, bio, profile_img });
        } catch (err) {
          history.push("/");
        }
      } else {
        history.push("/");
      }
    };

    handleMount();
  }, [currentUser, history, id]);

  const handleChange = (event) => {
    setProfileData({
      ...profileData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("display_name", display_name);
    formData.append("bio", bio);

    if (imageFile?.current?.files[0]) {
      formData.append("profile_img", imageFile?.current?.files[0]);
    }

    try {
      const { data } = await axiosReq.put(`/profiles/${id}/`, formData);
      setCurrentUser((currentUser) => ({
        ...currentUser,
        profile_image: data.profile_img,
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
            placeholder="Enter new display name"
            onChange={handleChange}
            name="display_name"
            value={display_name}
          />
        </Form.Group>
        {errors?.display_name?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}

        <Form.Group>
          <Form.Label className={styles.FormLabel}>Bio</Form.Label>
          <Form.Control
            className={styles.FormInput}
            as="textarea"
            placeholder="Update your bio"
            value={bio}
            onChange={handleChange}
            name="bio"
            rows={5}
          />
        </Form.Group>
        {errors?.bio?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}

        <Form.Group>
          <Form.Label htmlFor="image-upload" className={styles.FormLabel}>
            Profile Image
          </Form.Label>
          <Form.File
            id="image-upload"
            ref={imageFile}
            accept="image/*"
            onChange={(e) => {
              if (e.target.files.length) {
                setProfileData({
                  ...profileData,
                  image: URL.createObjectURL(e.target.files[0]),
                });
              }
            }}
          />
        </Form.Group>
        {errors?.image?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
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

export default EditProfile;
