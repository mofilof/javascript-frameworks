import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import SearchGames from "../games/SearchGames";


function Menu() {
  return (
    <>
      <Navbar className="fixed-top" bg="dark" variant="dark" expand="lg">
        <Navbar.Collapse id="basic-navbar-nav">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="mr-auto">
            <Nav.Link to="/home" >Home</Nav.Link>
            <Nav.Link to="/contact">Contact</Nav.Link>


          </Nav>
        </Navbar.Collapse>
      </Navbar>


    </>
  );
}

export default Menu;
