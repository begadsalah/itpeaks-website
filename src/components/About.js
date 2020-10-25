import React from "react";
import "./About.css";
import NavBar from "./NavBar.js";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about">
      <NavBar />
      <Row className="firstRow1">
        <Col md={12} className="cols-text-content">
          <h1 className="about-us-title">About us</h1>
        </Col>
      </Row>
      <Row className="secondRow1">
        <Col md={6} className="secondRow1-items-container1">
          <ScrollAnimation
            animateIn="animate__fadeInLeft"
            animateOut="animate__fadeOut"
            duration={1}
            className="secondRow1-items-container1-1"
          >
            <h2 className="secondRow1-title">Our Capabilities.</h2>
          </ScrollAnimation>
        </Col>
        <Col md={6} className="secondRow1-items-container2">
          <Col md={4} className="secondRow1-items-cols">
            <ScrollAnimation
              animateIn="animate__fadeInRight"
              animateOut="animate__fadeOut"
              duration={1}
            >
              <p className="secondRow1-subtitle">Business Strategy</p>
              <p className="secondRow1-subtitle">UX designing</p>
              <p className="secondRow1-subtitle">Social</p>
            </ScrollAnimation>
          </Col>
          <Col md={4} className="secondRow1-items-cols">
            <ScrollAnimation
              animateIn="animate__fadeInRight"
              animateOut="animate__fadeOut"
              duration={1.5}
            >
              <p className="secondRow1-subtitle">
                Brands & <br />
                Communication
              </p>
              <p className="secondRow1-subtitle">Creative</p>
              <p className="secondRow1-subtitle">Search</p>
            </ScrollAnimation>
          </Col>
          <Col md={4} className="secondRow1-items-cols">
            <ScrollAnimation
              animateIn="animate__fadeInRight"
              animateOut="animate__fadeOut"
              duration={2}
            >
              <p className="secondRow1-subtitle">Research</p>
              <p className="secondRow1-subtitle">Content</p>
              <p className="secondRow1-subtitle">CRM</p>
            </ScrollAnimation>
          </Col>
        </Col>
      </Row>
      <Row className="thirdRow1">
        <Col md={4}>
          <ScrollAnimation
            animateIn="animate__fadeInLeft"
            animateOut="animate__fadeOut"
            duration={2}
          >
            <Col className="howWeWork-leftSide">
              <ScrollAnimation
                animateIn="animate__fadeIn"
                animateOut="animate__fadeOut"
                duration={1}
              >
                <Col md={12} className="thirdRow1-cols title-col">
                  <h1 className="thirdRow1-title">
                    <span className="howWeWork-Titlespan"> How </span>{" "}
                    <span className="howWeWork-Titlespan"> we</span>{" "}
                    <span className="howWeWork-Titlespan">work.</span>{" "}
                  </h1>
                </Col>
              </ScrollAnimation>
              <Col md={12} className="thirdRow1-cols subtitle-col">
                <ScrollAnimation
                  animateIn="animate__fadeIn"
                  animateOut="animate__fadeOut"
                  duration={1}
                >
                  <h4 className="thirdRow1-subtitle">
                    Small teams working on big challenges in honset
                    collaboration with our clients.
                  </h4>
                </ScrollAnimation>
                <Link to="/contact" className="contactLink">
                  <button className="leftSide-button">
                    Let's work together
                  </button>
                </Link>
              </Col>
            </Col>
          </ScrollAnimation>
        </Col>
        <Col md={8}>
          <ScrollAnimation
            animateIn="animate__fadeInRight"
            animateOut="animate__fadeOut"
            duration={2}
          >
            <Col className="howWeWork-rightSide">
              <Row className="how-we-work-div">
                <Col
                  md={4}
                  xs={12}
                  className="thirdRow1-cols how-we-work-section"
                >
                  <h3 className="thirdRow1-side-text">Small Teams</h3>
                </Col>
                <Col
                  md={4}
                  xs={12}
                  className="thirdRow1-cols how-we-work-section"
                >
                  <Image
                    src="https://i.ibb.co/YW1zwf7/small-team-img.png"
                    fluid
                    alt=""
                    width="250"
                    height="250"
                    rounded
                    className="rightSide-image"
                  ></Image>
                </Col>
                <Col
                  md={4}
                  xs={12}
                  className="thirdRow1-cols how-we-work-section"
                >
                  <ul>
                    <li>
                      <ScrollAnimation
                        animateIn="animate__fadeInRight"
                        animateOut="animate__fadeOut"
                        duration={1}
                        delay={2000}
                        className="text-para-container"
                      >
                        <p className="text-para">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Cupiditate
                        </p>
                      </ScrollAnimation>
                    </li>
                    <li>
                      <ScrollAnimation
                        animateIn="animate__fadeInRight"
                        animateOut="animate__fadeOut"
                        duration={1}
                        delay={2000}
                        className="text-para-container"
                      >
                        <p className="text-para">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit.
                        </p>
                      </ScrollAnimation>
                    </li>
                  </ul>
                </Col>
              </Row>
              <Row className="how-we-work-div">
                <Col md={4} className="thirdRow1-cols how-we-work-section">
                  <h3 className="thirdRow1-side-text">
                    Client as a <span className="partner-span">partner.</span>
                  </h3>
                </Col>
                <Col md={4} className="thirdRow1-cols how-we-work-section">
                  <Image
                    src="https://i.ibb.co/hZgSMgx/partners-img.png"
                    fluid
                    alt=""
                    width="350"
                    height="350"
                    className="rightSide-image2"
                    rounded
                  ></Image>
                </Col>
                <Col md={4} className="thirdRow1-cols how-we-work-section">
                  <ul>
                    <li>
                      <ScrollAnimation
                        animateIn="animate__fadeInRight"
                        animateOut="animate__fadeOut"
                        duration={1}
                        delay={2000}
                        className="text-para-container"
                      >
                        <p className="text-para">
                          Cupiditate blanditiis molestias labore nulla commodi
                          deleniti
                        </p>
                      </ScrollAnimation>
                    </li>
                    <li>
                      <ScrollAnimation
                        animateIn="animate__fadeInRight"
                        animateOut="animate__fadeOut"
                        duration={1}
                        delay={2000}
                        className="text-para-container"
                      >
                        <p className="text-para">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit.
                        </p>
                      </ScrollAnimation>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </ScrollAnimation>
        </Col>
      </Row>
      <Row className="fourthRow1">
        <div className="mask3 mask"></div>
        <div className="mask3-1 mask"></div>
        <Col className="fourthRow1-firstCols">
          <ScrollAnimation
            animateIn="animate__fadeIn"
            animateOut="animate__fadeOut"
            duration={1}
          >
            <h2 className="fourthRow1-title">LeaderShip.</h2>
          </ScrollAnimation>
        </Col>
        <Col md={12}>
          <Row>
            <div className="mask3-2-1 mask"></div>
            <Col md={4} xs={4} className="fourthRow1-cols">
              <ScrollAnimation
                animateIn="animate__fadeInLeft"
                animateOut="animate__fadeOut"
                duration={1}
                className="organizer"
              >
                <h5 className="fourthRow1-subtitle">Mohamed Salah</h5>
                <h6 className="fourthRow1-subtitle-subtitle">CEO</h6>
              </ScrollAnimation>
            </Col>
            <div className="mask3-2 mask"></div>
            <Col md={4} xs={4} className="fourthRow1-cols">
              <ScrollAnimation
                animateIn="animate__fadeIn"
                animateOut="animate__fadeOut"
                duration={1}
                className="organizer"
              >
                <h5 className="fourthRow1-subtitle">Ahmed Den</h5>
                <h6 className="fourthRow1-subtitle-subtitle">
                  Presedent & COO
                </h6>
              </ScrollAnimation>
            </Col>
            <div className="mask3-2-2 mask"></div>
            <Col md={4} xs={4} className="fourthRow1-cols">
              <ScrollAnimation
                animateIn="animate__fadeInRight"
                animateOut="animate__fadeOut"
                duration={1}
                className="organizer"
              >
                <h5 className="fourthRow1-subtitle">Mark darwin</h5>
                <h6 className="fourthRow1-subtitle-subtitle">CFO</h6>
              </ScrollAnimation>
            </Col>
          </Row>
          <Row>
            <div className="mask3-2-1 mask"></div>
            <Col md={4} xs={4} className="fourthRow1-cols">
              <ScrollAnimation
                animateIn="animate__fadeInLeft"
                animateOut="animate__fadeOut"
                duration={1}
                className="organizer"
              >
                <h5 className="fourthRow1-subtitle">Sally</h5>
                <h6 className="fourthRow1-subtitle-subtitle">Team member</h6>
              </ScrollAnimation>
            </Col>
            <div className="mask3-2 mask"></div>
            <Col md={4} xs={4} className="fourthRow1-cols">
              <ScrollAnimation
                animateIn="animate__fadeIn"
                animateOut="animate__fadeOut"
                duration={1}
                className="organizer"
              >
                <h5 className="fourthRow1-subtitle">Dan frank</h5>
                <h6 className="fourthRow1-subtitle-subtitle">Team member</h6>
              </ScrollAnimation>
            </Col>
            <div className="mask3-2-2 mask"></div>
            <Col md={4} xs={4} className="fourthRow1-cols">
              <ScrollAnimation
                animateIn="animate__fadeInRight"
                animateOut="animate__fadeOut"
                duration={1}
                className="organizer"
              >
                <h5 className="fourthRow1-subtitle">Code fel</h5>
                <h6 className="fourthRow1-subtitle-subtitle">Team member</h6>
              </ScrollAnimation>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default About;
