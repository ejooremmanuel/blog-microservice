import axios from "axios";
import { useEffect, useState } from "react";
const BASE_URL = "http://localhost:4000/posts";
const BASE_URL_COMMENTS = "http://localhost:5000/posts";

const createPost = async (data) => {
  try {
    await axios.post(`${BASE_URL}/`, data, {
      headers: { "Content-Type": "application/json" },
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
const createPostComment = async ({ data, id }) => {
  try {
    await axios.post(`${BASE_URL_COMMENTS}/${id}/comment`, data, {
      headers: { "Content-Type": "application/json" },
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
const getPosts = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/`, {
      headers: { "Content-Type": "application/json" },
    });
    return res.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
const getPostComments = async (id) => {
  try {
    const res = await axios.get(`${BASE_URL_COMMENTS}/${id}/comments`, {
      headers: { "Content-Type": "application/json" },
    });
    return res.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const useCreaPostItem = () => {
  const [success, setSuccess] = useState(false);

  return {
    createPost,
    success,
    setSuccess,
  };
};
export const useCreaPostComment = () => {
  const [success, setSuccess] = useState(false);

  return {
    createPostComment,
    success,
    setSuccess,
  };
};
export const useGetPosts = (refetch) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((data) => {
      setPosts(data);
    });
  }, [refetch]);

  return {
    posts,
  };
};
export const useGetPostComments = ({ refetch, id }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getPostComments(id).then((data) => {
      setComments(data);
    });
  }, [refetch, id]);

  return {
    comments,
  };
};
