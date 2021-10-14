import React from 'react';
import { Navbar, Container, Nav, } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  const navStyle = {
    fontWeight: "bold",
    color: "red"
  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand className="fw-bold" href="#home">Easy Learning</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto fw-bold fs-4 ">
            <NavLink className="text-decoration-none me-3"
                to="/home"
                activeStyle={navStyle}
              >
                Home
              </NavLink>
            <NavLink className="text-decoration-none me-3"
                to="/courses"
                activeStyle={navStyle}
              >
                Our Services
              </NavLink>
            <NavLink className="text-decoration-none me-3"
                to="/about"
                activeStyle={navStyle}
              >
                About Us
              </NavLink>
            <NavLink className="text-decoration-none"
                to="/contact"
                activeStyle={navStyle}
              >
                Contact Us
              </NavLink>
          </Nav>
          <Nav className="fw-bold">
            <Nav.Link href="#deets">Log In</Nav.Link>
            <Nav.Link >
              Sign Up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;