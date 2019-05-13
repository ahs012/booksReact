import React from "react";
import "./style.css";

const BookDetails = props => {
  return (
    <span>
      <div className = "col-md-4" style = {{ float: "left", marginTop: "25px" }}>
        <img alt = {props.title} className = "img-fluid" src = {props.src}/>
        <p>{props.title}</p>
        <p>Author: {props.authors}</p>
        <p>Publish Date: {props.date}</p>
        <p>Book Link: 
        <a href = {props.link} target = {"_blank"} class="text-secondary" >{props.title}</a></p>
      </div>
      <div className = "col-md-8" style = {{float: "right", marginTop: "20px" }}>
        <p style = {{ marginBottom: "30px"}}><strong>Description: </strong> {props.description}</p>
      </div>
      <hr style = {{ clear: "both" }} />
    </span>
  );
}

export default BookDetails;