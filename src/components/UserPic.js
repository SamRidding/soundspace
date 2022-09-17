import React from "react";
import styles from "../styles/UserPic.module.css";

const UserPic = ({ src, height = 45, text }) => {
  return (
    <span>
      <img
        className={styles.UserPic}
        src={src}
        height={height}
        width={height}
        alt="Profile Pic"
      />
      {text}
    </span>
  );
};

export default UserPic;