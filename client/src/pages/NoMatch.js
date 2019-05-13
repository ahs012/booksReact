import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>Oooooopsies!</h1>
              <img src = "https://http.cat/404" width="25%" height="auto" alt-prop = "cat404">
              </img>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;
