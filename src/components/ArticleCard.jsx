import React from "react";
import { BiCommentDetail } from "react-icons/bi";
import { HiOutlineHeart } from "react-icons/hi";
import { Link } from "react-router-dom";

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
      <Link className="article-link" to={`/${article_id}`}>
        <h2>{title}</h2>
        <h3 className="comment-vote">
          <section>
            <BiCommentDetail />
            {comment_count}
          </section>
          <section>
            <HiOutlineHeart /> {votes}
          </section>
        </h3>
      </Link>
    </article>
  );
};
