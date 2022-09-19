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
    <div>
      <div>
        <Link to={`/profiles/${profile_id}`}>
          <UserPic src={profile_img} />
          {owner}
        </Link>
        <div>
          <ReactPlayer url={audio} />
        </div>
        <div>
          <img src={image} />
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default Track;
