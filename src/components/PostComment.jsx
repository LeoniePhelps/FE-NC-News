import { React, useState } from "react";
import { postCommentByArticleId } from "../api";

export const PostComment = ({ article_id }) => {
  const username = "grumpy19";
  const [comment, setComment] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setComment(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postCommentByArticleId(username, comment, article_id).catch((err) => {
      console.log(err);
    });
  };

  return (
    <section className="add-comment">
      <form onSubmit={handleSubmit}>
        <input
          className="comment-input"
          value={comment}
          onChange={handleChange}
          type="text"
          placeholder="Write a comment..."
        ></input>
        <button className="comment-submit" type="submit">
          post
        </button>
      </form>
    </section>
  );
};
