import SectionDescription from "../SectionDescription";

import { Container, Button } from "reactstrap";

import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Row,
  Col,
} from "reactstrap";

import TestimonialsCard from "./TestimnialsCard";
import sara from '../../assests/images/sara.png'
import jason from "../../assests/images/jason.png";
import emily from "../../assests/images/emily.png";
import michael from "../../assests/images/michael.png";


const testimonials=[{
    name: 'Sara L',
    image: sara,
    description: `he web design courseprovided a solid foundation for me. The instructors were knowledgeable andsupportive, and the interactive learning environment was engaging. I highly recommend it!` ,
  },
  {
    name: 'Jason M',
    image: jason,
    description: `The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignmentshelped me improve my design skills. I feel more confident in my career now. Thank you!` ,
  },
  {
    name: 'Emily R',
    image: emily,
    description: `The mobile app
    development course was fantastic! The step-by-step tutorials and hands-on
    projects helped me grasp the concepts easily. I'm now building my own app. Great
    course!` ,
  },
  {
    name: 'Michael K',
    image: michael,
    description: `I enrolled in the graphic
    design course as a beginner, and it was the perfect starting point. The
    instructor's guidance and feedback improved my design abilities significantly.
    I'm grateful for this course!` ,
  },
 
  ];




const TestimonialssSection = () => {
  return (
    <div className="mt-5 text-start">
      <Container>
        <SectionDescription sectionName="Our Testimonials"/>
        <Row>
        {testimonials.map((testimonial,index) => (
        <Col md={6} key={index} className="mb-3">
          <TestimonialsCard testimonialDescription= {testimonial.description} testimonialName={testimonial.name} testimonialImage={testimonial.image}   />
        </Col>
      ))}
        </Row>
      </Container>
    </div>
  );
};

export default TestimonialssSection;