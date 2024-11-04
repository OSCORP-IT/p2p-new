import Heading1 from "../../components/Heading1";
import SmallText from "../../components/SmallText";
import SubHeading from "../../components/SubHeading";
import Title from "../../components/Title";
import Bubble from "../../icon/Bubble";
import ChartDoughnut from "../../icon/ChartDoughnut";
import ChartLineUp from "../../icon/ChartLineUp";
import HouseLine from "../../icon/HouseLine";
import BlogContainer from "../../ui/BlogContainer";
import FAQContainer from "../../ui/Home/FAQContainer";
import HeroCards from "../../ui/Home/HeroCards";
import SectionLayout from "../../ui/SectionLayout";
import OnlineLoan from "../pl-homeImprovement/OnlineLoan";
import Cards from "./Cards";
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
      <SectionLayout bg={`bg-primary`}>
        <Heading1 align={`text-center`} color={`text-white`}>
          Discover FINTECH
        </Heading1>
        <SubHeading align={`text-center`} color={`white`} font={`font-normal`}>
          Join the thousands who have achieved their financial goals.
        </SubHeading>
      </SectionLayout>
      <SectionLayout padding={`pb-4 -mt-6`} bg={`bg-transparent`}>
        <div className="">
          <div className="w-full p-3 shadow-xl bg-white shadow-gray-300 rounded-md flex flex-wrap sm:flex-nowrap items-start justify-start">
            <div className="pb-2 sm:pb-0 w-1/2 sm:w-1/4 flex flex-col items-center justify-center border-r border-gray-300 border-b sm:border-b-0">
              <ChartDoughnut />
              <SubHeading align={"capitalize py-2"}>personal loans</SubHeading>
              <SmallText>from ৳10,000 - ৳5,00,000</SmallText>
            </div>
            <div className="pb-2 sm:pb-0 w-1/2 sm:w-1/4 flex flex-col items-center justify-center sm:border-r border-gray-300 border-b sm:border-b-0">
              <ChartLineUp />
              <SubHeading align={"capitalize py-2"}>business loans</SubHeading>
              <SmallText>from ৳1,00,000 - ৳5,00,00,000</SmallText>
            </div>
            <div className="pt-2 sm:pt-0 w-1/2 sm:w-1/4 flex flex-col items-center justify-center border-r border-gray-300">
              <HouseLine />
              <SubHeading align={"capitalize py-2"}>home equity</SubHeading>
              <SmallText>upto ৳5,00,00,000</SmallText>
            </div>
            <div className="pt-2 sm:pt-0 w-1/2 sm:w-1/4 flex flex-col items-center justify-center">
              <Bubble />
              <SubHeading align={"capitalize py-2"}>investments</SubHeading>
              <SmallText>Invest in real people</SmallText>
            </div>
          </div>
        </div>
      </SectionLayout>
    </div>
  );
}

export default PersonalLoanCalculator;
