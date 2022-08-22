import React from "react";
import { BiCommentDetail } from "react-icons/bi";
import { HiOutlineHeart } from "react-icons/hi";

export const ArticleCard = ({
  article_id,
  author,
  comment_count,
  created_at,
  title,
  topic,
  votes,
}) => {
  return (
    <article className="article-card">
      <h2>Title: {title}</h2>
      <h3 className="comment-vote">
        <section>
          <BiCommentDetail />
          {comment_count}
        </section>
        <section>
          <HiOutlineHeart /> {votes}
        </section>
      </h3>
    </article>
  );
};
