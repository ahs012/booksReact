import React from "react";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info">
      <a className="navbar-brand" href="/">
        Books React App   /
      </a>
      <a className = "navbar-brand" id = "searchBook" href = "/search">
        Book Search   /
      </a>
      <a className = "navbar-brand" id = "AddBook" href = "/books">
        Add A Book
      </a>
    </nav>
  );
}

export default Navbar;
