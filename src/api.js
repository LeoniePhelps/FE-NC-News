import axios from "axios";

const ncNewsBe = axios.create({
  baseURL: "https://leonie-phelps-nc-news-be.herokuapp.com/api",
});

export const getAllArticles = (slug, sortBy, order) => {
  return ncNewsBe.get("/articles", {
    params: { topic: slug, sort_by: sortBy, order: order },
  });
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

export const getCommentsByArticleId = (article_id) => {
  return ncNewsBe.get(`/articles/${article_id}/comments`);
};

export const postCommentByArticleId = (username, body, article_id) => {
  return ncNewsBe.post(`/articles/${article_id}/comments`, {
    username: username,
    body: body,
  });
};

export const deleteCommentByCommentId = (comment_id) => {
  return ncNewsBe.delete(`comments/${comment_id}`);
};
