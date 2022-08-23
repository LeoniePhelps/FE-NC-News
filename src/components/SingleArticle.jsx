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
    <div>
      <h2>{singleArticle.title}</h2>
      <p>{singleArticle.author}</p>
      <p>{singleArticle.body}</p>
      <p>{singleArticle.created_at}</p>
      <p>{singleArticle.topic}</p>
    </div>
  );
};
