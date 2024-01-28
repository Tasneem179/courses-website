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

import CoursesCard from "./CoursesCard";

const CoursesSection = (props) => {
  return (
    <div className="mt-5 text-start">
      <Container>
        <SectionDescription sectionName="Our Courses" />
        {/* <CoursesCard/> */}
         <Row>
          {props.coursesList.map((course, index) => (
            <Col md={6} key={index} className="mb-3">
              <CoursesCard
                description={course.description}
                courseName={course.name}
                courseImage={course.image}
                level={course.level}
                duration={course.duration}
                instructor={course.instructor}
              />
            </Col>
          ))}
        </Row> 
      </Container>
    </div>
  );
};

export default CoursesSection;
