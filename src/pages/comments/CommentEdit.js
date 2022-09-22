import React, { useState } from "react";

function CommentEdit(props) {
  const { id, content, setShowEditForm, setComments } = props;
  const [formContent, setFormContent] = useState(content);

  return (
    <div>
      <form>
        <input type="text"></input>
        <button type="submit">Save</button>
        <button type="button">Cancel</button>
      </form>
    </div>
  );
}

export default CommentEdit;
