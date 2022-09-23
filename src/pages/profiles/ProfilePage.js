import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContexts";
import { useSetProfileData } from "../../contexts/ProfileDataContext";
import styles from "../../styles/ProfilePage.module.css";

function ProfilePage() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const currentUser = useCurrentUser();
  const { id } = useParams();
  const setProfileData = useSetProfileData();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [{ data: pageProfile }] = await Promise.all([
          axiosReq.get(`/profiles/${id}/`),
        ]);
        setProfileData((prevState) => ({
          ...prevState,
          pageProfile: { results: [pageProfile] },
        }));
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id, setProfileData]);

  return (
    <div className={styles.PPcontain}>
      <div className={styles.PPflex}>
        <div className={styles.PPleft}>
          <div className={styles.PPuser}>
            <p>User img/name</p>
          </div>
          <div className={styles.PPtracks}>Tracks</div>
        </div>
        <div className={styles.PPright}>User info, track likes.</div>
      </div>
    </div>
  );
}

export default ProfilePage;
