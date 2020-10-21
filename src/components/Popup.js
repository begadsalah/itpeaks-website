import React, { Component } from "react";
import Modal from "react-awesome-modal";
import "./Popup.css";

export default class Popup extends Component {
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
            <h1 className="popup-h1">Sr. CRM Developer</h1>
            <h4 className="popup-h4">Aswan, Egypt • Full-time •</h4>
            <p>
              i. Role The CRM Technical consultant will act as a developer for
              internal CRM system. The individual will be responsible for
              development and maintenance of the internal Microsoft Dynamics 365
              CRM platform and the ideal candidate will have sound knowledge in
              Dynamics CRM entities, workflows, configurations, customization
              development, integration development, reporting, dashboards, web
              resources, CRM solution file management, security model and UI
              development. ii. Key Activities • Develops software solutions by
              studying requirements analysis and information needs; consulting
              with stakeholders and IT Management; • studying systems flow, data
              usage, and work processes; performs software design using software
              development fundamentals and processes, debug, test, and deploy
              software solutions. • Building and configuring CRM forms, views,
              dashboards and workflows • Developing SSRS reports using Microsoft
              SQL and FetchXML • Working closely with BI project teams or other
              resources for completion of projects related to the CRM system •
              Working with internal support members to resolve technical issues
              with servers, ETL packages, SQL, SSRS and other related
              technologies to the internal CRM system • Maintain code
              repository, VSTS backlog and source control • Effectively utilize
              SDK and 3rd party tools such as XRMToolbox for administration of
              CRM system
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
