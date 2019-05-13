import React from "react";

const SearchForm = props => {
  return (
    <form>
      <h2>Search the Google Books API for...</h2>
      {<hr></hr>}
      <div className = "form-group">
        <input
          onChange = {props.handleInputChange}
          value = {props.value}
          name = "search"
          type = "text"
          className = "form-control"
          placeholder = "Enter Book Name"
          id = "search"
        />
        <hr />
        <button onClick={props.handleFormSubmit} className="btn btn-success ">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;