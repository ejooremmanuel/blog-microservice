import React, { useState } from "react";
import CreatePostComment from "./CreatePostComment";
import PostComment from "./PostComment";

const PostItem = ({ post }) => {
  const [refetch, setRefetch] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "1.5rem",
        minHeight: "100px",
        // boxShadow: "2px 2px 3px rgba(0, 0, 0, 0.2)",
        border: "1px solid #e6e6e6",

        width: "100%",
      }}
    >
      <div>{post?.title}</div>
      <CreatePostComment post={post} reloadState={setRefetch} />
      <div style={{ flex: "1" }}>
        <PostComment postId={post.postId} refetch={refetch} />
      </div>
    </div>
  );
};

export default PostItem;
