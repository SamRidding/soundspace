import React, { createContext, useContext } from 'react'


export const ProfileDataContext = createContext();
export const SetProfileDataContext = createContext();

export const useProfileData = () => useContext(ProfileDataContext);
export const useSetProfileData = () => useContext(SetProfileDataContext);

const ProfileDataContext = () => {
  return (
    <div>ProfileDataContext</div>
  )
}

export default ProfileDataContext