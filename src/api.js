import axios from "axios";

const ncNewsBe = axios.create({
  baseURL: "https://leonie-phelps-nc-news-be.herokuapp.com/api",
});

export const getAllArticles = (slug) => {
  return ncNewsBe.get("/articles", { params: { topic: slug } });
};

export const getTopics = () => {
  return ncNewsBe.get("/topics");
};

export const getArticleById = (article_id) => {
  return ncNewsBe.get(`/articles/${article_id}`);
};

export const patchVotesByArticleId = (article_id, number) => {
  return ncNewsBe.patch(`/articles/${article_id}`, { inc_votes: number });
};
