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
    <footer id="web-footer" className="bg-white mt-5 ">
      <div className="mt-5  pt-5 ">
        <Row className="justify-content-around">
          <Col md={4} className="mb-3">
            <div className="mb-5 ms-5 text-start">
              <img src={logo} alt="logo" />
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
              <div className="me-3">
                <p className="protext fw-bold">Home</p>
                <p>
                  <a href="#home" className="link-footer">
                    Benefits
                  </a>
                </p>
                <p>
                  <a href="#courses" className="link-footer">
                    Our Courses
                  </a>
                </p>
                <p>
                  <a href="#Our Testimonials" className="link-footer">
                    Our Testimonials
                  </a>
                </p>
                <p>
                  <a href="#FAQ" className="link-footer">
                    Our FAQ
                  </a>
                </p>
              </div>

              <div className="me-3">
                <p className="protext fw-bold">About Us</p>
                <p>
                  <a href="#!" className="link-footer">
                    Company
                  </a>
                </p>
                <p>
                  <a href="#!" className="link-footer">
                    Achievements
                  </a>
                </p>
                <p>
                  <a href="#!" className="link-footer">
                    Our Goals
                  </a>
                </p>
              </div>
            </div>
          </Col>
          <Col md={3} className="mb-3">
            <p className="protext fw-bold">Social Profiles</p>
            <div className="d-flex ">
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

{
  /* <footer id="web-footer" class="bg-white mt-5 ">


<div class="mt-5 mx-auto p-5 ">

    <div class="row justify-content-around">
        <div class="col-md-4 mb-3  ">
            <div class="mb-5">
                <img src="/assests/images/Logo.png" alt="logo"/>
            </div>
            <p class="protext">
                <i class="fas fa-envelope me-1"></i>
                hello@skillbridge.com
            </p>
            <p class="protext">
                <i class="fas fa-phone me-1"></i>
                +91 91813 23 2309
            </p>
            <p class="protext">
                <i class="fa-solid fa-location-dot me-1"></i>
                Somewhere in the World
            </p>

        </div>



        <div class="col-md-4 mb-3  ">
            <div class="mb-3 d-flex justify-content-between ">
                <div class="me-3">
                    <p class="protext fw-bold">Home</p>
                    <p>
                        <a href="#home" class="link-footer">Benefits</a>
                    </p>
                    <p>
                        <a href="#courses" class="link-footer">Our Courses</a>
                    </p>
                    <p>
                        <a href="#Our Testimonials" class="link-footer">Our Testimonials</a>
                    </p>
                    <p>
                        <a href="#FAQ" class="link-footer">Our FAQ</a>
                    </p>


                </div>

                <div class="me-3">
                    <p class="protext fw-bold">About Us</p>
                    <p>
                        <a href="#!" class="link-footer">Company</a>
                    </p>
                    <p>
                        <a href="#!" class="link-footer">Achievements</a>
                    </p>
                    <p>
                        <a href="#!" class="link-footer">Our Goals</a>
                    </p>


                </div>
            </div>


        </div>

        <div class="col-md-2 mb-3  ">
            <p class="protext fw-bold">
                Social Profiles
            </p>
            <div class="d-flex">

                <span class="me-2">
                    <button class="card-link p-2 rounded btn-cards " href="#"><i
                            class="fa-brands fa-facebook"></i>
                    </button>
                </span>
                <span class="me-2">
                    <button class="card-link p-2 rounded btn-cards " href="#"><i
                            class="fa-brands fa-twitter"></i>
                    </button>
                </span>
                <span class="me-2">
                    <button class="card-link p-2 rounded btn-cards " href="#"><i
                            class="fa-brands fa-linkedin"></i>
                    </button>
                </span>

            </div>

        </div>





    </div>

    <div class="container text-center protext" style="color: #656567; ">
        <hr class="container mb-5">
        © 2023 Skillbridge. All rights reserved.
    </div>


</div>






</footer>  */
}
