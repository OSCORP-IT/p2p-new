import SubHeading from "../../components/SubHeading";
import Title from "../../components/Title";
import FAQContainer from "../../ui/Home/FAQContainer";
import Testimonial from "../../ui/Home/Testimonial";
import SectionLayout from "../../ui/SectionLayout";
import HowMedicalWorks from "./HowMedicalWorks";
import MedicalLoanCards from "./MedicalLoanCards";

import PLMedicalInfoBox from "./PLMedicalInfoBox";
import PLMedicalLoanHero from "./PLMedicalLoanHero";
import WhyMedicalLoan from "./WhyMedicalLoan";

function PLMedicalLoan() {
  return (
    <>
      <PLMedicalLoanHero />
      <PLMedicalInfoBox />
      <WhyMedicalLoan />
      <HowMedicalWorks />
      <Testimonial />
      <MedicalLoanCards />
      <SectionLayout>
        <div className="w-11/12 sm:w-4/5 m-auto py-6">
          <Title align={"text-center"}>Questions? We’re here to help</Title>
          <SubHeading align={"text-center"} font={"normal"}>
            Read our Frequently Asked Questions (FAQ) here:
          </SubHeading>
        </div>
        <FAQContainer bg={`bg-primary/10`} color={`black`} />
      </SectionLayout>
    </>
  );
}

export default PLMedicalLoan;
