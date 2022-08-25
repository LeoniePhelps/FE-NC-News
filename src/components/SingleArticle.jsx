import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../api";
import { Votes } from "./Votes";
import { dateFormatterSingle } from "../dateFormatter";
import { Comments } from "./Comments";

export const SingleArticle = () => {
  const [singleArticle, setSingleArticle] = useState({});
  const [optimisticVotes, setOptimisticVotes] = useState();
  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id).then(({ data }) => {
      setSingleArticle(data);
      setOptimisticVotes(data.votes);
    });
  }, [article_id]);

  return (
    <div>
      <section className="single-article-card">
        <p className="single-article-topic">| {singleArticle.topic}</p>
        <h2 className="single-article-title">{singleArticle.title}</h2>
        <p className="single-article-body">{singleArticle.body}</p>
        <section className="single-article-date-author">
          <p>{dateFormatterSingle(singleArticle.created_at)}</p>
          <p>By {singleArticle.author}</p>
        </section>
      </section>
      <Votes
        article_id={article_id}
        votes={singleArticle.votes}
        optimisticVotes={optimisticVotes}
        setOptimisticVotes={setOptimisticVotes}
      />
      <Comments article_id={article_id} />
    </div>
  );
};
