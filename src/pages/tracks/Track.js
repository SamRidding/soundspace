import React from "react";
import styles from "../../styles/Track.module.css";
import UserPic from "../../components/UserPic";
import { useCurrentUser } from "../../contexts/CurrentUserContexts";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

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
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

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
        <Link style={{ textDecoration: "none" }}>
          <div className={styles.ibtn}>
            <i class="fas fa-heart"></i>
            Like
          </div>
        </Link>
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
