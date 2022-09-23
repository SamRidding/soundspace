import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContexts";
import {
  useProfileData,
  useSetProfileData,
} from "../../contexts/ProfileDataContext";
import styles from "../../styles/ProfilePage.module.css";

function ProfilePage() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const currentUser = useCurrentUser();
  const { id } = useParams();
  const setProfileData = useSetProfileData();
  const { pageProfile } = useProfileData();
  const [profile] = pageProfile.results;
  const is_owner = currentUser?.username === profile?.owner;
  const [profileTracks, setProfileTracks] = useState({ results: [] });

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
            <img src={profile?.image} alt="test"></img>
            <h2>{profile?.owner}</h2>
          </div>
          <div className={styles.PPtracks}>Tracks</div>
        </div>
        <div className={styles.PPright}>
          <div className={styles.PPstats}>
            <div className={styles.PPstat}>
              <p className={styles.PPstatTitle}>Followers</p>
              <p className={styles.PPstatNo}>{profile?.followers_count}</p>
            </div>
            <div className={styles.PPstat}>
              <p className={styles.PPstatTitle}>Following</p>
              <p className={styles.PPstatNo}>{profile?.following_count}</p>
            </div>
          </div>
          {/* {currentUser &&
            !is_owner &&
            (profile?.following_id ? (
              <button className={styles.FollowBtn} onClick={() => {}}>
                unfollow
              </button>
            ) : (
              <button className={styles.FollowBtn} onClick={() => {}}>
                follow
              </button>
            ))} */}
          <div className={styles.PPbio}>{profile?.content}</div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;