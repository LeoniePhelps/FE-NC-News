import { React, useEffect, useState } from "react";
import { getCommentsByArticleId } from "../api";
import { dateFormatterComment } from "../dateFormatter";

export const Comments = ({ article_id }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getCommentsByArticleId(article_id).then(({ data }) => {
      setComments(data);
    });
  }, [article_id]);
  return (
    <section>
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
          </section>
        );
      })}
    </section>
  );
};
