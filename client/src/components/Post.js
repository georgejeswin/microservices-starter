import React, { useEffect, useState } from "react";
import axios from "axios";
import CreateComment from "./CreateComment";

const Post = ({ post }) => {
  const [comments, setComments] = useState([]);
  const getComments = async () => {
    const response = await axios.get(
      `http://localhost:4001/api/posts/${post.id}/comments`
    );
    setComments(response.data);
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <div className="border-2 shadow-lg p-5">
      <h2 className="text-xl font-bold">{post.title}</h2>
      <div className="p-5">
        <h4 className="text-lg font-semibold">Comments</h4>
        <ul className="list-disc pl-10">
          {comments.map((comment) => (
            <li key={comment.id} className="font-thin">
              {comment.comment}
            </li>
          ))}
        </ul>
      </div>
      <CreateComment post={post} />
    </div>
  );
};

export default Post;
