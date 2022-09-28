import React from "react";
import { useProfileData } from "../../contexts/ProfileDataContext";
import Loading from "../../components/Loading";
import Profile from "./Profile";

import styles from "../../styles/ProfileSuggest.module.css";

const ProfileSuggest = () => {
  const { profileSuggest } = useProfileData();

  return (
    <div>
      {profileSuggest.results.length ? (
        <>
          <p className={styles.Suggest}>Users to follow</p>
          {profileSuggest.results.slice(0, 5).map((profile) => (
            <Profile key={profile.id} profile={profile} />
          ))}
        </>
      ) : (
        <div className={styles.Results}>
          <Loading />
        </div>
      )}
    </div>
  );
};

export default ProfileSuggest;
