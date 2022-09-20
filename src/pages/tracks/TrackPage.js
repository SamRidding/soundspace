import React, { useEffect, useState } from "react";

import styles from "../../styles/TrackPage.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import { useParams } from "react-router-dom";
import Track from "./Track";




const TrackPage = () => {
  const { id } = useParams();
  const [track, setTrack] = useState({ results: [] });

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
    </div>
  );
};

export default TrackPage;
