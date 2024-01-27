import SectionDescription from "../SectionDescription";
import BenefitsCard from "./BenfitsCard";
import { Container, Button } from "reactstrap";
const BenefitsSection = () => {
  return (
    <div className="mt-5 text-start">
      <Container>
        <SectionDescription sectionName="Benefits" />
        <BenefitsCard
          benefitNumber="01"
          BenefitTitle="Flexible Learning Schedule"
          BenefitDescription="Fit your coursework around your existing commitments and obligations."
        />
      </Container>
    </div>
  );
};

export default BenefitsSection;
