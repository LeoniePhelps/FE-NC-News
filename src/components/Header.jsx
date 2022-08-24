import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";

export const Header = () => {
  return (
    <section className="header">
      <Link to="/">
        <AiOutlineHome />
        <h1>NC News</h1>
      </Link>
    </section>
  );
};
