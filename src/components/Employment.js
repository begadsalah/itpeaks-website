import React from "react";
import "./Employment.css";
import Container from "@material-ui/core/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Typed from "react-typed";
import "react-typed/dist/animatedCursor.css";
import { Link } from "react-router-dom";

function Employment() {
  return (
    <div className="employment">
      <Container maxWidth="md" disableGutters>
        <Link to="/joinOurTeam" className="joinOurTeamLink">
          <Row className="employment-firstRow">
            <Col md={6} xs={12} className="firstRow-cols">
              <h1 className="cols-title">
                WE'RE <span className="cols-title-span">HI</span>RING
              </h1>
            </Col>
            <Col className="firstRow-cols" md={6} xs={12}>
              <Typed
                strings={[
                  "you're the perfect Candidate! ",
                  "If you’re creative",
                  "If you’re hard-working",
                  "If you’re passionate",
                  "Click me to apply now! ",
                ]}
                typeSpeed={65}
                backSpeed={70}
                loop
              ></Typed>
            </Col>
          </Row>
        </Link>
      </Container>
    </div>
  );
}

export default Employment;
