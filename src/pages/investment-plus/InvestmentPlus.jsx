import Calculations from "./Calculations";
import HowItWorks from "./HowItWorks";
import InvestmentPlusHero from "./InvestmentPlusHero";
import FAQContainer from "../../ui/Home/FAQContainer";
import SectionLayout from "../../ui/SectionLayout";
import Title from "../../components/Title";
import SubHeading from "../../components/SubHeading";

function InvestmentPlus() {
  return (
    <>
      <InvestmentPlusHero />
      <HowItWorks />
      <Calculations />
      <SectionLayout>
        <div className="w-11/12 tab:w-3/5 laptop:w-1/2 m-auto py-6">
          <Title align={"text-center"}>Questions? We’re here to help</Title>
          <SubHeading align={"text-center"} font={"normal"}>
            Read our Frequently Asked Questions (FAQ) here:
          </SubHeading>
        </div>
        <FAQContainer bg={`bg-gray-200`} color={`black`} />
      </SectionLayout>
    </>
  );
}

export default InvestmentPlus;
