import React, { Component } from "react";
import Modal from "react-awesome-modal";
import "./Popup.css";

export default class Popup3 extends Component {
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
            <h1 className="popup-h1">Sr. SharePoint Developer</h1>
            <h4 className="popup-h4">Aswan, Egypt • Full-time •</h4>
            <p>
              We are looking for a candidate who knows how apply current
              graphics design and .NET technologies to develop, modify, maintain
              SharePoint server portals. Design, develop, and manage site
              content and capabilities and provide daily onsite maintenance of
              the existing portals. Participates in the testing process through
              test review and analysis. Being able to work with project
              stakeholders on a daily basis. Ideal candidate should be Someone
              with startup chops, who has been there and done that in a fast
              moving environment. ii. Key Activities • Develops software
              solutions by studying requirements analysis and information needs
              • Consulting with stakeholders and IT Management; • studying
              systems flow, data usage, and work processes • Performs software
              design using software development fundamentals and processes,
              debug, test, and deploy software solutions. • Design, develop and
              maintain key components of the software suite using Microsoft .Net
              and SharePoint Server. • Implementation of SharePoint-based
              workflows as well as development of Business Intelligence
              dashboards. • Build proof of concept examples or graphical
              simulation software. Then maintain product test software and demos
              for training purposes.
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
