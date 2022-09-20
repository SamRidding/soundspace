import React, { useEffect, useState } from "react";
import { axiosReq } from "../../api/axiosDefaults";
import Track from "./Track";
import Loading from "../../components/Loading";
import styles from "../../styles/TracksPage.module.css"

function TracksPage({ filter = "" }) {
  const [tracks, setTracks] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);

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

  return (
    <div>
      <div className={styles.wrap}>
        <div className={styles.search}>
          <input
            type="text"
            className={styles.searchTerm}
            placeholder="Search tracks"
          ></input>
          <button type="submit" class={styles.searchButton}>
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
      {hasLoaded ? (
        <>
          {tracks.results.length ? (
            tracks.results.map((track) => (
              <Track key={track.id} {...track} setTracks={setTracks} />
            ))
          ) : (
            <div>No results.</div>
          )}
        </>
      ) : (
        <div>
          <Loading />
        </div>
      )}
    </div>
  );
}

export default TracksPage;
