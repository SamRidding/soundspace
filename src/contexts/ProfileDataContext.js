import React, { createContext, useContext, useState } from "react";

export const ProfileDataContext = createContext();
export const SetProfileDataContext = createContext();

export const useProfileData = () => useContext(ProfileDataContext);
export const useSetProfileData = () => useContext(SetProfileDataContext);

const ProfileDataContext = ({ children }) => {
  const [profileData, setProfileData] = useState({
    pageProfile: { results: [] },
    profileSuggest: { results: [] },
  });
  
  return <div>ProfileDataContext</div>;
};

export default ProfileDataContext;
