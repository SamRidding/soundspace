import React, { useState } from "react";
import { axiosRes } from "../../api/axiosDefaults";

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
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Enter a comment"
            name="comment"
            value={content}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <button type="submit">Post</button>
        </div>
      </form>
    </div>
  );
}

export default CommentForm;
