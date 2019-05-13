import React from "react";
import "./style.css";
//Jumbotron Component

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 100, paddingTop: 40, marginTop: 15, marginBottom: 15, textAlign: "center" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
