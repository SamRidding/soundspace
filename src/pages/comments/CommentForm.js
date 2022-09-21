import React, { useState } from "react";

function CommentForm(props) {
  const { post, setPost, setComments, profileImage, profile_id } = props;
  const [content, setContent] = useState("");

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  return (
    <div>
      <form>
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
