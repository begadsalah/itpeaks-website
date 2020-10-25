import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function NavBar() {
  return (
    <div>
      <div className="navBar">
        <Nav className="navItems">
          <Navbar collapseOnSelect>
            <Link to="/">
              <Navbar.Brand className="navBarBrand2" href="/">
                <img
                  src="https://i.ibb.co/RBwNtkX/itpeaks-Logo-Edited.png"
                  width="70"
                  height="70"
                  className="d-inline-block align-top navBarBrand-img"
                  alt=""
                  href="/"
                />
              </Navbar.Brand>
            </Link>
          </Navbar>
          <Navbar
            collapseOnSelect
            expand="xl"
            className="navbar-bootstrapNavbar"
          >
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link className="blog-Nav nav-link">
                  <Link to="/services" className="servicesLink">
                    SERVICES
                  </Link>
                </Nav.Link>
                <Nav.Link className="contactUs-Nav nav-link">
                  <Link to="/about" className="aboutLink">
                    ABOUT
                  </Link>
                </Nav.Link>
                <Link to="/">
                  <Navbar.Brand className="navBarBrand" href="/">
                    <img
                      src="https://i.ibb.co/RBwNtkX/itpeaks-Logo-Edited.png"
                      width="90"
                      height="90"
                      className="navBarBrand-img"
                      alt=""
                      href="/"
                    />
                  </Navbar.Brand>
                </Link>
                <Nav.Link className="blog-Nav nav-link">
                  <Link to="/contact" className="contactLink">
                    BLOG
                  </Link>
                </Nav.Link>
                <Nav.Link className="contactUs-Nav nav-link">
                  <Link to="/contact" className="contactLink">
                    CONTACT
                  </Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Nav>
      </div>
    </div>
  );
}

export default NavBar;
