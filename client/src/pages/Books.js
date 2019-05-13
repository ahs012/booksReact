import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";


class Books extends Component {
  //Setting State to hold book info
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };
  //Loads all Books once component loads
  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getAllBooks()
      .then(res =>
        this.setState({ 
          books: res.data, 
          title: "", 
          author: "", 
          synopsis: "" 
        })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };
  //As Input field changes, state will change value of corresponding field
  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  // One Form Submit, Save state data to db. Prevents submission if title&author are empty
  handleFormSubmit = e => {
    e.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
        <Col size="md-12">
            <Jumbotron>
              <h1> My Current Book List</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key = {book._id}>
                    <Link to = {"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick = {() => this.deleteBook(book._id)} />
                  </ListItem>
                ))}
                <br></br>
              </List>
            ) : (
              <h3> Sorry, the Book List is Empty :(</h3>
            )}
          </Col>
        </Row>
        <Row>
        <Col size="md-12">
            <Jumbotron>
              <h1>What Other Books Should I Read?</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
              <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              />
              <FormBtn
                //Form Submit is disabled if author and title are not included
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Book
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
