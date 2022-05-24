import React from "react";
import { useState } from "react";

export default function Comments() {
  const [comments, setComments] = useState([]);
  const fetchComments = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();
    setComments(data);
  };
  return (
    <>
      <div>Comments Page</div>
      <button onClick={fetchComments}>load comments</button>
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            {comment.id} {comment.text}
          </div>
        );
      })}
    </>
  );
}
