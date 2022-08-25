import { React, useEffect, useState } from "react";
import { getCommentsByArticleId } from "../api";

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
          <p className="comment" key={comments.comment_id}>
            {comment.body}
          </p>
        );
      })}
    </section>
  );
};
