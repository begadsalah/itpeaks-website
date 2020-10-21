import React from "react";
import "./ServicesPagePlus.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

function ServicesPagePlus() {
  return (
    <div className="services-page-plus">
      <Row className="services-page-firstRow">
        <Col className="firstRow-cols" md={6} xs={12}>
          <ScrollAnimation
            animateIn="animate__fadeInLeft"
            animateOut="animate__fadeOut"
            duration={2}
          >
            <div className="imageBackground-div"></div>
            <div className="imageBackground-div2">
              <h1 className="imageBackground-div2-title">01</h1>
            </div>
            <Image
              src="https://i.ibb.co/9HKBmM0/web-and-app-development-Pic.png"
              fluid
              alt=""
              width="500"
              height="500"
              id="01"
            />
          </ScrollAnimation>
        </Col>
        <Col className="firstRow-cols" md={6} xs={12}>
          <ScrollAnimation
            animateIn="animate__fadeInRight"
            animateOut="animate__fadeOut"
            duration={2}
          >
            <div className="cols-text-content-div web-app-deve-section">
              <h3 className="cols-section-num">01</h3>
              <h1 className="cols-title" id="web-app-developing">
                Web & app developing
              </h1>
              <p className="cols-para">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
                ratione odio illo libero porro itaque ipsum, fuga hic, nobis
                quidem sapiente, commodi in non doloribus minima veritatis
                cupiditate. Animi et tempora quae odit, laudantium neque culpa
                facilis iste corrupti ipsa! Delectus perferendis cupiditate at.
                Fuga fugiat veniam facere dolores ex!Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Dicta ratione odio illo libero
                porro itaque ipsum, fuga hic, nobis quidem sapiente, commodi in
                non doloribus minima veritatis cupiditate. Animi et tempora quae
                odit, laudantium neque culpa facilis iste corrupti ipsa!
                Delectus perferendis cupiditate at. Fuga fugiat veniam facere
                dolores ex!
              </p>
            </div>
          </ScrollAnimation>
        </Col>
      </Row>
      <Row className="services-page-secondRow">
        <Col className="secondRow-cols" md={6} xs={12}>
          <ScrollAnimation
            animateIn="animate__fadeInLeft"
            animateOut="animate__fadeOut"
            duration={2}
          >
            <div className="cols-text-content-div">
              <h3 className="cols-section-num">02</h3>
              <h1 className="cols-title" id="web-app-designing">
                Web & app designing
              </h1>
              <p className="cols-para">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
                ratione odio illo libero porro itaque ipsum, fuga hic, nobis
                quidem sapiente, commodi in non doloribus minima veritatis
                cupiditate. Animi et tempora quae odit, laudantium neque culpa
                facilis iste corrupti ipsa! Delectus perferendis cupiditate at.
                Fuga fugiat veniam facere dolores ex!Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Dicta ratione odio illo libero
                porro itaque ipsum, fuga hic, nobis quidem sapiente, commodi in
                non doloribus minima veritatis cupiditate. Animi et tempora quae
                odit, laudantium neque culpa facilis iste corrupti ipsa!
                Delectus perferendis cupiditate at. Fuga fugiat veniam facere
                dolores ex!
              </p>
            </div>
          </ScrollAnimation>
        </Col>
        <Col className="secondRow-cols" md={6} xs={12}>
          <ScrollAnimation
            animateIn="animate__fadeInRight"
            animateOut="animate__fadeOut"
            duration={2}
          >
            <div className="imageBackground-div"></div>
            <div className="imageBackground-div2-1">
              <h1 className="imageBackground-div2-title">02</h1>
            </div>
            <Image
              src="https://i.ibb.co/5L1vf9W/web-app-design-pic.png"
              fluid
              alt=""
              width="400"
              height="400"
            />
          </ScrollAnimation>
        </Col>
      </Row>
      <Row className="services-page-thirdRow">
        <Col className="thirdRow-cols" md={6} xs={12}>
          <ScrollAnimation
            animateIn="animate__fadeInLeft"
            animateOut="animate__fadeOut"
            duration={2}
          >
            <div className="imageBackground-div"></div>
            <div className="imageBackground-div2">
              <h1 className="imageBackground-div2-title">03</h1>
            </div>
            <Image
              src="https://i.ibb.co/ZHvtkx3/ui-ux-pic.png"
              fluid
              alt=""
              width="500"
              height="500"
            />
          </ScrollAnimation>
        </Col>
        <Col className="thirdRow-cols" md={6} xs={12}>
          <ScrollAnimation
            animateIn="animate__fadeInRight"
            animateOut="animate__fadeOut"
            duration={2}
          >
            <div className="cols-text-content-div">
              <h3 className="cols-section-num">03</h3>
              <h1 className="cols-title" id="ui-ux">
                User interface & user experience
              </h1>
              <p className="cols-para">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
                ratione odio illo libero porro itaque ipsum, fuga hic, nobis
                quidem sapiente, commodi in non doloribus minima veritatis
                cupiditate. Animi et tempora quae odit, laudantium neque culpa
                facilis iste corrupti ipsa! Delectus perferendis cupiditate at.
                Fuga fugiat veniam facere dolores ex!Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Dicta ratione odio illo libero
                porro itaque ipsum, fuga hic, nobis quidem sapiente, commodi in
                non doloribus minima veritatis cupiditate. Animi et tempora quae
                odit, laudantium neque culpa facilis iste corrupti ipsa!
                Delectus perferendis cupiditate at. Fuga fugiat veniam facere
                dolores ex!
              </p>
            </div>
          </ScrollAnimation>
        </Col>
      </Row>
      <Row className="services-page-fourthRow">
        <Col className="fourthRow-cols" md={6} xs={12}>
          <ScrollAnimation
            animateIn="animate__fadeInLeft"
            animateOut="animate__fadeOut"
            duration={2}
          >
            <div className="cols-text-content-div">
              <h3 className="cols-section-num">04</h3>
              <h1 className="cols-title" id="professional-consulting">
                Professional consulting
              </h1>
              <p className="cols-para">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
                ratione odio illo libero porro itaque ipsum, fuga hic, nobis
                quidem sapiente, commodi in non doloribus minima veritatis
                cupiditate. Animi et tempora quae odit, laudantium neque culpa
                facilis iste corrupti ipsa! Delectus perferendis cupiditate at.
                Fuga fugiat veniam facere dolores ex!Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Dicta ratione odio illo libero
                porro itaque ipsum, fuga hic, nobis quidem sapiente, commodi in
                non doloribus minima veritatis cupiditate. Animi et tempora quae
                odit, laudantium neque culpa facilis iste corrupti ipsa!
                Delectus perferendis cupiditate at. Fuga fugiat veniam facere
                dolores ex!
              </p>
            </div>
          </ScrollAnimation>
        </Col>
        <Col className="fourthRow-cols" md={6} xs={12}>
          <ScrollAnimation
            animateIn="animate__fadeInRight"
            animateOut="animate__fadeOut"
            duration={2}
          >
            <div className="imageBackground-div"></div>
            <div className="imageBackground-div2-1">
              <h1 className="imageBackground-div2-title">04</h1>
            </div>
            <Image
              src="https://i.ibb.co/61gVFd6/professional-consulting-pic.png"
              fluid
              alt=""
              width="500"
              height="500"
            />
          </ScrollAnimation>
        </Col>
      </Row>
    </div>
  );
}

export default ServicesPagePlus;
