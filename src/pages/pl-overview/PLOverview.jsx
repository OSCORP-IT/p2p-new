import InfoBox from "./InfoBox";
import Testimonial from "../../ui/Home/Testimonial";
import FAQContainer from "../../ui/Home/FAQContainer";
import BlogContainer from "../../ui/BlogContainer";
import PersonalLoanCards from "./PersonalLoanCards";
import PLOverviewHero from "./PLOverviewHero";
import SingleQuote from "./SingleQuote";
import ThreeSteps from "./ThreeSteps";
import WhatDifference from "./WhatDifference";
import SectionLayout from "../../ui/SectionLayout";
import Title from "../../components/Title";
import SubHeading from "../../components/SubHeading";

function PLOverview() {
  return (
    <>
      <PLOverviewHero />
      <InfoBox />
      <PersonalLoanCards />
      <WhatDifference />
      <ThreeSteps />
      <SingleQuote />
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
      <BlogContainer />
    </>
  );
}

export default PLOverview;
