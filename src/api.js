import axios from "axios";

export const getAllArticles = (slug) => {
  const topicStr = slug ? `?topic=${slug}` : ``;
  return axios.get(
    `https://leonie-phelps-nc-news-be.herokuapp.com/api/articles${topicStr}`
  );
};

export const getTopics = () => {
  return axios.get("https://leonie-phelps-nc-news-be.herokuapp.com/api/topics");
};

export const getArticleById = (article_id) => {
  return axios.get(
    `https://leonie-phelps-nc-news-be.herokuapp.com/api/articles/${article_id}`
  );
};
