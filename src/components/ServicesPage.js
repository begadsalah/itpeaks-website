import React from "react";
import NavBar from "./NavBar.js";
import "./ServicesPage.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { faSketch } from "@fortawesome/free-brands-svg-icons";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import { faBrain, faPencilRuler } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EmojiFoodBeverageOutlinedIcon from "@material-ui/icons/EmojiFoodBeverageOutlined";

function ServicesPage() {
  return (
    <div className="services-page">
      <NavBar />
      <Row>
        <Col md={12} xs={12} className="firstRow3">
          <div className="services-page-title-div"></div>
          <h2 className="services-page-title">Services we Offer</h2>
        </Col>
      </Row>
      <Row className="secondRow3">
        <div className="index-element-mask1"></div>
        <Col className="services-index-cols" md={3} xs={12}>
          <ScrollAnimation
            animateIn="animate__fadeInLeft"
            animateOut="animate__fadeOut"
            duration={2}
          >
            <div className="services-card2" id="services-card21">
              <h5 className="cardTitle2" id="cardTitle21">
                Web & app developing
              </h5>
              <button className="card-button2" id="card-button21">
                <a className="learn-more-a-tag" href="#web-app-developing">
                  Learn more
                </a>
              </button>
            </div>
          </ScrollAnimation>
        </Col>
        <div className="index-element-mask2"></div>
        <Col className="services-index-cols" md={3} xs={12}>
          <ScrollAnimation
            animateIn="animate__fadeIn"
            animateOut="animate__fadeOut"
            duration={2}
          >
            <div className="services-card2" id="services-card22">
              <h5 className="cardTitle2" id="cardTitle22">
                Web & app designing
              </h5>
              <button className="card-button2" id="card-button22">
                <a className="learn-more-a-tag" href="#web-app-designing">
                  Learn more
                </a>
              </button>
            </div>
          </ScrollAnimation>
        </Col>
        <div className="index-element-mask3"></div>
        <Col className="services-index-cols" md={3} xs={12}>
          <ScrollAnimation
            animateIn="animate__fadeIn"
            animateOut="animate__fadeOut"
            duration={2}
          >
            <div className="services-card2" id="services-card23">
              <h5 className="cardTitle2" id="cardTitle23">
                User interface & experience
              </h5>
              <button className="card-button2" id="card-button23">
                <a className="learn-more-a-tag" href="#ui-ux">
                  Learn more
                </a>
              </button>
            </div>
          </ScrollAnimation>
        </Col>
        <div className="index-element-mask4"></div>
        <Col className="services-index-cols" md={3} xs={12}>
          <ScrollAnimation
            animateIn="animate__fadeInRight"
            animateOut="animate__fadeOut"
            duration={2}
          >
            <div className="services-card2" id="services-card24">
              <h5 className="cardTitle2" id="cardTitle24">
                Professional consulting
              </h5>
              <button className="card-button2" id="card-button24">
                <a className="learn-more-a-tag" href="#professional-consulting">
                  Learn more
                </a>
              </button>
            </div>
          </ScrollAnimation>
        </Col>
      </Row>
    </div>
  );
}

export default ServicesPage;
