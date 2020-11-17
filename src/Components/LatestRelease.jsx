import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../App.css";
import items from "../data/booklibrary.json"

const LatestRelease = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Latest Releases</h1>
        </Col>
      </Row>
      <Row className="justify-content-between text-center">
        {items.map((item) => (
          <Card   border="dark" className="my-3" style={{ width: "18rem" }} key={item.asin}>
            <Card.Img variant="top" height={200} src={item.img} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text className="d-flex justify-content-between">
                <span>{item.category}</span>
                <span>zł{item.price}</span>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
  );
};

export default LatestRelease;

