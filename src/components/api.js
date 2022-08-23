import axios from "axios";

export const getAllArticles = () => {
  return axios.get(
    "https://leonie-phelps-nc-news-be.herokuapp.com/api/articles"
  );
};
