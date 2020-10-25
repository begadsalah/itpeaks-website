import React from "react";
import "./Services.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { fadeIn, fadeInLeft, fadeInRight, bounce } from "react-animations";
import Radium, { StyleRoot } from "radium";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import $ from "jquery";
import { faSketch } from "@fortawesome/free-brands-svg-icons";
import { faBrain, faPencilRuler } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EmojiFoodBeverageOutlinedIcon from "@material-ui/icons/EmojiFoodBeverageOutlined";

const styles = {
  fadeIn: {
    animation: "x 3s",
    animationName: Radium.keyframes(fadeIn, "fadeIn"),
  },
  fadeInLeft: {
    animation: "x 3s",
    animationName: Radium.keyframes(fadeInLeft, "fadeInLeft"),
  },
  fadeInRight: {
    animation: "x 3s",
    animationName: Radium.keyframes(fadeInRight, "fadeInRight"),
  },
  bounce: {
    animation: "x 3s",
    animationName: Radium.keyframes(bounce, "bounce"),
  },
};
$(function () {
  $("#services-card1").hover(
    function () {
      $("#services-card2").css("opacity", "0.09");
      $("#services-card3").css("opacity", "0.09");
      $("#services-card4").css("opacity", "0.09");
    },
    function () {
      $("#services-card2").css("opacity", "1");
      $("#services-card3").css("opacity", "1");
      $("#services-card4").css("opacity", "1");
    }
  );
});
$(function () {
  $("#services-card2").hover(
    function () {
      $("#services-card1").css("opacity", "0.09");
      $("#services-card3").css("opacity", "0.09");
      $("#services-card4").css("opacity", "0.09");
    },
    function () {
      $("#services-card1").css("opacity", "1");
      $("#services-card3").css("opacity", "1");
      $("#services-card4").css("opacity", "1");
    }
  );
});
$(function () {
  $("#services-card3").hover(
    function () {
      $("#services-card1").css("opacity", "0.09");
      $("#services-card2").css("opacity", "0.09");
      $("#services-card4").css("opacity", "0.09");
    },
    function () {
      $("#services-card1").css("opacity", "1");
      $("#services-card2").css("opacity", "1");
      $("#services-card4").css("opacity", "1");
    }
  );
});
$(function () {
  $("#services-card4").hover(
    function () {
      $("#services-card1").css("opacity", "0.09");
      $("#services-card2").css("opacity", "0.09");
      $("#services-card3").css("opacity", "0.09");
    },
    function () {
      $("#services-card1").css("opacity", "1");
      $("#services-card2").css("opacity", "1");
      $("#services-card3").css("opacity", "1");
    }
  );
});
$(function () {
  $("#services-card1").hover(
    function () {
      $("#dev-icon1").css("color", "rgb(207, 136, 77)");
      $("#card-button1").css("border-color", "rgb(207, 136, 77)");
      $("#card-button1").css("color", "black");
      $("#cardTitle1").css(
        "animation",
        "tracking-in-expand 0.9s cubic-bezier(0.215, 0.610, 0.355, 1.000) both"
      );
    },
    function () {
      $("#dev-icon1").css("color", "");
      $("#card-button1").css("border-color", "");
      $("#card-button1").css("color", "");
      $("#cardTitle1").css("animation", "");
    }
  );
});
$(function () {
  $("#services-card2").hover(
    function () {
      $("#dev-icon2").css("color", "rgb(207, 136, 77)");
      $("#card-button2").css("border-color", "rgb(207, 136, 77)");
      $("#card-button2").css("color", "black");
      $("#cardTitle2").css(
        "animation",
        "tracking-in-expand 0.9s cubic-bezier(0.215, 0.610, 0.355, 1.000) both"
      );
    },
    function () {
      $("#dev-icon2").css("color", "");
      $("#card-button2").css("border-color", "");
      $("#card-button2").css("color", "");
      $("#cardTitle2").css("animation", "");
    }
  );
});
$(function () {
  $("#services-card3").hover(
    function () {
      $("#dev-icon3").css("color", "rgb(207, 136, 77)");
      $("#card-button3").css("border-color", "rgb(207, 136, 77)");
      $("#card-button3").css("color", "black");
      $("#cardTitle3").css(
        "animation",
        "tracking-in-expand 0.9s cubic-bezier(0.215, 0.610, 0.355, 1.000) both"
      );
    },
    function () {
      $("#dev-icon3").css("color", "");
      $("#card-button3").css("border-color", "");
      $("#card-button3").css("color", "");
      $("#cardTitle3").css("animation", "");
    }
  );
});
$(function () {
  $("#services-card4").hover(
    function () {
      $("#dev-icon4").css("color", "rgb(207, 136, 77)");
      $("#card-button4").css("border-color", "rgb(207, 136, 77)");
      $("#card-button4").css("color", "black");
      $("#cardTitle4").css(
        "animation",
        "tracking-in-expand 0.9s cubic-bezier(0.215, 0.610, 0.355, 1.000) both"
      );
    },
    function () {
      $("#dev-icon4").css("color", "white");
      $("#card-button4").css("border-color", "");
      $("#card-button4").css("color", "");
      $("#cardTitle4").css("animation", "");
    }
  );
});

function Services() {
  return (
    <div className="services" id="services">
      <Row className="firstRow rows">
        <Col className="firstRow-cols">
          <h1 className="firstRow-cols-title">WHAT WE DO</h1>
        </Col>
      </Row>
      <Row className="secondRow rows">
        <ScrollAnimation animateIn="animate__fadeIn" duration={3}>
          <Col className="secondRow-cols">
            <h4 className="secondRow-cols-para">
              We design and develop digital products and online experiences that
              help our clients grow, innovate, and transform.
            </h4>
          </Col>
        </ScrollAnimation>
      </Row>
      <Row className="thirdRow rows">
        <Col lg={6} md={6} sm={6} xs={12} className="thirdRow-cols  cardCol">
          <ScrollAnimation
            animateIn="animate__fadeInLeft"
            animateOut="animate__fadeOut"
            duration={1}
            className="thirdRow-cols"
          >
            <div className="services-card" id="services-card1">
              <FontAwesomeIcon
                icon={faPencilRuler}
                className="dev-icon"
                id="dev-icon1"
              />
              <h5 className="cardTitle" id="cardTitle1">
                Web & app <br />
                developing
              </h5>
              <Link to="/services">
                <button className="card-button" id="card-button1">
                  Learn more
                </button>
              </Link>
            </div>
          </ScrollAnimation>
        </Col>
        <Col lg={6} md={6} sm={6} xs={12} className="thirdRow-cols cardCol">
          <ScrollAnimation
            animateIn="animate__fadeInRight"
            animateOut="animate__fadeOut"
            duration={1}
          >
            <div className="services-card" id="services-card2">
              <FontAwesomeIcon
                icon={faSketch}
                className="dev-icon"
                id="dev-icon2"
              />
              <h5 className="cardTitle" id="cardTitle2">
                Web & app
                <br />
                designing
              </h5>
              <Link to="/services">
                <button className="card-button" id="card-button2">
                  Learn more
                </button>
              </Link>
            </div>
          </ScrollAnimation>
        </Col>
        <Col lg={6} md={6} sm={6} xs={12} className="thirdRow-cols cardCol">
          <ScrollAnimation
            animateIn="animate__fadeInLeft"
            animateOut="animate__fadeOut"
            duration={1}
          >
            <div className="services-card" id="services-card3">
              <FontAwesomeIcon
                icon={faBrain}
                className="dev-icon"
                id="dev-icon3"
              />
              <h5 className="cardTitle" id="cardTitle3">
                User interface &<br />
                user experience
              </h5>
              <Link to="/services">
                <button className="card-button" id="card-button3">
                  Learn more
                </button>
              </Link>
            </div>
          </ScrollAnimation>
        </Col>
        <Col lg={6} md={6} sm={6} xs={12} className="thirdRow-cols cardCol">
          <ScrollAnimation
            animateIn="animate__fadeInRight"
            animateOut="animate__fadeOut"
            duration={1}
          >
            <div className="services-card" id="services-card4">
              <EmojiFoodBeverageOutlinedIcon
                className="dev-icon coffeeIcon"
                id="dev-icon4"
              />
              <h5 className="cardTitle" id="cardTitle4">
                Professional <br /> consulting
              </h5>
              <Link to="/services">
                <button className="card-button" id="card-button4">
                  Learn more
                </button>
              </Link>
            </div>
          </ScrollAnimation>
        </Col>
      </Row>
      <Row className="fourthRow rows">
        <StyleRoot style={styles.fadeIn}>
          <Col className="fourthRow-cols see-more">
            <Link to="/services" className="link">
              <span className="see-more-span">SEE MORE </span>
            </Link>
            <ArrowForwardIcon className="see-more-span" />
          </Col>
        </StyleRoot>
      </Row>
    </div>
  );
}

export default Services;
