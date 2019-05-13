import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

//Image displays to left, fix to display center
// 

class Detail extends Component {
  state = {
    book: {}
  };

  //Loads corresponding book data 
  componentDidMount() {
    API.getBook(this.props.match.params.id)
      .then(res => this.setState({ book: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>
                {this.state.book.title} by {this.state.book.author}
              </h1>
            </Jumbotron>
            <img src = {this.state.book.image} width = "50%" height = "auto" marginLeft = "50px"></img>
          </Col>
          <Col size="md-6">
            <article>
              <Jumbotron>
                <h1>Synopsis</h1>   
              </Jumbotron>           
              <p style = {{ color: "black"}}>
                {this.state.book.synopsis}
              </p>
              <Link to="/" margin = "10px">Click Here to Return to Book List</Link>
            </article>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
