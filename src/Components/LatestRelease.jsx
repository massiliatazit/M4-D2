import React from "react";
import "../App.css";
import { Dropdown, Row, Container, Card, Modal, Button } from "react-bootstrap";

import FantasyBooks from "../data/Fantasy.json";
import RomanceBooks from "../data/Romance.json";
import HorrorBooks from "../data/Horror.json";
import HistoryBooks from "../data/History.json";
import ScienceBooks from "../data/ScienBooks.json";
import CommentArea from "./CommentArea";

let bookCategories = [
  "FantasyBooks",
  "RomanceBooks",
  "HorrorBooks",
  "HistoryBooks",
  "ScienceBooks",
];
let books = {
  FantasyBooks,
  RomanceBooks,
  HorrorBooks,
  HistoryBooks,
  ScienceBooks,
};
export default class LatestReleases extends React.Component {
  state = {
    books: books.RomanceBooks,
    categorySelected: "RomanceBooks",
    isOpen: false,
    selectedBook: {},
  };
  DropDownChange = (category) => {
    this.setState({ books: books[category], categorySelected: category });
  };
  closeModal = () => this.setState({ isOpen: false });
  openModal = (book) => {
    //const id = event.currentTarget.id;
    //let selectedbook = this.state.books.find((book) => book.asin === id);

    this.setState({ selectedBook: book, isOpen: true });
  };

  render() {
    return (
      <div>
        <Modal show={this.state.isOpen} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CommentArea
              bookID={this.state.selectedBook.asin}
              image={this.state.selectedBook.img}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <Row>
          <Container>
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-basic"
                style={{ backgroundColor: "#135144" }}
              >
                book
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {bookCategories.map((category, index) => {
                  return (
                    <Dropdown.Item
                      href="#"
                      key={`dropdown-category-${index}`}
                      onClick={() => this.DropDownChange(category)}
                    >
                      {category}
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Row>
        <Row className="justify-content-between text-center">
          {this.state.books.map((item) => (
            <Card
              border="dark"
              className="m-3"
              style={{ width: "18rem" }}
              key={item.asin}
            >
              <Card.Img variant="top" src={item.img} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text className="d-flex justify-content-between">
                  <span>{item.category}</span>
                  <span>{item.price} zł</span>
                </Card.Text>

                <Button variant="primary" onClick={() => this.openModal(item)}>
                  See comments
                </Button>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </div>
    );
  }
}
