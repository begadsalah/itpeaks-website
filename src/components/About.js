import React from "react";
import "./About.css";
import NavBar from "./NavBar.js";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

function About() {
  return (
    <div className="about">
      <NavBar />
      <Row className="firstRow1">
        <Col md={12} xs={12} className="firstRow1-cols">
          <Col md={6} className="cols-text-content">
            <h1>
              About <span className="span-black-part">US</span>
            </h1>
          </Col>
        </Col>
        <ScrollAnimation
          animateIn="animate__fadeIn"
          animateOut="animate__fadeOut"
          duration={2}
        >
          <Row className="our-story">
            <h4 className="our-story-h4">Our Story</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              itaque, magni labore dolor ea consequuntur ab dolore. Mollitia
              possimus minima, quasi, natus laborum autem dolore facilis
              suscipit sunt nulla ex.
            </p>
          </Row>
        </ScrollAnimation>
      </Row>

      <Row className="secondRow1">
        <div className="mask1 mask"></div>
        <div className="mask1-1 mask"></div>
        <div className="mask1-2 mask"></div>
        <Col md={12} className="secondRow1-cols">
          <ScrollAnimation
            animateIn="animate__fadeIn"
            animateOut="animate__fadeOut"
            duration={2}
            className="secondRow1-cols"
          >
            <h2 className="secondRow1-title">Our Capabilities.</h2>
          </ScrollAnimation>
        </Col>
        <ScrollAnimation
          animateIn="animate__fadeInLeft"
          animateOut="animate__fadeOut"
          duration={2}
          className="secondRow1-cols"
        >
          <Col md={4} xs={12} className="secondRow1-cols">
            <h5 className="secondRow1-subtitle">Business Strategy</h5>
          </Col>
          <Col md={4} xs={12} className="secondRow1-cols">
            <h5 className="secondRow1-subtitle">User Experience designing</h5>
          </Col>
          <Col md={4} xs={12} className="secondRow1-cols">
            <h5 className="secondRow1-subtitle">Social</h5>
          </Col>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="animate__fadeInRight"
          animateOut="animate__fadeOut"
          duration={2}
          className="secondRow1-cols"
        >
          <Col md={4} xs={12} className="secondRow1-cols">
            <h5 className="secondRow1-subtitle">Brands & Communication</h5>
          </Col>
          <Col md={4} xs={12} className="secondRow1-cols">
            <h5 className="secondRow1-subtitle">Creative</h5>
          </Col>
          <Col md={4} xs={12} className="secondRow1-cols">
            <h5 className="secondRow1-subtitle">Search</h5>
          </Col>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="animate__fadeInLeft"
          animateOut="animate__fadeOut"
          duration={2}
          className="secondRow1-cols"
        >
          <Col md={4} xs={12} className="secondRow1-cols">
            <h5 className="secondRow1-subtitle">Data science</h5>
          </Col>
          <Col md={4} xs={12} className="secondRow1-cols">
            <h5 className="secondRow1-subtitle">Technology</h5>
          </Col>
          <Col md={4} xs={12} className="secondRow1-cols">
            <h5 className="secondRow1-subtitle">Media</h5>
          </Col>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="animate__fadeInRight"
          animateOut="animate__fadeOut"
          duration={2}
          className="secondRow1-cols"
        >
          <Col md={4} xs={12} className="secondRow1-cols">
            <h5 className="secondRow1-subtitle">Research</h5>
          </Col>
          <Col md={4} xs={12} className="secondRow1-cols">
            <h5 className="secondRow1-subtitle">Content</h5>
          </Col>
          <Col md={4} xs={12} className="secondRow1-cols">
            <h5 className="secondRow1-subtitle">CRM</h5>
          </Col>
        </ScrollAnimation>
      </Row>
      <Row className="thirdRow1">
        <div className="mask2 mask"></div>
        <div className="mask2-1 mask"></div>
        <ScrollAnimation
          animateIn="animate__fadeIn"
          animateOut="animate__fadeOut"
          duration={2}
          className="secondRow1-cols"
        >
          <Col md={12} className="thirdRow1-cols title-col">
            <h1 className="thirdRow1-title">How we work.</h1>
          </Col>
        </ScrollAnimation>

        <Col md={12} className="thirdRow1-cols subtitle-col">
          <ScrollAnimation
            animateIn="animate__fadeIn"
            animateOut="animate__fadeOut"
            duration={2}
            className="secondRow1-cols"
          >
            <h4 className="thirdRow1-subtitle">
              Small teams working on big challenges in honset collaboration with
              our clients.
            </h4>
          </ScrollAnimation>
        </Col>
        <Row className="how-we-work-div">
          <Col md={4} xs={12} className="thirdRow1-cols how-we-work-section">
            <ScrollAnimation
              animateIn="animate__fadeInLeft"
              animateOut="animate__fadeOut"
              duration={2}
            >
              <h3>Small Teams</h3>
            </ScrollAnimation>
          </Col>
          <Col md={4} xs={12} className="thirdRow1-cols how-we-work-section">
            <ScrollAnimation
              animateIn="animate__fadeIn"
              animateOut="animate__fadeOut"
              duration={2}
            >
              <Image
                src="https://i.ibb.co/YW1zwf7/small-team-img.png"
                fluid
                alt=""
                width="400"
                height="400"
                rounded
              ></Image>
            </ScrollAnimation>
          </Col>
          <Col md={4} xs={12} className="thirdRow1-cols how-we-work-section">
            <ul>
              <ScrollAnimation
                animateIn="animate__fadeInRight"
                animateOut="animate__fadeOut"
                duration={2}
              >
                <li>
                  <p className="text-para">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Cupiditate blanditiis molestias labore nulla commodi
                    deleniti
                  </p>
                </li>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="animate__fadeInRight"
                animateOut="animate__fadeOut"
                duration={2}
              >
                <li>
                  <p className="text-para">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </p>
                </li>
              </ScrollAnimation>
            </ul>
          </Col>
        </Row>
        <Row className="how-we-work-div">
          <Col md={4} xs={12} className="thirdRow1-cols how-we-work-section">
            <ScrollAnimation
              animateIn="animate__fadeInLeft"
              animateOut="animate__fadeOut"
              duration={2}
            >
              <h3>
                Client as a <span className="partner-span">partner.</span>
              </h3>
            </ScrollAnimation>
          </Col>
          <Col md={4} xs={12} className="thirdRow1-cols how-we-work-section">
            <ScrollAnimation
              animateIn="animate__fadeIn"
              animateOut="animate__fadeOut"
              duration={2}
            >
              <Image
                src="https://i.ibb.co/hZgSMgx/partners-img.png"
                fluid
                alt=""
                width="500"
                height="500"
                rounded
              ></Image>
            </ScrollAnimation>
          </Col>
          <Col md={4} xs={12} className="thirdRow1-cols how-we-work-section">
            <ul>
              <ScrollAnimation
                animateIn="animate__fadeInRight"
                animateOut="animate__fadeOut"
                duration={2}
              >
                <li>
                  <p className="text-para">
                    Cupiditate blanditiis molestias labore nulla commodi
                    deleniti
                  </p>
                </li>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="animate__fadeInRight"
                animateOut="animate__fadeOut"
                duration={2}
              >
                <li>
                  <p className="text-para">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </p>
                </li>
              </ScrollAnimation>
            </ul>
          </Col>
        </Row>
      </Row>
      <Row className="fourthRow1">
        <div className="mask3 mask"></div>
        <div className="mask3-1 mask"></div>
        <Col className="fourthRow1-cols">
          <ScrollAnimation
            animateIn="animate__fadeIn"
            animateOut="animate__fadeOut"
            duration={3}
          >
            <h2 className="fourthRow1-title">LeaderShip.</h2>
          </ScrollAnimation>
        </Col>
        <Col md={12}>
          <Row>
            <div className="mask3-2-1 mask"></div>
            <Col md={4} xs={12} className="fourthRow1-cols">
              <ScrollAnimation
                animateIn="animate__fadeInLeft"
                animateOut="animate__fadeOut"
                duration={2}
                className="organizer"
              >
                <h5 className="fourthRow1-subtitle">Mohamed Salah</h5>
                <h6 className="fourthRow1-subtitle-subtitle">CEO</h6>
              </ScrollAnimation>
            </Col>
            <div className="mask3-2 mask"></div>
            <Col md={4} xs={12} className="fourthRow1-cols">
              <ScrollAnimation
                animateIn="animate__fadeIn"
                animateOut="animate__fadeOut"
                duration={3}
                className="organizer"
              >
                <h5 className="fourthRow1-subtitle">Ahmed Den</h5>
                <h6 className="fourthRow1-subtitle-subtitle">
                  Presedent & COO
                </h6>
              </ScrollAnimation>
            </Col>
            <div className="mask3-2-2 mask"></div>
            <Col md={4} xs={12} className="fourthRow1-cols">
              <ScrollAnimation
                animateIn="animate__fadeInRight"
                animateOut="animate__fadeOut"
                duration={2}
                className="organizer"
              >
                <h5 className="fourthRow1-subtitle">Mark darwin</h5>
                <h6 className="fourthRow1-subtitle-subtitle">CFO</h6>
              </ScrollAnimation>
            </Col>
          </Row>
          <Row>
            <div className="mask3-2-1 mask"></div>
            <Col md={4} xs={12} className="fourthRow1-cols">
              <ScrollAnimation
                animateIn="animate__fadeInLeft"
                animateOut="animate__fadeOut"
                duration={2}
                className="organizer"
              >
                <h5 className="fourthRow1-subtitle">Sally</h5>
                <h6 className="fourthRow1-subtitle-subtitle">Team member</h6>
              </ScrollAnimation>
            </Col>
            <div className="mask3-2 mask"></div>
            <Col md={4} xs={12} className="fourthRow1-cols">
              <ScrollAnimation
                animateIn="animate__fadeIn"
                animateOut="animate__fadeOut"
                duration={3}
                className="organizer"
              >
                <h5 className="fourthRow1-subtitle">Dan frank</h5>
                <h6 className="fourthRow1-subtitle-subtitle">Team member</h6>
              </ScrollAnimation>
            </Col>
            <div className="mask3-2-2 mask"></div>
            <Col md={4} xs={12} className="fourthRow1-cols">
              <ScrollAnimation
                animateIn="animate__fadeInRight"
                animateOut="animate__fadeOut"
                duration={2}
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
