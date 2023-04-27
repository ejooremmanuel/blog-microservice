import React, { useState } from "react";
import { PostForm } from "../../components";
import PostList from "../../components/PostList";
import { useGetPosts } from "../../hooks/posts/post-hooks";

const PostPage = () => {
  const [refetch, setRefetch] = useState(false);
  const { posts } = useGetPosts(refetch);
  console.log(posts);
  return (
    <div>
      <div>
        <PostForm reloadState={setRefetch} />
      </div>
      <div>
        <PostList posts={posts} />
      </div>
    </div>
  );
};

export default PostPage;
