import React from "react";
import styles from "../../styles/Track.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContexts";

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
        is_owner,
        profile_id,
        posted_at,
        likes_count,
        comments_count,
      } = props;

  return <div>Track</div>;
};

export default Track;
