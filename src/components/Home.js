import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

function Home() {
  return (
    <div className="home">
      <div className="navBar">
        <Nav className="navItems">
          <Navbar
            collapseOnSelect
            expand="xl"
            className="navbar-bootstrapNavbar"
          >
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              variant="dark"
            />
            <Navbar.Collapse id="responsive-navbar-nav">
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
                    className="d-inline-block align-top navBarBrand-img"
                    alt=""
                    href="/"
                  />
                </Navbar.Brand>
              </Link>
              <Nav.Link className="blog-Nav nav-link">BLOG</Nav.Link>
              <Nav.Link className="contactUs-Nav nav-link">
                <Link to="/contact" className="contactLink">
                  CONTACT
                </Link>
              </Nav.Link>
            </Navbar.Collapse>
          </Navbar>
        </Nav>
      </div>
      <div className="home-section">
        <ScrollAnimation
          animateIn="animate__fadeIn"
          animateOut="animate__fadeIn"
          duration={2}
          className="home-section"
        >
          <Row>
            <Col>
              <h1 className="home-title">REACH THE SUMMIT</h1>
            </Col>
          </Row>
          <Row>
            <Col className="home-subtitle-col">
              <h3 className="home-subtitle">
                ITPEAKS provides solutions for all of your Technology needs We
                support you in any IT endeavor and ensure you cross the finish
                line in record time. We help you reach the top.
              </h3>
            </Col>
          </Row>
        </ScrollAnimation>
      </div>
    </div>
  );
}

export default Home;
