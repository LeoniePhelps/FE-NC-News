import { React, useEffect, useState } from "react";
import { deleteCommentByCommentId, getCommentsByArticleId } from "../api";
import { dateFormatterComment } from "../dateFormatter";
import { PostComment } from "./PostComment";

export const Comments = ({ article_id }) => {
  const username = "grumpy19";
  const [comments, setComments] = useState([]);
  const [deleted, setDeleted] = useState(false);

  const handleDelete = (comment_id) => {
    setDeleted(true);
    deleteCommentByCommentId(comment_id);
  };

  useEffect(() => {
    getCommentsByArticleId(article_id).then(({ data }) => {
      data.sort((a, b) => {
        let da = new Date(a.created_at);
        let db = new Date(b.created_at);
        return db - da;
      });
      setComments(data);
    });
  }, [article_id]);
  return (
    <section>
      <PostComment
        article_id={article_id}
        setComments={setComments}
        comments={comments}
      />
      <h2 className="comment-title">Comments</h2>
      {comments.map((comment) => {
        return (
          <section className="comment" key={comments.comment_id}>
            <p className="comment-body">{comment.body} </p>
            <div className="comment-bar">
              <p className="comment-votes"> {comment.votes} Likes</p>
              <p className="comment-info">
                by {comment.author} at{" "}
                {dateFormatterComment(comment.created_at)}
              </p>
            </div>
            {username === comment.author && (
              <button
                className="comment-delete-button"
                onClick={() => {
                  handleDelete(comment.comment_id);
                }}
              >
                delete
              </button>
            )}
            {deleted && <p>comment deleted</p>}
          </section>
        );
      })}
    </section>
  );
};
