import React, { useState } from "react";
import { axiosRes } from "../../api/axiosDefaults";
import styles from "../../styles/CommentForm.module.css"

function CommentForm(props) {
  const { track, setTrack, setComments, profileImage, profile_id } = props;
  const [content, setContent] = useState("");

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axiosRes.post("/comments/", {
        content,
        track,
      });
      setComments((prevComments) => ({
        ...prevComments,
        results: [data, ...prevComments.results],
      }));
      setTrack((prevTrack) => ({
        results: [
          {
            ...prevTrack.results[0],
            comments_count: prevTrack.results[0].comments_count + 1,
          },
        ],
      }));
      setContent("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.CFContain}>
      <form onSubmit={handleSubmit} className={styles.CF}>
          <input
            type="text"
            placeholder="Enter a comment"
            name="comment"
            className={styles.CFInput}
            value={content}
            onChange={handleChange}
          ></input>
          <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default CommentForm;
