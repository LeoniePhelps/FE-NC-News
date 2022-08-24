import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../api";

export const NavBar = () => {
  const [topicList, setTopicList] = useState([]);
  useEffect(() => {
    getTopics().then(({ data: { topics } }) => {
      setTopicList(topics);
    });
  }, []);
  return (
    <section>
      <section>
        <h2 className="news-intro">Discover Popular News Stories</h2>
      </section>
      <nav className="nav-bar">
        <Link to="/">all articles</Link>
        {topicList.map((topic) => {
          return (
            <Link key={topic.slug} to={`/topic/${topic.slug}`}>
              {topic.slug}
            </Link>
          );
        })}
      </nav>
    </section>
  );
};
