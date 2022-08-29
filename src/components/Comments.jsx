import { React, useEffect, useState } from "react";
import { getCommentsByArticleId } from "../api";
import { CommentCard } from "./CommentCard";
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
      <PostComment
        article_id={article_id}
        setComments={setComments}
        comments={comments}
      />
      <h2 className="comment-title">Comments</h2>
      {comments.map((comment) => {
        return (
          <CommentCard
            comments={comments}
            setComments={setComments}
            comment={comment}
            key={comment.comment_id}
          />
        );
      })}
    </section>
  );
};
