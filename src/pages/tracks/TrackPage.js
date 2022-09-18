import { axiosReq } from "../../api/axiosDefaults";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../../styles/TrackPage.module.css";

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

  return <div>TrackPage</div>;
};

export default TrackPage;
