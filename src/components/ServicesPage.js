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
      <div className="services-page-content-div">
        <Row>
          <Col md={12} xs={12} className="firstRow3">
            <div className="services-page-title-div"></div>
            <h2 className="services-page-title">Services we Offer</h2>
          </Col>
        </Row>
        <Row className="secondRow3">
          <Col className="services-index-cols" md={3} xs={3}>
            <ScrollAnimation
              animateIn="animate__fadeInLeft"
              animateOut="animate__fadeOut"
              duration={1}
            >
              <div className="services-card2" id="services-card21">
                <FontAwesomeIcon icon={faPencilRuler} className="index-icon" />
                <a href="#web-app-developing" className="index-link">
                  <h5 className="cardTitle2" id="cardTitle21">
                    Web & app developing
                  </h5>
                </a>
              </div>
            </ScrollAnimation>
          </Col>
          <Col className="services-index-cols" md={3} xs={3}>
            <ScrollAnimation
              animateIn="animate__fadeIn"
              animateOut="animate__fadeOut"
              duration={1}
            >
              <div className="services-card2" id="services-card22">
                <FontAwesomeIcon icon={faSketch} className="index-icon" />
                <a href="#web-app-designing" className="index-link">
                  <h5 className="cardTitle2" id="cardTitle22">
                    Web & app designing
                  </h5>
                </a>
              </div>
            </ScrollAnimation>
          </Col>
          <Col className="services-index-cols" md={3} xs={3}>
            <ScrollAnimation
              animateIn="animate__fadeIn"
              animateOut="animate__fadeOut"
              duration={1}
            >
              <div className="services-card2" id="services-card23">
                <FontAwesomeIcon icon={faBrain} className="index-icon" />
                <a href="#ui-ux" className="index-link">
                  <h5 className="cardTitle2" id="cardTitle23">
                    User interface & experience
                  </h5>
                </a>
              </div>
            </ScrollAnimation>
          </Col>
          <Col className="services-index-cols" md={3} xs={3}>
            <ScrollAnimation
              animateIn="animate__fadeInRight"
              animateOut="animate__fadeOut"
              duration={1}
            >
              <div className="services-card2" id="services-card24">
                <EmojiFoodBeverageOutlinedIcon className="index-icon coffee-icon" />
                <a href="#professional-consulting" className="index-link">
                  <h5 className="cardTitle2" id="cardTitle24">
                    Professional consulting
                  </h5>
                </a>
              </div>
            </ScrollAnimation>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ServicesPage;
