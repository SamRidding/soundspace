import React from "react";
import styles from "../../styles/Profile.module.css";

const Profile = (props) => {
  const { profile, mobile, imageSize = 55 } = props;
  const { id, following_id, image, owner } = profile;

  return <div>Profile</div>;
};

export default Profile;
