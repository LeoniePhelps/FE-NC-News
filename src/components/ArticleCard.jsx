import React from "react";
import { BiCommentDetail } from "react-icons/bi";
import { TbHeart } from "react-icons/tb";
import { Link } from "react-router-dom";
import { dateFormatterCard } from "../dateFormatter";

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
      <Link to={`/${article_id}`}>
        <h2 className="article-card-title">{title}</h2>
        <section className="card-info">
          <p>{dateFormatterCard(created_at)}</p>
          <div>
            <BiCommentDetail />
            {comment_count}
          </div>
          <div>
            <TbHeart /> {votes}
          </div>
        </section>
      </Link>
    </article>
  );
};
