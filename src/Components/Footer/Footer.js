import { Container, Row, Col } from "reactstrap";

import logo from "../../assests/images/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
  
    <footer id="web-footer" className="bg-white mt-5 footer  ">
      <div className="mt-5  pt-5  container-fluid">
        <Row className="justify-content-around">
          <Col md={4} className="mb-3">
            <div className="mb-5 ms-5 text-start">
             <a href="/"> <img src={logo} alt="logo" /></a> 
            </div>
            <p className="protext  ms-5 text-start">
              <FontAwesomeIcon icon={faEnvelope} className="me-1" />
              hello@skillbridge.com
            </p>
            <p className="protext  ms-5 text-start">
              <FontAwesomeIcon icon={faPhone} className="me-1" />
              +91 91813 23 2309
            </p>
            <p className="protext  ms-5 text-start">
              <FontAwesomeIcon icon={faLocationDot} className="me-1" />
              Somewhere in the World
            </p>
          </Col>
          <Col md={4} className="mb-3">
            <div className="mb-3 d-flex justify-content-between ">
              <div className="me-3 text-start ms-5">
                <p className="protext fw-bold ">Home</p>
                <p>
                  <a href="#benefits" className="link-footer ">
                    Benefits
                  </a>
                </p>
                <p>
                  <a href="#courses" className="link-footer">
                    Our Courses
                  </a>
                </p>
                <p>
                  <a href="#Our Testimonials" className="link-footer ">
                    Our Testimonials
                  </a>
                </p>
                <p>
                  <a href="#FAQ" className="link-footer ">
                    Our FAQ
                  </a>
                </p>
              </div>

              <div className="me-3 text-start ms-5">
                <p className="protext fw-bold ">About Us</p>
                <p>
                  <a href="#!" className="link-footer">
                    Company
                  </a>
                </p>
                <p>
                  <a href="#!" className="link-footer ">
                    Achievements
                  </a>
                </p>
                <p>
                  <a href="#!" className="link-footer ">
                    Our Goals
                  </a>
                </p>
              </div>
            </div>
          </Col>
          <Col md={3} className="mb-3">
            <p className="protext fw-bold text-start ms-5">Social Profiles</p>
            <div className="d-flex ms-5">
              <span className="me-2">
                <button className=" p-2 rounded btn-cards " href="#">
                  <FontAwesomeIcon icon={faFacebook} />
                </button>
              </span>
              <span className="me-2">
                <button className=" p-2 rounded btn-cards " href="#">
                  <FontAwesomeIcon icon={faTwitter} />
                </button>
              </span>
              <span className="me-2">
                <button className=" p-2 rounded btn-cards " href="#">
                  <FontAwesomeIcon icon={faLinkedin} />
                </button>
              </span>
            </div>
          </Col>
        </Row>
        <div className="container text-center protext" style={{color:"#656567 "}}>
          <hr className="container mb-5" />© 2023 Skillbridge. All rights reserved.
        </div>
      </div>
    </footer>
    
  );
};

export default Footer;

