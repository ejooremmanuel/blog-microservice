import React, { useState } from "react";
import { useCreaPostComment } from "../hooks/posts/post-hooks";

const CreatePostComment = ({ post, reloadState }) => {
  const [comment, setComment] = useState("");
  const { createPostComment } = useCreaPostComment();
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createPostComment({
            data: {
              title: comment,
            },
            id: post.postId,
          }).then((status) => {
            reloadState(status);
            setComment("")
          });
        }}
      >
        <input
          type="text"
          required
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
        <button type="submit">Comment</button>
      </form>
    </div>
  );
};

export default CreatePostComment;
