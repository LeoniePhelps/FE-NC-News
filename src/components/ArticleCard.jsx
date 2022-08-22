import React from "react";

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
    <article>
      <h2>Title: {title}</h2>
      <h3>Comment count:{comment_count}</h3>
      <h3>votes: {votes}</h3>
    </article>
  );
};
