import React, { useState } from "react";
import styles from "../../styles/TrackUploadForm.module.css"

const TrackUploadForm = () => {

  const [trackData, setTrackData] = useState({
    title: "",
    audio: "",
    image: "",
    content: "",
    status: "",
  });
  const { title, audio, image, content, status } = trackData;

  return (
    <div className={styles.center}>
      <form>
        <div className={styles.container}>
          <h1>Upload Track</h1>
          <input
            type="text"
            placeholder="Title"
            name="title"
          ></input>
          <input
            type="url"
            placeholder="Audio Link"
            name="audio"
          ></input>
          <input
            type="file"
            placeholder="Image"
            name="image"
          ></input>
          <input
            type="text"
            placeholder="Track Info"
            name="content"
          ></input>
          <select name="status" id="status">
            <option value="DRAFT">DRAFT</option>
            <option value="PUBLISHED">PUBLISHED</option>
          </select>
          <div>
            <button type="submit">Post Track</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TrackUploadForm;
