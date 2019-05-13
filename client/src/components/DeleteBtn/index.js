import React from "react";
import "./style.css";

// Add Below when sound function is added for delete click sounds
//  onClick = "pewpew.play()
function DeleteButton(props) {
  return (
    <span className = "delete-button" {...props} role = "button">
      Delete Book
    </span>
  );
}

export default DeleteButton;
