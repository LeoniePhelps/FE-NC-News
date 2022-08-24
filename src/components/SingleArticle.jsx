import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../api";

export const SingleArticle = () => {
  const [singleArticle, setSingleArticle] = useState({});
  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id).then(({ data }) => {
      setSingleArticle(data);
    });
  }, [article_id]);

  return (
    <section className="single-article">
      <h2 className="single-article-title">{singleArticle.title}</h2>
      <p className="single-article-author">{singleArticle.author}</p>
      <p className="single-article-body">{singleArticle.body}</p>
      <section className="topic-and-date">
        <p>{singleArticle.created_at}</p>
        <p>{singleArticle.topic}</p>
      </section>
    </section>
  );
};
