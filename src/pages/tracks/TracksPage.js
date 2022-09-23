import React, { useEffect, useState } from "react";
import { axiosReq } from "../../api/axiosDefaults";

import Track from "./Track";
import Loading from "../../components/Loading";
import ProfileSuggest from "../profiles/ProfileSuggest";

import styles from "../../styles/TracksPage.module.css";

function TracksPage({ filter = "" }) {
  const [tracks, setTracks] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);

  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const { data } = await axiosReq.get(
          `/tracks/?${filter}search=${query}`
        );
        setTracks(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchTracks();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [filter, query]);

  return (
    <div className={styles.TPcontain}>
      <div className={styles.TPflex}>
        <div className={styles.TPleft}>
          <form
            className={styles.wrap}
            onSubmit={(event) => event.preventDefault()}
          >
            <div className={styles.search}>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                type="text"
                className={styles.searchTerm}
                placeholder="Search tracks"
              ></input>
              <button type="submit" class={styles.searchButton}>
                <i className="fa fa-search"></i>
              </button>
            </div>
          </form>
          {hasLoaded ? (
            <>
              {tracks.results.length ? (
                tracks.results.map((track) => (
                  <Track key={track.id} {...track} setTracks={setTracks} />
                ))
              ) : (
                <div className={styles.Results}>No Results</div>
              )}
            </>
          ) : (
            <div className={styles.Results}>
              <Loading />
            </div>
          )}
        </div>
        <div className={styles.TPright}>
          <ProfileSuggest />
        </div>
      </div>
    </div>
  );
}

export default TracksPage;
