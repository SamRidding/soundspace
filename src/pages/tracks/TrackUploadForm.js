import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styles from "../../styles/TrackUploadForm.module.css";

const TrackUploadForm = () => {
  const [trackData, setTrackData] = useState({
    title: "",
    audio: "",
    image: "",
    content: "",
    status: "",
  });
  const { title, audio, image, content, status } = trackData;

  const history = useHistory();
  const imageInput = useRef(null);

  const handleChange = (event) => {
    setTrackData({
      ...trackData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className={styles.center}>
      <form>
        <div className={styles.container}>
          <h1>Upload Track</h1>
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={title}
            onChange={handleChange}
          ></input>
          <input
            type="url"
            placeholder="Audio Link"
            name="audio"
            value={audio}
            onChange={handleChange}
          ></input>
          <input
            type="file"
            placeholder="Image"
            name="image"
            value={image}
            onChange={handleChange}
          ></input>
          <input
            type="text"
            placeholder="Track Info"
            name="content"
            value={content}
            onChange={handleChange}
          ></input>
          <select name="status" id="status" value={status} onChange={handleChange}>
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
