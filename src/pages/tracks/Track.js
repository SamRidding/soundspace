import React from "react";
import styles from "../../styles/Track.module.css";
import UserPic from "../../components/UserPic";
import { useCurrentUser } from "../../contexts/CurrentUserContexts";
import { Link, useHistory } from "react-router-dom";
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
    trackPage,
    setTracks,
    repost_id,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/tracks/${id}/edit`);
  };

  const handleLike = async () => {
    try {
      const { data } = await axiosRes.post("/likes/", { track: id });
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

  const handleUnlike = async () => {
    try {
      await axiosRes.delete(`/likes/${like_id}/`);
      setTracks((prevTracks) => ({
        ...prevTracks,
        results: prevTracks.results.map((track) => {
          return track.id === id
            ? { ...track, likes_count: track.likes_count - 1, like_id: null }
            : track;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleRepost = async () => {
    try {
      const { data } = await axiosRes.post("/reposts/", { track: id });
      setTracks((prevTracks) => ({
        ...prevTracks,
        results: prevTracks.results.map((track) => {
          return track.id === id ? { ...track, repost_id: data.id } : track;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const removeRepost = async () => {
    try {
      await axiosRes.delete(`/reposts/${repost_id}/`);
      setTracks((prevTracks) => ({
        ...prevTracks,
        results: prevTracks.results.map((track) => {
          return track.id === id
            ? { ...track, repost_id: null }
            : track;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const trackIcons = (
    <>
      {like_id ? (
        <span style={{ textDecoration: "none" }} onClick={handleUnlike}>
          <div className={styles.ibtn} style={{ color: "red" }}>
            <i className="fas fa-heart"></i>
            Like
          </div>
        </span>
      ) : currentUser ? (
        <span style={{ textDecoration: "none" }} onClick={handleLike}>
          <div className={styles.ibtn}>
            <i className="fas fa-heart"></i>
            Like
          </div>
        </span>
      ) : (
        <span style={{ textDecoration: "none" }} title="Log in to like tracks">
          <div className={styles.ibtn}>
            <i className="fas fa-heart"></i>
            Like
          </div>
        </span>
      )}

      {currentUser ? (
        <span style={{ textDecoration: "none" }}>
          <div className={styles.ibtn}>
            <i class="fas fa-comment"></i>
            Comment
          </div>
        </span>
      ) : (
        <span
          style={{ textDecoration: "none" }}
          title="Log in to comment on tracks"
        >
          <div className={styles.ibtn}>
            <i class="fas fa-comment"></i>
            Comment
          </div>
        </span>
      )}

      {repost_id ? (
        <span style={{ textDecoration: "none" }} onClick={removeRepost}>
          <div className={styles.ibtn} style={{ color: "red" }}>
            <i className="fas fa-retweet"></i>
            Repost
          </div>
        </span>
      ) : currentUser ? (
        <span style={{ textDecoration: "none" }} onClick={handleRepost}>
          <div className={styles.ibtn}>
            <i className="fas fa-retweet"></i>
            Repost
          </div>
        </span>
      ) : (
        <span
          style={{ textDecoration: "none" }}
          title="Log in to repost tracks"
        >
          <div className={styles.ibtn}>
            <i className="fas fa-retweet"></i>
            Repost
          </div>
        </span>
      )}
    </>
  );

  const trackOwnerIcons = (
    <>
      <span style={{ textDecoration: "none" }}>
        <div className={styles.ibtn}>
          <i class="fas fa-comment"></i>
          Comment
        </div>
      </span>
      <span style={{ textDecoration: "none" }} onClick={handleEdit}>
        <div className={styles.ibtn}>
          <i class="fas fa-edit"></i>
          Edit
        </div>
      </span>
      <span style={{ textDecoration: "none" }}>
        <div className={styles.ibtn}>
          <i class="fas fa-trash"></i>
          Delete
        </div>
      </span>
    </>
  );

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
        {is_owner ? trackOwnerIcons : trackIcons}
        {likes_count}
        {posted_at}
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
