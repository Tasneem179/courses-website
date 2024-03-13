import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import * as Icon from "react-bootstrap-icons";
import "./BenefitsCard.css";
const BenefitsCard = (props) => {
  return (
    <Card body className="border-0 rounded mb-3 p-4 benefit-card">
      <div className="p-2">
        <CardTitle tag="h2" className="text-end protext-bold display-4">
          {props.benefitNumber}
        </CardTitle>
        <CardSubtitle className="mb-2  lead protext-bold titleColor ">
          {props.BenefitTitle}
        </CardSubtitle>
        <CardText className="protext-cards">
          {props.BenefitDescription}
        </CardText>
        <div className="text-end">
          <button href="#" className="card-link btn-lg p-3 btn-border">
            <Icon.ArrowUpRight className="icon-orange" />
          </button>
        </div>
      </div>
    </Card>
  );
};

export default BenefitsCard;
