import SubHeading from "../../components/SubHeading";
import Title from "../../components/Title";
import BlogContainer from "../../ui/BlogContainer";
import FAQContainer from "../../ui/Home/FAQContainer";
import Testimonial from "../../ui/Home/Testimonial";
import SectionLayout from "../../ui/SectionLayout";
import OnlineLoan from "../pl-homeImprovement/OnlineLoan";
import LoanCardsSection from "../resource_personal/LoanCardsSection";
import DebtColidationCalculatorHero from "./DebtColidationCalculatorHero";
import HowCalculatorWorks from "./HowCalculatorWorks";

function DebtColidationCalculator() {
  return (
    <>
      <DebtColidationCalculatorHero />
      <HowCalculatorWorks />
      <Testimonial />
      <SectionLayout>
        <div className="w-11/12 sm:w-4/5 m-auto py-6">
          <Title align={"text-center"}>Questions? We’re here to help</Title>
          <SubHeading align={"text-center"} font={"normal"}>
            Read our Frequently Asked Questions (FAQ) here:
          </SubHeading>
        </div>
        <FAQContainer bg={`bg-primary/10`} color={`black`} />
      </SectionLayout>
      <OnlineLoan />
      <BlogContainer />
      <LoanCardsSection />
    </>
  );
}

export default DebtColidationCalculator;
