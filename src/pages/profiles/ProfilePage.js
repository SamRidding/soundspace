import React, { useEffect, useState } from "react";

import Loading from "../../components/Loading";

import { useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContexts";
import {
  useProfileData,
  useSetProfileData,
} from "../../contexts/ProfileDataContext";
import styles from "../../styles/ProfilePage.module.css";
import InfiniteScroll from "react-infinite-scroll-component";
import Track from "../tracks/Track";
import { fetchMoreData } from "../../utils/utils";
import { ProfileEditDropdown } from "../../components/Dropdown";
import LikedTracks from "../tracks/LikedTracks";

function ProfilePage() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const currentUser = useCurrentUser();
  const { id } = useParams();
  const { setProfileData, handleFollow, handleUnfollow } = useSetProfileData();
  const { pageProfile } = useProfileData();
  const [profile] = pageProfile.results;
  const is_owner = currentUser?.username === profile?.owner;
  const [profileTracks, setProfileTracks] = useState({ results: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [{ data: pageProfile }, { data: profileTracks }] =
          await Promise.all([
            axiosReq.get(`/profiles/${id}/`),
            axiosReq.get(`/tracks/?owner__profile=${id}`),
          ]);
        setProfileData((prevState) => ({
          ...prevState,
          pageProfile: { results: [pageProfile] },
        }));
        setProfileTracks(profileTracks);
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
            <div className={styles.PPimgContain}>
              <img
                src={profile?.profile_img}
                className={styles.PPimg}
                alt="test"
              ></img>
            </div>
            <div className={styles.PPusername}>
              <h2>{profile?.owner}</h2>
              {profile?.is_owner && <ProfileEditDropdown id={profile?.id} />}
            </div>
            {currentUser &&
              !is_owner &&
              (profile?.following_id ? (
                <button
                  className={styles.FollowBtn}
                  onClick={() => handleUnfollow(profile)}
                >
                  unfollow
                </button>
              ) : (
                <button
                  className={styles.FollowBtn}
                  onClick={() => handleFollow(profile)}
                >
                  follow
                </button>
              ))}
          </div>
          <div className={styles.PPtracks}>
            {profileTracks.results.length ? (
              <InfiniteScroll
                children={profileTracks.results.map((track) => (
                  <Track
                    key={track.id}
                    {...track}
                    setTracks={setProfileTracks}
                  />
                ))}
                dataLength={profileTracks.results.length}
                loader={<Loading />}
                hasMore={!!profileTracks.next}
                next={() => fetchMoreData(profileTracks, setProfileTracks)}
              />
            ) : (
              <Loading />
            )}
          </div>
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
          <div className={styles.PPbio}>{profile?.bio}<LikedTracks /></div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
