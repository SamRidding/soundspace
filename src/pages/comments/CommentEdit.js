import React, { useState } from "react";
import { axiosRes } from "../../api/axiosDefaults";

function CommentEdit(props) {
  const { id, content, setShowEditForm, setComments } = props;
  const [formContent, setFormContent] = useState(content);

  const handleChange = (event) => {
    setFormContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosRes.put(`/comments/${id}/`, {
        content: formContent.trim(),
      });
      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.map((comment) => {
          return comment.id === id
            ? {
                ...comment,
                content: formContent.trim(),
                updated_at: "now",
              }
            : comment;
        }),
      }));
      setShowEditForm(false);
    } catch (err) {}
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={formContent} onChange={handleChange}></input>
        <button type="submit" disabled={!content.trim()}>
          Save
        </button>
        <button type="button" onClick={() => setShowEditForm(false)}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default CommentEdit;
