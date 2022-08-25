import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <section>
      <Link to="/" className="title" id="title">
        <h1>NC News</h1>
      </Link>
    </section>
  );
};
