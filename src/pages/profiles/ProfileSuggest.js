import React from "react";
import { useProfileData } from "../../contexts/ProfileDataContext";
import Loading from "../../components/Loading";
import Profile from "./Profile";

const ProfileSuggest = () => {
  const { profileSuggest } = useProfileData();

  return (
    <div>
      {profileSuggest.results.length ? (
        <>
          <p>Users to follow</p>
          {profileSuggest.results.map((profile) => (
            <Profile key={profile.id} profile={profile} />
          ))}
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default ProfileSuggest;
