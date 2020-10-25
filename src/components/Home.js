import React from "react";
import "./Home.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import "./NavBar.css";
import NavBar from "./NavBar.js";
import "./Services.css";
import Services from "./Services.js";

function Home() {
  return (
    <div className="landing-page">
      <div className="home">
        <NavBar />
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
      <Services />
    </div>
  );
}

export default Home;
