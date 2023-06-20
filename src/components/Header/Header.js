import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="nav_container">
      <Link to="home">Home</Link>
      <Link to="reviews">Reviews</Link>
      <Link to="dashboard">Dashboard</Link>
      <Link to="blogs">Blogs</Link>
      <Link to="about">About</Link>
    </div>
  );
};

export default Header;
