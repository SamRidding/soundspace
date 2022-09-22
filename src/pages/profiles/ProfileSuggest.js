import React, { useState } from "react";

const ProfileSuggest = () => {
  const [profileData, setProfileData] = useState({
    profileSuggest: { results: [] },
  });
  const { profileSuggest } = profileData;


  return (
    <div>
      <p>Users to follow</p>
    </div>
  );
};

export default ProfileSuggest;
