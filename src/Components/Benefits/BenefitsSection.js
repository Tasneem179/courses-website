import SectionDescription from "../SectionDescription";
import BenefitsCard from "./BenfitsCard";
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

const benefits=[{
  number: '01',
  title: 'Flexible Learning Schedule',
  description: 'Fit your coursework around your existing commitments and obligations.'
},
{
  number: '02',
  title: 'Expert Instruction',
  description: 'Learn from industry experts who have hands-on experience in design and development.'
},
{
  number: '03',
  title: 'Diverse Course Offerings',
  description: 'Explore a wide range of design and development courses covering various topics.'
},
{
  number: '04',
  title: 'Updated Curriculum',
  description: 'Access courses with up-to-date content reflecting the latest trends and industry practices.'
},
{
  number: '05',
  title: 'Practical Projects and Assignments',
  description: 'Develop a portfolio showcasing your skills and abilities to potential employers.'
},
{
  number: '06',
  title: 'Interactive Learning Environment',
  description: 'Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.Fit your coursework around your existing commitments and obligations.'
},
];


const BenefitsSection = () => {
  return (
    <section id="benefits" className="mt-5">
    <div className="mt-5 text-start">
      <Container>
        <SectionDescription sectionName="Benefits"/>
        <Row>
        {benefits.map((benefit) => (
        <Col md={4} key={benefit.number}>
          <BenefitsCard benefitNumber= {benefit.number} BenefitTitle={benefit.title} BenefitDescription={benefit.description}   />
        </Col>
      ))}
        </Row>
      </Container>
    </div>
    </section>
  );
};

export default BenefitsSection;
