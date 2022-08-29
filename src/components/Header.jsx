import { React, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import { FaUserCircle } from "react-icons/fa";


export const Header = () => {
  const { username } = useContext(UserContext);

  return (
    <header className="header">
      <Link to="/" className="title" id="title">
        <h1>NC News</h1>
      </Link>
      <section className="user-name-icon-container">
        <div className="user-icon">
          <FaUserCircle />
        </div>
        <p className="username">{username}</p>
      </section>
    </header>
  );
};
