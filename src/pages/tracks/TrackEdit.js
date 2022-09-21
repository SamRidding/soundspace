import React, { useRef, useState } from "react";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import styles from "../../styles/TrackEdit.module.css";

const TrackEdit = () => {
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
  const { id } = useParams();

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setTrackData({
      ...trackData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("audio", audio);
    formData.append("image", imageInput.current.files[0]);
    formData.append("content", content);
    formData.append("status", status);

    try {
      const { data } = await axiosReq.post("/tracks/", formData);
      history.push(`/tracks/${data.id}`);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
        console.log(err);
      }
    }
  };

  return (
    <div className={styles.center}>
      <form onSubmit={handleSubmit}>
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
            ref={imageInput}
          ></input>
          {errors.image?.map((message, idx) => (
            <div key={idx}>{message}</div>
          ))}
          <input
            type="text"
            placeholder="Track Info"
            name="content"
            value={content}
            onChange={handleChange}
          ></input>
          <select
            name="status"
            id="status"
            value={status}
            onChange={handleChange}
          >
            <option value="draft">DRAFT</option>
            <option value="published">PUBLISHED</option>
          </select>
          <div>
            <button type="submit" className={styles.postbtn}>
              Post Track
            </button>
          </div>
          {errors.non_field_errors?.map((message, idx) => (
            <div key={idx}>{message}</div>
          ))}
        </div>
      </form>
    </div>
  );
};

export default TrackEdit;
