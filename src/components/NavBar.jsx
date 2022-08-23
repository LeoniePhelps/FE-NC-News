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
    <nav className="nav-bar">
      {topicList.map((topic) => {
        return (
          <Link key={topic.slug} to={`/topic/${topic.slug}`}>
            {topic.slug}
          </Link>
        );
      })}
    </nav>
  );
};
