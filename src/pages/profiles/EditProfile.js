import React, { useState, useEffect, useRef } from "react";
import { useHistory, useParams } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import {
  useCurrentUser,
  useSetCurrentUser,
} from "../../contexts/CurrentUserContexts";
import { axiosReq } from "../../api/axiosDefaults";

const EditProfile = () => {
  const currentUser = useSetCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const { id } = useParams();
  const history = useHistory();
  const imageFile = useRef();

  const [profileData, setProfileData] = useState({
    display_name: "",
    bio: "",
    profile_img: "",
  });
  const { display_name, bio, profile_img } = profileData;

  // useEffect(() => {
  //   const handleMount = async () => {
  //     if (currentUser?.profile_id?.toString() === id) {
  //       try {
  //         const { data } = await axiosReq.get(`/profiles/${id}/`);
  //         const { display_name, bio, profile_img } = data;
  //         setProfileData({ display_name, bio, profile_img });
  //       } catch (err) {
  //         console.log(err);
  //         history.push("/");
  //       }
  //     } else {
  //       history.push("/");
  //     }
  //   };

  //   handleMount();
  // }, [currentUser, history, id]);

  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Label>Display name</Form.Label>
          <Form.Control type="text" placeholder="Enter new display name" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Bio</Form.Label>
          <Form.Control as="textarea" placeholder="Update your bio" rows={5} />
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="image-upload">Profile Image</Form.Label>
          <Form.File id="image-upload" ref={imageFile} accept="image/*" />
        </Form.Group>

        <Button type="submit">Save</Button>
      </Form>
    </div>
  );
};

export default EditProfile;
