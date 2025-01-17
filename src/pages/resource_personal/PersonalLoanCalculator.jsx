import SubHeading from "../../components/SubHeading";
import Title from "../../components/Title";
import BlogContainer from "../../ui/BlogContainer";
import FAQContainer from "../../ui/Home/FAQContainer";
import SectionLayout from "../../ui/SectionLayout";
import OnlineLoan from "../pl-homeImprovement/OnlineLoan";
import Cards from "./Cards";
import LoanCardsSection from "./LoanCardsSection";
import PersonalLoanCalculatorHero from "./PersonalLoanCalculatorHero";
import SectionCheckBox from "./SectionCheckBox";

function PersonalLoanCalculator() {
  return (
    <div>
      <PersonalLoanCalculatorHero />
      <Cards />
      <SectionCheckBox />
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
    </div>
  );
}

export default PersonalLoanCalculator;
