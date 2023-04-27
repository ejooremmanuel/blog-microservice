import React from "react";
import PostItem from "./PostItem";

const PostList = ({ posts = [] }) => {
  return (
    <div style={{ padding: "1.rem" }}>
      {posts?.map((it) => {
        return (
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <PostItem post={it} />
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
