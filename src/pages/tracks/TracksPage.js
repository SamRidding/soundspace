import React, { useState } from "react";

function TracksPage({ filter = "" }) {
  const [tracks, setTracks] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false)
  
  return <div>Track Page</div>;
}

export default TracksPage;
