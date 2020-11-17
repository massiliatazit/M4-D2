import React from "react";
import '../App.css';
import { Row, Col, Container } from "react-bootstrap";

const MyFooter = (props) => {
  return (
    <Container
      fluid
      className="footer fixed-bottom"
      style={{ backgroundColor: "#4A6C6F" }}
    >
      <Row>
        <Col xs={6} sm={3} md={3}>
          <h5 className="title">Footer Content</h5>
          <p>
            Currently {props.info} 
            </p>
        </Col>
        <Col md={6}>
          <h5 className="title">About US</h5>
          <ul>
          <li className="list-unstyled">
              <a href="#!">Buy book</a>
            </li>
            <li className="list-unstyled">
              <a href="#!">Rental Books</a>
            </li>
          </ul>
        </Col>
      </Row>
      <Container >
        <div className="footer-copyright text-center py-3">
          <Container fluid></Container>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.MyfavoritebooksMassy.com">
            {" "}
            MyfavoritebooksMassy.com{" "}
          </a>
        </div>
      </Container>
    </Container>
  );
};

export default MyFooter;
