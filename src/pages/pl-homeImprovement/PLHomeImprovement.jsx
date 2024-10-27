import InfoBoxHomeImrovement from "./InfoBoxHomeImprovement";
import PLHomeImprovementHero from "./PlHomeImprovementHero";
import Possibilities from "./Possibilities";
import ThreeSteps from "../pl-overview/ThreeSteps";
import SingleQuote from "../pl-overview/SingleQuote";
import Testimonial from "../../ui/Home/Testimonial";
import BlogContainer from "../../ui/BlogContainer";
import FAQContainer from "../../ui/Home/FAQContainer";
import SectionLayout from "../../ui/SectionLayout";
import Title from "../../components/Title";
import SubHeading from "../../components/SubHeading";
import OnlineLoan from "./OnlineLoan";

function PLHomeImprovement() {
  return (
    <>
      <PLHomeImprovementHero />
      <InfoBoxHomeImrovement />
      <Possibilities />
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
      <OnlineLoan />
      <BlogContainer />
    </>
  );
}

export default PLHomeImprovement;
