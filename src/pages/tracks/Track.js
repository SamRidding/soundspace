import React from "react";
import styles from "../../styles/Track.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContexts";
import { Link } from "react-router-dom";
import UserPic from "../../components/UserPic"

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

  return(
    <div>
        <Link to={`/profiles/${profile_id}`}>
            <UserPic src={profile_img} />
        </Link>
    </div>
  );
};

export default Track;
