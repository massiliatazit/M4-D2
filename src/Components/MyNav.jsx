import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

const MyNav =(props)=>{

    return(

<div>

        <Navbar bg="dark"  variant ='dark' sticky='top' expand="lg">
    <Navbar.Brand href="#home">  Strive {props.title} Store</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">About</Nav.Link>
      <Nav.Link href="#link">Browse</Nav.Link>
      
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
</div>
    )
}

export default MyNav ;




