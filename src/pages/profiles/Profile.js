import React from "react";
import { Link } from "react-router-dom";
import UserPic from "../../components/UserPic";
import { useCurrentUser } from "../../contexts/CurrentUserContexts";
import styles from "../../styles/Profile.module.css";

const Profile = (props) => {
  const { profile, mobile, imageSize = 55 } = props;
  const { id, following_id, image, owner } = profile;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  return (
    <div className={styles.Pcontain}>
      <div className={styles.Puser}>
        <Link to={`/profiles/${id}`}>
          <UserPic src={image} height={imageSize} />
        </Link>
        <p>{owner}</p>
      </div>
      <div className={styles.Pfollow}>
        {currentUser &&
          !is_owner &&
          (following_id ? (
            <button onClick={() => {}}>unfollow</button>
          ) : (
            <button onClick={() => {}}>follow</button>
          ))}
      </div>
    </div>
  );
};

export default Profile;
