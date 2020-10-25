import React, { useState } from "react";
import "./Contact.css";
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
import Container from "@material-ui/core/Container";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function Contact() {
  const [value, setValue] = useState();
  const classes = useStyles();
  return (
    <Container maxWidth="xl" disableGutters>
      <div className="contact">
        <NavBar />
        <Row className="firstRow2">
          <Col md={12} xs={12} className="firstRow2-cols">
            <Col md={6} className="firstRow2-text-content">
              <ScrollAnimation
                animateIn="animate__fadeIn"
                animateOut="animate__fadeOut"
                duration={2}
              >
                <h1>Contact</h1>
              </ScrollAnimation>
            </Col>
          </Col>
        </Row>
        <Row className="thirdRow2">
          <ScrollAnimation
            animateIn="animate__fadeIn"
            animateOut="animate__fadeOut"
            duration={2}
            className="organizer connecter"
          >
            <h3>Say hello</h3>
            <p>
              Fill in the form below and we’ll be in touch with you shortly.
              Don’t worry, we will never share your information with anyone.
              Fields marked with an * are required
            </p>
          </ScrollAnimation>
        </Row>

        <Row className="secondRow2">
          <ScrollAnimation
            animateIn="animate__fadeIn"
            animateOut="animate__fadeOut"
            duration={2}
          >
            <h3 className="secondRow2-title">
              Please fill in the following inputs
            </h3>
          </ScrollAnimation>
          <form
            className={classes.root}
            noValidate
            autoComplete="off"
            className="secondRow2-form"
          >
            <Row>
              <Col md={4} xs={12} className="secondRow2-cols">
                <ScrollAnimation
                  animateIn="animate__fadeInLeft"
                  animateOut="animate__fadeOut"
                  duration={2}
                >
                  <TextField
                    id="standard-basic"
                    label="First Name"
                    type="text"
                    required
                    className="secondRow2-cols-input"
                  />
                </ScrollAnimation>
              </Col>
              <Col md={4} xs={12} className="secondRow2-cols">
                <ScrollAnimation
                  animateIn="animate__fadeIn"
                  animateOut="animate__fadeOut"
                  duration={2}
                >
                  <TextField
                    id="standard-basic"
                    label="Last Name"
                    type="text"
                    required
                    className="secondRow2-cols-input"
                  />
                </ScrollAnimation>
              </Col>

              <Col md={4} xs={12} className="secondRow2-cols">
                <ScrollAnimation
                  animateIn="animate__fadeInRight"
                  animateOut="animate__fadeOut"
                  duration={2}
                >
                  <TextField
                    id="standard-basic"
                    label="Email address"
                    type="email"
                    required
                    className="secondRow2-cols-input"
                  />
                </ScrollAnimation>
              </Col>
            </Row>
            <Row>
              <Col md={4} xs={12} className="secondRow2-cols">
                <ScrollAnimation
                  animateIn="animate__fadeInLeft"
                  animateOut="animate__fadeOut"
                  duration={2}
                >
                  <TextField
                    id="standard-basic"
                    label="Organization"
                    type="text"
                    required
                    className="secondRow2-cols-input"
                  />
                </ScrollAnimation>
              </Col>
              <Col md={4} xs={12} className="secondRow2-cols">
                <ScrollAnimation
                  animateIn="animate__fadeIn"
                  animateOut="animate__fadeOut"
                  duration={2}
                >
                  <TextField
                    id="standard-basic"
                    label="Job Title"
                    type="text"
                    required
                    className="secondRow2-cols-input"
                  />
                </ScrollAnimation>
              </Col>
              <Col md={4} xs={12} className="secondRow2-cols">
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
                    className="secondRow2-cols-input"
                    placeholder="Phone number"
                  />
                </ScrollAnimation>
              </Col>
            </Row>
            <Row>
              <Col md={12} xs={12} className="secondRow2-cols">
                <ScrollAnimation
                  animateIn="animate__fadeIn"
                  animateOut="animate__fadeOut"
                  duration={2}
                >
                  <TextField
                    id="standard-basic"
                    label="How can we help?"
                    multiline
                    rows={3}
                    rowsMax={6}
                    required
                    className="secondRow2-cols-input"
                  />
                </ScrollAnimation>
              </Col>
            </Row>
            <Row>
              <Col md={12} xs={12} className="secondRow2-cols">
                <ScrollAnimation
                  animateIn="animate__fadeIn"
                  animateOut="animate__fadeOut"
                  duration={2}
                >
                  <Button
                    variant="outlined"
                    className="secondRow2-form-button"
                    type="submit"
                  >
                    Submit
                  </Button>
                </ScrollAnimation>
              </Col>
            </Row>
          </form>
        </Row>
      </div>
    </Container>
  );
}

export default Contact;
