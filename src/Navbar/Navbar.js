import React, { useEffect } from "react";
import "./Navbar.css";
import logo from "../images/logo.png";
import { AiOutlineSearch } from "react-icons/ai";

function Navbar({ search, setSearch }) {
  useEffect(() => {}, [search]);
  return (
    <>
      <div className="Navbar">
        <div className="logo">
          <img src={logo} />
        </div>
        <div className="searchbox">
          <div className="search-icon">
            <AiOutlineSearch />
          </div>
          <div className="search-inbox">
            <input
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              type="text"
              placeholder="Search for the movie"
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Navbar;
