import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllArticles } from "../api";
import { ArticleCard } from "./ArticleCard";
import { NavBar } from "./NavBar";

export const AllArticles = () => {
  const [articles, setArticles] = useState([]);
  const { slug } = useParams();

  useEffect(() => {
    getAllArticles(slug).then(({ data: { articles } }) => {
      setArticles(articles);
    });
  }, [slug]);

  return (
    <>
      <NavBar />
      <section className="all-articles">
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
    </>
  );
};
