import { React, useState, useContext } from "react";
import { postCommentByArticleId } from "../api";
import { UserContext } from "../UserContext";

export const PostComment = ({ article_id, setComments, comments }) => {
  const { username } = useContext(UserContext);
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
      .then((res) => {
        setComments(
          [...comments, res.data[0]].sort((a, b) => {
            let da = new Date(a.created_at);
            let db = new Date(b.created_at);
            return db - da;
          })
        );
        setIsPosting(false);
      })
      .catch(() => {
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
    <form className="add-comment" onSubmit={handleSubmit}>
      <textarea
        required
        className="comment-input"
        value={comment}
        onChange={handleChange}
        type="text"
        placeholder="Write a comment..."
      ></textarea>
      <button disabled={isPosting} className="comment-submit" type="submit">
        post
      </button>
      {isPosting && <p>posting...</p>}
      {err && <p>comment failed to post</p>}
    </form>
  );
};
