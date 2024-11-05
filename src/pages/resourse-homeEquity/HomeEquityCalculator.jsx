import BlogContainer from "../../ui/BlogContainer";
import SectionLayout from "../../ui/SectionLayout";
import AboutCalculator from "./AboutCalculator";
import HomeEquityCalculatorHero from "./HomeEquityCalculatorHero";
import QualifyFor from "./QualifyFor";
import TryCalculator from "./TryCalculator";
import Title from "../../components/Title";
import SubHeading from "../../components/SubHeading";
import FAQContainer from "../../ui/Home/FAQContainer";
import Heading1 from "../../components/Heading1";
import Text from "../../components/Text";
import chatDot from "../../assets/ChatDots.svg";
import Phone from "../../assets/Phone.svg";

function HomeEquityCalculator() {
  return (
    <>
      <HomeEquityCalculatorHero />
      <TryCalculator />
      <QualifyFor />
      <AboutCalculator />
      <BlogContainer heading={`Home equity resources`} category={`blog`} />
      <SectionLayout>
        <div className="w-11/12 sm:w-4/5 m-auto py-6">
          <Title align={"text-center"}>Questions? We’re here to help</Title>
          <SubHeading align={"text-center"} font={"normal"}>
            Read our Frequently Asked Questions (FAQ) here:
          </SubHeading>
        </div>
        <FAQContainer bg={`bg-primary/10`} color={`black`} />
      </SectionLayout>
      <SectionLayout>
        <Heading1 align={`text-center`} color={`text-titleColor`}>
          How can we help you prosper?
        </Heading1>
        <Text align={`text-center`}>
          We've got your back, every step of the way.
        </Text>
        <div className="w-full tab:w-5/6 m-auto flex flex-wrap sm:flex-nowrap items-start justify-between py-4">
          <div className="w-full sm:w-[48%] tab:w-[45%] p-10 bg-accent/10 rounded-[20px]">
            <img src={Phone} alt="icon" className="w-max m-auto mb-2" />
            <SubHeading align={`text-center`}>
              Call us at (+880) 1XXX XXXXXX
            </SubHeading>
            <Text align={`text-center`}>
              Chat with a dedicated Prosper team member, not a robot.
            </Text>
          </div>
          <div className="w-full sm:w-[48%] tab:w-[45%] p-10 bg-accent/10 rounded-[20px] mt-4 sm:mt-0">
            <img src={chatDot} alt="icon" className="w-max m-auto mb-2" />
            <SubHeading align={`text-center`}>FINTECH help center</SubHeading>
            <Text align={`text-center`}>
              Always to home equity questions, from your application to payments
            </Text>
          </div>
        </div>
      </SectionLayout>
    </>
  );
}

export default HomeEquityCalculator;
