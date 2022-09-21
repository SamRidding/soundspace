import React, { useEffect, useState } from "react";

// import styles from "../../styles/TrackPage.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import { useParams } from "react-router-dom";
import Track from "./Track";

import { useCurrentUser } from "../../contexts/CurrentUserContexts";
import CommentForm from "../comments/CommentForm";
import Comment from "../comments/Comment";

const TrackPage = () => {
  const { id } = useParams();
  const [track, setTrack] = useState({ results: [] });

  const currentUser = useCurrentUser();
  const profile_image = currentUser?.profile_image;
  const [comments, setComments] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: track }, { data: comments }] = await Promise.all([
          axiosReq.get(`/tracks/${id}`),
          axiosReq.get(`/comments/?track=${id}`),
        ]);
        setTrack({ results: [track] });
        setComments(comments);
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);

  return (
    <div>
      <Track {...track.results[0]} setTracks={setTrack} TrackPage />
      <div>
        {currentUser ? (
          <CommentForm
            profile_id={currentUser.profile_id}
            profileImage={profile_image}
            track={id}
            setTrack={setTrack}
            setComments={setComments}
          />
        ) : comments.results.length ? (
          "Comments"
        ) : null}
        {comments.results.length ? (
          comments.results.map((comment) => (
            <Comment key={comment.id} {...comment} />
          ))
        ) : currentUser ? (
          <span>Add a comment</span>
        ) : (
          <span>Log in to post the first comment</span>
        )}
      </div>
    </div>
  );
};

export default TrackPage;
