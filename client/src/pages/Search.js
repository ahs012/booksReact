import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";
import SearchForm from "../components/SearchForm";
import BookDetails from "../components/BookDetails/index.js";
import API from "../utils/API";

  // Needs:
  // Load Books Library to State
  // Search Component - Take user input for book TITLE
  // Returns perspective book data

class Search extends Component {
    //Setting State to hold book info
    state = {
        books: [],
        title: "",
        author: "",
        synopsis: ""
      };

  // Searches the GoogleBooks API and saves books to state
  searchBooks = query => {
    API.searchBooks(query)
      .then(res =>
        this.setState({
            books: res.data.items,
            search: ""
          })
      )
      .catch(err => console.log(err));
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  // Handles User submit query and searches books from google API
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.search);
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => console.log(res.status))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size = "md-3">
          </Col>
          <Col size = "md-6">
            <Card>
              <SearchForm
                value = {this.state.search}
                handleInputChange = {this.handleInputChange}
                handleFormSubmit = {this.handleFormSubmit}
              />
            </Card>
            <br></br>
          </Col>
        </Row>
        <Row>
          <Col size = "md-12">
            {this.state.books.length ? (
              <Card>
                {this.state.books.map(book => (
                       <BookDetails
                       key = {book.id}
                       src = {book.volumeInfo.imageLinks 
                         ? book.volumeInfo.imageLinks.thumbnail
                         : "No Image"}
                       title = {book.volumeInfo.title}
                       authors = {book.volumeInfo.authors
                         ? book.volumeInfo.authors.join(", ")
                         : "N/A"}
                       date = {book.volumeInfo.publishedDate}
                       description = {book.volumeInfo.description}
                       link = {book.volumeInfo.infoLink}
                     />
                ))}
              </Card>
            ) : (
                <div>
                </div>
              )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Search;

