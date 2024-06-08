import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar expand="lg" sticky="top" style={{ background: "linear-gradient(to right, #B9B0B7, #FFFFFF)" }}>
      <Navbar.Brand href="/">Animal Catalog</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            About Us
          </Link>
          <Link to="/contact" className="nav-link">
            Contact Us
          </Link>
          <NavDropdown title="Animals" id="basic-nav-dropdown">
            <NavDropdown.Item href="/dogs">Dog</NavDropdown.Item>
            <NavDropdown.Item href="/cats">Cats</NavDropdown.Item>
            <NavDropdown.Item href="/birds">Birds</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">More Animals</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
