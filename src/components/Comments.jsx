import { React, useEffect, useState } from "react";
import { getCommentsByArticleId } from "../api";
import { dateFormatterComment } from "../dateFormatter";
import { PostComment } from "./PostComment";

export const Comments = ({ article_id }) => {
  const [comments, setComments] = useState([]);

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
      <PostComment article_id={article_id} />
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
