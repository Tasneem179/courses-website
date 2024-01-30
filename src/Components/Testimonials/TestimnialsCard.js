import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardLink,
  ListGroup,
  ListGroupItem,
} from "reactstrap";

const TestimonialsCard = (props) => {
  return (
    <Card className="card-border">
      <ListGroup flush>
        <ListGroupItem className="protext-cards p-4 card-border">
          {props.testimonialDescription}
        </ListGroupItem>
        <ListGroupItem className="p-4">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <div className="d-inline-block me-3">
                <img src= {props.testimonialImage} className="img-fluid titleColor" />
              </div>
              <div className="d-inline-block protext-bold">
              {props.testimonialName}
              </div>
            </div>
            <div className="protext fw-bold ">
              <button
                href="#"
                className="card-link p-2 fw-bold rounded  protext btn-cards  "
              >
                <small>Read Full Story</small>
              </button>
            </div>
          </div>
        </ListGroupItem>
      </ListGroup>
    </Card>
  );
};

export default TestimonialsCard;
