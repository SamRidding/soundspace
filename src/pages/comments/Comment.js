import React from "react";
import { Link } from "react-router-dom";
import UserPic from "../../components/UserPic";
import { useCurrentUser } from "../../contexts/CurrentUserContexts";

const Comment = (props) => {
  const { profile_id, profile_img, owner, posted_at, content } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  return (
    <div>
      <div>
        <Link to={`/profiles/${profile_id}`}>
          <UserPic src={profile_img} />
        </Link>
        <div>
          <span>{owner}</span>
          <p>{content}</p>
        </div>
      </div>
      <div>{posted_at}</div>
      {is_owner ? (
        <div>
          <span>
            <i class="fas fa-edit"></i>
          </span>
          <span>
            <i class="fas fa-trash"></i>
          </span>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Comment;
