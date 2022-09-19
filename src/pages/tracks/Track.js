import React from "react";
import styles from "../../styles/Track.module.css";
import UserPic from "../../components/UserPic";
import { useCurrentUser } from "../../contexts/CurrentUserContexts";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { axiosRes } from "../../api/axiosDefaults";

const Track = (props) => {
  const {
    id,
    owner,
    title,
    audio,
    image,
    content,
    status,
    edited_at,
    profile_id,
    posted_at,
    likes_count,
    comments_count,
    profile_img,
    like_id,
    setTracks,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const handleLike = async () => {
    try {
      const { data } = await axiosRes.track("/likes/", { track: id });
      setTracks((prevTracks) => ({
        ...prevTracks,
        results: prevTracks.results.map((track) => {
          return track.id === id
            ? { ...track, likes_count: track.likes_count + 1, like_id: data.id }
            : track;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.pagecontain}>
      <div className={styles.topcontain}>
        <div className={styles.audio}>
          <ReactPlayer url={audio} width="100%" height="100%" />
        </div>
        {/* <div>
          <img src={image} alt={title} />
        </div> */}
      </div>

      <div className={styles.interact}>
        {is_owner ? (
          <Link
            style={{ textDecoration: "none" }}
            title="You can't like your own track"
          >
            <div className={styles.ibtn}>
              <i class="fas fa-heart"></i>
              Like
            </div>
          </Link>
        ) : like_id ? (
          <Link style={{ textDecoration: "none" }}>
            <div className={styles.ibtn}>
              <i class="fas fa-heart"></i>
              Like
            </div>
          </Link>
        ) : currentUser ? (
          <Link style={{ textDecoration: "none" }}>
            <div className={styles.ibtn}>
              <i class="fas fa-heart"></i>
              Like
            </div>
          </Link>
        ) : (
          <Link
            style={{ textDecoration: "none" }}
            title="Log in to like tracks"
          >
            <div className={styles.ibtn}>
              <i class="fas fa-heart"></i>
              Like
            </div>
          </Link>
        )}

        <Link style={{ textDecoration: "none" }}>
          <div className={styles.ibtn}>
            <i class="fas fa-comment"></i>
            Comment
          </div>
        </Link>
        <Link style={{ textDecoration: "none" }}>
          <div className={styles.ibtn}>
            <i class="fas fa-retweet"></i>
            Repost
          </div>
        </Link>
      </div>

      <div className={styles.midcontain}>
        <div className={styles.UserInfo}>
          <Link
            to={`/profiles/${profile_id}`}
            style={{ textDecoration: "none" }}
          >
            <div>
              <UserPic src={profile_img} />
            </div>
            <div>{owner}</div>
          </Link>
        </div>
        <div>{content}</div>
      </div>
    </div>
  );
};

export default Track;
