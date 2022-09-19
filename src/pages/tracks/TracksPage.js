import React, { useEffect, useState } from "react";
import { axiosReq } from "../../api/axiosDefaults";

function TracksPage({ filter = "" }) {
  const [tracks, setTracks] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false)

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const { data } = await axiosReq.get(`/tracks/?${filter}`);
        setTracks(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded(false);
    fetchTracks();
  }, [filter]);

  return <div>Track Page</div>;
}

export default TracksPage;
