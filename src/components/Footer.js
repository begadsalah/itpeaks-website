import React from "react";
import "./Footer.css";
/*import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";*/
import { MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

function Footer() {
  return (
    <div className="footer">
      <MDBFooter color="blue" className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow className="mdb-row">
            <h5 className="title">Want more details ? </h5>
            <p>You can find us on . . .</p>
            <div className="socialMedia-div">
              <a href="https://www.facebook.com/ITPeaks-108659560813563">
                <FacebookIcon />
              </a>
              <a href="https://twitter.com/IT_Peaks">
                <TwitterIcon />
              </a>
              <a href="https://www.instagram.com/itpeaks/">
                <InstagramIcon />
              </a>
            </div>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright:
            <a href="/" className="a-copyrights">
              <span> </span> ITPeaks. All rights reserved.
            </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    </div>
  );
}

export default Footer;
