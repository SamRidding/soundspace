import React, { useEffect, useState } from "react";
import { axiosReq } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContexts";
import Loading from "../../components/Loading";
import Profile from "./Profile";

const ProfileSuggest = () => {
  const [profileData, setProfileData] = useState({
    profileSuggest: { results: [] },
  });
  const { profileSuggest } = profileData;
  const currentUser = useCurrentUser();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get("/profiles/");
        setProfileData((prevState) => ({
          ...prevState,
          profileSuggest: data,
        }));
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [currentUser]);

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
