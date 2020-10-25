import React, { useState } from "react";
import "./JoinUs.css";
import NavBar from "./NavBar.js";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Button from "@material-ui/core/Button";
import "./Contact.css";
import Popup from "./Popup.js";
import Popup2 from "./Popup2.js";
import Popup3 from "./Popup3.js";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function JoinUs() {
  const [value, setValue] = useState();
  const classes = useStyles();
  return (
    <div className="join-us">
      <NavBar />
      <Row className="firstRow4">
        <ScrollAnimation
          animateIn="animate__fadeIn"
          animateOut="animate__fadeOut"
          duration={2}
        >
          <Col md={12} xs={12} className="firstRow4-cols join-us-col">
            <div className="firstRow4-mask"></div>
            <h1 className="firstRow4-title">
              Join <span className="title-span1">Us</span>
            </h1>
          </Col>
        </ScrollAnimation>
      </Row>
      <ScrollAnimation
        animateIn="animate__fadeIn"
        animateOut="animate__fadeOut"
        duration={2}
      >
        <Row className="our-story2">
          <h4 className="our-story2-h4">Join Our Team</h4>
          <p>
            Apply to our open positions below or contact us at
            careers@itpeaks.com to learn more about employment opportunities.
          </p>
        </Row>
      </ScrollAnimation>
      <Row className="thirdRow4">
        <Row className="thirdRow4-row1">
          <Col className="thirdRow4-cols1" md={12} xs={12}>
            <ScrollAnimation
              animateIn="animate__fadeIn"
              animateOut="animate__fadeOut"
              duration={2}
            >
              <h1 className="thirdRow4-cols1-h1">Job Board</h1>
            </ScrollAnimation>
          </Col>
          <Col className="thirdRow4-cols1" md={12} xs={12}>
            <ScrollAnimation
              animateIn="animate__fadeIn"
              animateOut="animate__fadeOut"
              duration={2}
            >
              <h4>Available Positions</h4>
            </ScrollAnimation>
          </Col>
        </Row>
        <Row className="thirdRow4-row2">
          <Col md={6} xs={12}>
            <ScrollAnimation
              animateIn="animate__fadeInLeft"
              animateOut="animate__fadeOut"
              duration={2}
              className="thirdRow4-cols2"
            >
              <Col md={12} xs={12}>
                <h4 className="thirdRow4-cols2-h4">Sr. CRM Developer</h4>
                <h6 className="thirdRow4-cols2-h6">
                  Aswan, Egypt • Full-time •
                </h6>
                <div className="button-div">
                  <Popup />
                  <a href="#apply" className="apply-button">
                    Apply
                  </a>
                </div>
              </Col>
            </ScrollAnimation>
          </Col>
          <Col md={6} xs={12}>
            <ScrollAnimation
              animateIn="animate__fadeInRight"
              animateOut="animate__fadeOut"
              duration={2}
              className="thirdRow4-cols2"
            >
              <Col md={12} xs={12}>
                <h4 className="thirdRow4-cols2-h4">Frontend Developer</h4>
                <h6 className="thirdRow4-cols2-h6">
                  Aswan, Egypt • Full-time •
                </h6>
                <div className="button-div">
                  <Popup2 />
                  <a href="#apply" className="apply-button">
                    Apply
                  </a>
                </div>
              </Col>
            </ScrollAnimation>
          </Col>
          <Col md={6} xs={12}>
            <ScrollAnimation
              animateIn="animate__fadeIn"
              animateOut="animate__fadeOut"
              duration={2}
              className="thirdRow4-cols2"
            >
              <Col md={12} xs={12}>
                <h4 className="thirdRow4-cols2-h4">Sr. SharePoint Developer</h4>
                <h6 className="thirdRow4-cols2-h6">
                  Aswan, Egypt • Full-time •
                </h6>
                <div className="button-div">
                  <Popup3 />
                  <a href="#apply" className="apply-button">
                    Apply
                  </a>
                </div>
              </Col>
            </ScrollAnimation>
          </Col>
        </Row>
      </Row>
      <Row className="secondRow2-1">
        <div className="apply-div">
          <ScrollAnimation
            animateIn="animate__fadeIn"
            animateOut="animate__fadeOut"
            duration={2}
          >
            <h3 className="secondRow2-title-1" id="apply">
              Apply Now
            </h3>
          </ScrollAnimation>
          <form
            className={classes.root}
            noValidate
            autoComplete="off"
            className="secondRow2-form-1"
          >
            <Row>
              <Col md={6} xs={12} className="secondRow2-cols-1">
                <ScrollAnimation
                  animateIn="animate__fadeInLeft"
                  animateOut="animate__fadeOut"
                  duration={2}
                >
                  <TextField
                    id="standard-basic"
                    label="Job Title that you applying for"
                    type="text"
                    required
                    className="secondRow2-cols-1-input"
                  />
                </ScrollAnimation>
              </Col>
              <Col md={6} xs={12} className="secondRow2-1-cols">
                <ScrollAnimation
                  animateIn="animate__fadeInRight"
                  animateOut="animate__fadeOut"
                  duration={2}
                >
                  <PhoneInput
                    international
                    defaultCountry="EG"
                    value={value}
                    onChange={setValue}
                    className="secondRow2-cols-1-input"
                    placeholder="Phone number"
                  />
                </ScrollAnimation>
              </Col>
              <Col md={12} xs={12} className="secondRow2-1-cols">
                <ScrollAnimation
                  animateIn="animate__fadeInLeft"
                  animateOut="animate__fadeOut"
                  duration={1}
                >
                  <div className="file-input-div">
                    <input
                      type="file"
                      name="file"
                      id="file"
                      class="inputfile"
                    />
                    <label for="file">Please insert your resume *</label>
                  </div>
                </ScrollAnimation>
              </Col>
            </Row>
            <Row>
              <Col md={12} xs={12} className="secondRow2-1-cols">
                <ScrollAnimation
                  animateIn="animate__fadeIn"
                  animateOut="animate__fadeOut"
                  duration={1}
                >
                  <TextField
                    id="standard-basic"
                    label="What makes you the perfect candidate?"
                    multiline
                    rows={4}
                    rowsMax={6}
                    required
                    className="secondRow2-cols-input-1"
                  />
                </ScrollAnimation>
              </Col>
            </Row>
            <Row>
              <Col md={12} xs={12} className="secondRow2-1-cols">
                <ScrollAnimation
                  animateIn="animate__fadeIn"
                  animateOut="animate__fadeOut"
                  duration={1}
                >
                  <Button
                    variant="outlined"
                    className="secondRow2-form-button-1"
                    type="submit"
                  >
                    Submit
                  </Button>
                </ScrollAnimation>
              </Col>
            </Row>
          </form>
        </div>
      </Row>
    </div>
  );
}

export default JoinUs;
