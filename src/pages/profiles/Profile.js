import React from "react";
import { Link } from "react-router-dom";
import UserPic from "../../components/UserPic";
import { useCurrentUser } from "../../contexts/CurrentUserContexts";
import { useSetProfileData } from "../../contexts/ProfileDataContext";
import styles from "../../styles/Profile.module.css";

const Profile = (props) => {
  const { profile, imageSize = 55 } = props;
  const { id, following_id, profile_img, owner } = profile;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const { handleFollow, handleUnfollow } = useSetProfileData();

  return (
    <div className={styles.Pcontain}>
      <div className={styles.Puser}>
        <Link to={`/profiles/${id}`}>
          <UserPic src={profile_img} height={imageSize} />
        </Link>
        <p>{owner}</p>
      </div>
      <div className={styles.Pfollow}>
        {currentUser &&
          !is_owner &&
          (following_id ? (
            <button className={styles.FollowBtn} onClick={() => handleUnfollow(profile)}>
              unfollow
            </button>
          ) : (
            <button className={styles.FollowBtn} onClick={() => handleFollow(profile)}>
              follow
            </button>
          ))}
      </div>
    </div>
  );
};

export default Profile;
