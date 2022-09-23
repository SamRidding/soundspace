import React, { createContext, useContext, useEffect, useState } from "react";
import { useCurrentUser } from "./CurrentUserContexts";

export const ProfileDataContext = createContext();
export const SetProfileDataContext = createContext();

export const useProfileData = () => useContext(ProfileDataContext);
export const useSetProfileData = () => useContext(SetProfileDataContext);

const ProfileDataContext = ({ children }) => {
  const [profileData, setProfileData] = useState({
    pageProfile: { results: [] },
    profileSuggest: { results: [] },
  });

  const currentUser = useCurrentUser();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(
          "/profiles/"
        );
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

  return <div>ProfileDataContext</div>;
};

export default ProfileDataContext;
