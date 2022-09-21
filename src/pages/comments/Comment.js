import React from "react";
import { Link } from "react-router-dom";
import UserPic from "../../components/UserPic";

const Comment = (props) => {
  const { profile_id, profile_img, owner, posted_at, content } = props;

  return (
    <div>
      <div>
        <link to={`/profiles/${profile_id}`}>
          <UserPic src={profile_img} />
        </link>
        <div>
          <span>{owner}</span>
          <p>{content}</p>
        </div>
      </div>
      <div>{posted_at}</div>
    </div>
  );
};

export default Comment;
