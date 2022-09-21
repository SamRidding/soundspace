import React, { useEffect, useState } from "react";

// import styles from "../../styles/TrackPage.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import { useParams } from "react-router-dom";
import Track from "./Track";

import { useCurrentUser } from "../../contexts/CurrentUserContexts";
import CommentForm from "../comments/CommentForm";

const TrackPage = () => {
  const { id } = useParams();
  const [track, setTrack] = useState({ results: [] });

  const currentUser = useCurrentUser();
  const profile_image = currentUser?.profile_image;
  const [comments, setComments] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: track }] = await Promise.all([
          axiosReq.get(`/tracks/${id}`),
        ]);
        setTrack({ results: [track] });
        console.log(track);
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
      </div>
    </div>
  );
};

export default TrackPage;
