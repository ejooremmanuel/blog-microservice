import React from "react";
import { useGetPostComments } from "../hooks/posts/post-hooks";

const PostComment = ({ refetch, postId }) => {
  const { comments } = useGetPostComments({
    id: postId,
    refetch,
  });
  return (
    <div>
      Comments
      <ul>
        {comments?.map((comment) => (
          <li>{comment.title || ""}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostComment;
