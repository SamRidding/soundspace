import React from "react";
import { Link } from "react-router-dom";
import { axiosRes } from "../../api/axiosDefaults";
import UserPic from "../../components/UserPic";
import { useCurrentUser } from "../../contexts/CurrentUserContexts";
import styles from "../../styles/Comment.module.css"

const Comment = (props) => {
  const {
    profile_id,
    profile_img,
    owner,
    posted_at,
    content,
    id,
    setTrack,
    setComments,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/comments/${id}/`);
      setTrack((prevTrack) => ({
        results: [
          {
            ...prevTrack.results[0],
            comments_count: prevTrack.results[0].comments_count - 1,
          },
        ],
      }));

      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.filter((comment) => comment.id !== id),
      }));
    } catch (err) {}
  };

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
          <span onClick={handleDelete}>
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
