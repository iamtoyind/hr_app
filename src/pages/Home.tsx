import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="hr-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project was generated By{" "}
        <a href="#">Human Resource</a>
      </p>
      <ul>
        <li>
          <Link to="/">FrameOne</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
