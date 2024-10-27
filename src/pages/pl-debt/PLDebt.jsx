import SubHeading from "../../components/SubHeading";
import Title from "../../components/Title";
import BlogContainer from "../../ui/BlogContainer";
import FAQContainer from "../../ui/Home/FAQContainer";
import Testimonial from "../../ui/Home/Testimonial";
import SectionLayout from "../../ui/SectionLayout";
import InfoBox from "../pl-overview/InfoBox";
import WhatDifference from "../pl-overview/WhatDifference";
import BestDebtLoan from "./BestDebtLoan";
import ConsolidationLoanCards from "./ConsolidationLoanCards";
import HowConsolidationWorks from "./HowConsolidationWorks";
import PLDebtHero from "./PLDebtHero";

function PLDebt() {
  return (
    <>
      <PLDebtHero />
      <InfoBox />
      <ConsolidationLoanCards />
      <HowConsolidationWorks />
      <WhatDifference
        ques={`Q: What makes a debt consolidation loan through FINTECH different?`}
        ans={`A: Your personalized experience`}
        text={`A debt consolidation loan through Prosper comes with an excellent support team who can truly personalize their care for your needs`}
      />
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
      <BestDebtLoan />
      <BlogContainer />
    </>
  );
}

export default PLDebt;
