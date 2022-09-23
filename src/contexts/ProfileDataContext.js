import React, { createContext, useContext, useState } from "react";
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

  return <div>ProfileDataContext</div>;
};

export default ProfileDataContext;
