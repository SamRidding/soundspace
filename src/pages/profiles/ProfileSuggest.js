import React, { useEffect, useState } from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContexts";

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
  }, []);

  return (
    <div>
      <p>Users to follow</p>
    </div>
  );
};

export default ProfileSuggest;
