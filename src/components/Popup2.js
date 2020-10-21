import React, { Component } from "react";
import Modal from "react-awesome-modal";
import "./Popup.css";

export default class Popup2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  openModal() {
    this.setState({
      visible: true,
    });
  }

  closeModal() {
    this.setState({
      visible: false,
    });
  }

  render() {
    return (
      <section className="popup-section">
        <input
          type="button"
          value="Learn more"
          onClick={() => this.openModal()}
          className="learn-more-button"
        />
        <Modal
          visible={this.state.visible}
          width="800"
          height="600"
          effect="fadeInUp"
          onClickAway={() => this.closeModal()}
          className="popup-modal"
        >
          <div className="popup-para-div">
            <h1 className="popup-h1">Frontend Developer</h1>
            <h4 className="popup-h4">Aswan, Egypt • Full-time •</h4>
            <p>
              We are looking to hire a talented Front-End Web Developer to
              combine the art of design with the art of programming.
              Responsibilities will include translation of the UI/UX design
              wireframes to actual code that will produce visual elements of the
              application. The candidate will work with the UI/UX designer and
              bridge the gap between graphical design and technical
              implementation, taking an active role on both sides and defining
              how the application looks as well as how it works. Ideal candidate
              should have an eye for design and Someone with startup chops, who
              has been there and done that in a fast moving environment. ii. Key
              Activities • Develop new user-facing features • Build reusable
              code and libraries for future use • Ensure the technical
              feasibility of UI/UX designs • Optimize application for maximum
              speed and scalability • Assure that all user input is validated
              before submitting to back-end • Collaborate with other team
              members and stakeholders • Proficient understanding of web markup,
              including HTML5, CSS3 • Proficient understanding of client-side
              scripting and JavaScript frameworks, including jQuery • Proficient
              understanding of cross-browser compatibility issues and ways to
              work around them. • Proficient understanding of code versioning
              tools, such as Git, TFS etc. • Good understanding of SEO
              principles and ensuring that application will follow them. •
              Studying systems flow, data usage, and work processes; performs
              software design using software development fundamentals and
              processes, debug, test, and deploy software solutions.
            </p>
            <div className="close-button-div"></div>
            <a
              className="popup-close-button"
              href="javascript:void(0);"
              onClick={() => this.closeModal()}
            >
              Close
            </a>
          </div>
        </Modal>
      </section>
    );
  }
}
