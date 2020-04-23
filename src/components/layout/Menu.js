import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

function Menu() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Collapse id="basic-navbar-nav">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="mr-auto">
          <Nav.Link  to="./Home" >Home</Nav.Link>
            <Nav.Link to="./ContactPage">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Menu;


//And in javascript_frameworks I dont get the meny to work, and it is in my eyes identical to the other two projects. Also I haven't figured out how to fix the path based on id's from the API. You wrote a tips in my feedback, but I haven't solved it 