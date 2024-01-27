import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import * as Icon from "react-bootstrap-icons";
const BenefitsCard = (props) => {
  <Card className="border-0 rounded mb-3 p-4">
    <CardBody>
      <CardTitle tag="h2" className="text-end protext-bold display-4">
        {props.benefitNumber}
      </CardTitle>
      <CardSubtitle className="mb-2 text-body-secondary lead protext-bold titleColor">
        {props.BenefitTitle}
      </CardSubtitle>
      <CardText className="protext-cards">{props.BenefitDescription}</CardText>
      <div className="text-end">
        <button href="#" class="card-link btn-lg p-3 btn-border">
          <Icon.ArrowUpRight class="icon-orange" />
        </button>
      </div>
    </CardBody>
  </Card>;
};

export default BenefitsCard;
