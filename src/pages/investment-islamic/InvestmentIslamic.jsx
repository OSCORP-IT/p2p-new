import SubHeading from "../../components/SubHeading";
import Title from "../../components/Title";
import FAQContainer from "../../ui/Home/FAQContainer";
import SectionLayout from "../../ui/SectionLayout";
import CapBayP2P from "./CapBayP2P";
import HowItWorks from "./HowItWorks";
import InvestmentIslamicHero from "./InvestmentIslamicHero";
import RegisterNow from "./RegisterNow";

function InvestmentIslamic() {
  return (
    <>
      <InvestmentIslamicHero />
      <CapBayP2P />
      <HowItWorks />
      <RegisterNow />
      <SectionLayout>
        <div className="w-11/12 tab:w-3/5 laptop:w-1/2 m-auto py-6">
          <Title align={"text-center"}>Questions? We’re here to help</Title>
          <SubHeading align={"text-center"} font={"normal"}>
            Read our Frequently Asked Questions (FAQ) here:
          </SubHeading>
        </div>
        <FAQContainer bg={`bg-green-100`} color={`black`} />
      </SectionLayout>
    </>
  );
}

export default InvestmentIslamic;
