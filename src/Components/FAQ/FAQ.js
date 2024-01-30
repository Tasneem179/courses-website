import {
  Container,
  Button,
  Row,
  Col,
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import { useState } from "react";
import * as Icon from "react-bootstrap-icons";

const FAQ = () => {
  const [open, setOpen] = useState("1");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  return (
    <section id="FAQ" className="mt-5">
    <Container>
      <div className="mt-5">
        <div className="bg-white p-5 rounded ">
          <Row className="justify-content-around">
            <Col md={4} mb-3 className="text-start">
              <h2 className="protext fw-bold">Frequently</h2>
              <h2 className="protext fw-bold">Asked Questions</h2>
              <p className="protext titleColor">
                Still you have any questions? Contact our Team via
                support@skillbridge.com
              </p>
              <button
                className="nav-link  btn btn-border border border-1  protext p-md-3   p-2 mb-5  text-nowrap fw-bold  mt-3 mt-md-0 "
                href="#"
              >
                See All FAQ’s
              </button>
            </Col>
            <Col md={6} mb-3>
              <Accordion open={open} toggle={toggle}>
                <AccordionItem className="my-3  p-3  rounded">
                  <AccordionHeader targetId="1" className="me-2">
                    Can I enroll in multiple courses at once?
                  </AccordionHeader>
                  <AccordionBody accordionId="1" className="protext-cards">
                    <small>
                      Absolutely! You can enroll in multiple courses
                      simultaneously and access them at your convenience.
                    </small>
                    <div className=" d-flex rounded fw-bold  protext btn-cards mt-3 justify-content-between align-items-center p-2 titleColor ">
                      <small className="fontmob">
                        Enrollment Process for Different Courses
                      </small>
                      <button className="bg-white btn   p-2 rounded-circle">
                        <Icon.ArrowRightShort />
                      </button>
                    </div>
                  </AccordionBody>
                </AccordionItem>

                <AccordionItem className="my-3  p-3  rounded">
                  <AccordionHeader targetId="2" className="me-2">
                  What kind of support can I expect from instructors?
                  </AccordionHeader>
                  <AccordionBody accordionId="2" className="protext-cards">
                  <small>
                      Absolutely! You can enroll in multiple courses
                      simultaneously and access them at your convenience.
                    </small>
                    <div className=" d-flex rounded fw-bold  protext btn-cards mt-3 justify-content-between align-items-center p-2 titleColor ">
                      <small className="fontmob">
                        Enrollment Process for Different Courses
                      </small>
                      <button className="bg-white btn   p-2 rounded-circle">
                        <Icon.ArrowRightShort />
                      </button>
                    </div>
                  </AccordionBody>
                </AccordionItem>

                <AccordionItem className="my-3  p-3  rounded">
                  <AccordionHeader targetId="3" className="me-2">
                  Are the courses self-paced or do they have specific start and end dates?
                  </AccordionHeader>
                  <AccordionBody accordionId="3" className="protext-cards">
                  <small>
                      Absolutely! You can enroll in multiple courses
                      simultaneously and access them at your convenience.
                    </small>
                    <div className=" d-flex rounded fw-bold  protext btn-cards mt-3 justify-content-between align-items-center p-2 titleColor ">
                      <small className="fontmob">
                        Enrollment Process for Different Courses
                      </small>
                      <button className="bg-white btn   p-2 rounded-circle">
                        <Icon.ArrowRightShort />
                      </button>
                    </div>
                  </AccordionBody>
                </AccordionItem>

                <AccordionItem className="my-3  p-3  rounded">
                  <AccordionHeader targetId="4" className="me-2">
                  Are there any prerequisites for the courses?
                  </AccordionHeader>
                  <AccordionBody accordionId="4" className="protext-cards">
                  <small>
                      Absolutely! You can enroll in multiple courses
                      simultaneously and access them at your convenience.
                    </small>
                    <div className=" d-flex rounded fw-bold  protext btn-cards mt-3 justify-content-between align-items-center p-2 titleColor ">
                      <small className="fontmob">
                        Enrollment Process for Different Courses
                      </small>
                      <button className="bg-white btn   p-2 rounded-circle">
                        <Icon.ArrowRightShort />
                      </button>
                    </div>
                  </AccordionBody>
                </AccordionItem>

                <AccordionItem className="my-3  p-3  rounded">
                  <AccordionHeader targetId="5" className="me-2">
                  Can I download the course materials for offline access?
                  </AccordionHeader>
                  <AccordionBody accordionId="5" className="protext-cards">
                  <small>
                      Absolutely! You can enroll in multiple courses
                      simultaneously and access them at your convenience.
                    </small>
                    <div className=" d-flex rounded fw-bold  protext btn-cards mt-3 justify-content-between align-items-center p-2 titleColor ">
                      <small className="fontmob">
                        Enrollment Process for Different Courses
                      </small>
                      <button className="bg-white btn   p-2 rounded-circle">
                        <Icon.ArrowRightShort />
                      </button>
                    </div>
                  </AccordionBody>
                </AccordionItem>



              </Accordion>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
    </section>
  );
};
export default FAQ;


