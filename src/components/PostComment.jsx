import { React, useState } from "react";
import { postCommentByArticleId } from "../api";

export const PostComment = ({ article_id, setComments, comments }) => {
  const username = "grumpy19";
  const [comment, setComment] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [err, setErr] = useState(false);

  const handleChange = (event) => {
    const value = event.target.value;
    setComment(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const optimisticComment = {
      body: comment,
      author: username,
      votes: 0,
    };
    setIsPosting(true);
    setComments([optimisticComment, ...comments]);
    setComment("");
    postCommentByArticleId(username, comment, article_id)
      .then(() => {
        setIsPosting(false);
      })
      .catch(() => {
        console.log(comment.comment_id);
        setComments([
          ...comments.filter((currentComment) => {
            return currentComment.hasOwnProperty("comment_id");
          }),
        ]);
        setIsPosting(false);
        setErr(true);
      });
  };

  return (
    <section className="add-comment">
      <form onSubmit={handleSubmit}>
        <input
          required
          className="comment-input"
          value={comment}
          onChange={handleChange}
          type="text"
          placeholder="Write a comment..."
        ></input>
        <button disabled={isPosting} className="comment-submit" type="submit">
          post
        </button>
        {isPosting && <p>posting...</p>}
        {err && <p>comment failed to post</p>}
      </form>
    </section>
  );
};
