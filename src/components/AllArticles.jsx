import { React, useEffect, useState } from "react";
import { getAllArticles } from "./api";
import { ArticleCard } from "./ArticleCard";

export const AllArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getAllArticles().then(({ data: { articles } }) => {
      setArticles(articles);
    });
  }, []);

  return (
    <section>
      {articles.map((article) => {
        return (
          <ArticleCard
            key={article.article_id}
            article_id={article.article_id}
            author={article.author_id}
            comment_count={article.comment_count}
            created_at={article.created_at}
            title={article.title}
            topic={article.topic}
            votes={article.votes}
          />
        );
      })}
    </section>
  );
};
