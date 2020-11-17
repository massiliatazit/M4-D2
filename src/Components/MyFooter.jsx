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
        
          <p className='text-center mt-2'>
            Currently {props.info} 
            </p>
        </Col>
        <Col md={6}>
          <h5 className="title mt-2">About US</h5>
          {/* <ul>
          <li className="list-unstyled">
              <a href="#!">Buy book</a>
            </li>
            <li className="list-unstyled">
              <a href="#!">Rental Books</a>
            </li>
          </ul> */}
        </Col>
       
        <div className="footer-copyright text-center py-2">
          <Container fluid></Container>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.MyfavoritebooksMassy.com">
            {" "}
            MyfavoritebooksMassy.com{" "}
          </a>
        </div>
      
      </Row>
      
    </Container>
  );
};

export default MyFooter;
