import React from "react";
import { useCreaPostItem } from "../hooks/posts/post-hooks";
import { useState } from "react";

const CreatePostForm = ({ reloadState }) => {
  const { createPost } = useCreaPostItem();
  const [title, setTitle] = useState("");
  return (
    <div style={{ padding: "1rem" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createPost({ title }).then((status) => {
            reloadState(status);
            setTitle("");
          });
        }}
      >
        <input
          type="text"
          required
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
};

export default CreatePostForm;
