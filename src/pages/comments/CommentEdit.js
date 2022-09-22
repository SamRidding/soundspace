import React, { useState } from "react";

function CommentEdit(props) {
    const { id, content, setShowEditForm, setComments } = props;
    const [formContent, setFormContent] = useState(content);

    
}

export default CommentEdit