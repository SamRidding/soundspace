import React, { useEffect, useState } from "react";
import { axiosReq } from "../../api/axiosDefaults";

import Track from "./Track";
import Loading from "../../components/Loading";
import { useCurrentUser } from "../../contexts/CurrentUserContexts";
import ProfileSuggest from "../profiles/ProfileSuggest";
import { fetchMoreData } from "../../utils/utils";

import styles from "../../styles/TracksPage.module.css";
import InfiniteScroll from "react-infinite-scroll-component";

function TracksPage({ filter = "" }) {
  const [tracks, setTracks] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const currentUser = useCurrentUser();

  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const { data } = await axiosReq.get(
          `/tracks/?${filter}search=${query}`
        );
        setTracks(data);
        setHasLoaded(true);
      } catch (err) {}
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchTracks();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [filter, query, currentUser]);

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
            </div>
          </form>
          {hasLoaded ? (
            <>
              {tracks.results.length ? (
                <InfiniteScroll
                  children={tracks.results.map((track) => (
                    <Track key={track.id} {...track} setTracks={setTracks} />
                  ))}
                  dataLength={tracks.results.length}
                  loader={<Loading />}
                  hasMore={!!tracks.next}
                  next={() => fetchMoreData(tracks, setTracks)}
                />
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
