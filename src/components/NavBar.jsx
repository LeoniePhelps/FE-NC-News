import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../api";

export const NavBar = ({ setSortBy, setOrder }) => {
  const [topicList, setTopicList] = useState([]);
  useEffect(() => {
    getTopics().then(({ data: { topics } }) => {
      setTopicList(topics);
    });
  }, []);

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleOrderChange = (event) => {
    setOrder(event.target.value);
  };

  return (
    <section>
      <section>
        <h2 className="news-intro">Discover Popular News Stories</h2>
      </section>
      <nav className="nav-bar">
        <Link className="all-articles-link" to="/">
          all articles
        </Link>
        {topicList.map((topic) => {
          return (
            <Link
              className={topic.slug}
              key={topic.slug}
              to={`/topic/${topic.slug}`}
            >
              {topic.slug}
            </Link>
          );
        })}
      </nav>
      <section className="filter-order">
        <select className="sort-by-filter" onChange={handleSortChange}>
          <option value="" disabled selected>
            sort by...
          </option>
          <option value="created_at">created at</option>
          <option value="votes">votes</option>
          <option value="title">title</option>
        </select>
        <select className="order-by-filter" onChange={handleOrderChange}>
          <option value="" disabled selected>
            order by...
          </option>
          <option value="DESC">descending</option>
          <option value="ASC">ascending</option>
        </select>
      </section>
    </section>
  );
};
