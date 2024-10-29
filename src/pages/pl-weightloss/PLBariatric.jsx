import BgBox from "../../components/BgBox";
import Heading1 from "../../components/Heading1";
import Text from "../../components/Text";
import SectionLayout from "../../ui/SectionLayout";
import HowFintechSpecial from "../pl-special/HowFintechSpecial";
import BariatricEventCard from "./BariatricEventCard";
import PLBariatricHero from "./PLBariatricHero";

function PLBariatric() {
  return (
    <>
      <PLBariatricHero />
      <BgBox
        heading={`Why opt for financing through Prosper for bariatric surgery?`}
        text={`Navigating weight-loss is a significant challenge, and the last thing you need is added stress about managing medical interventions. Prosper provides financing options for bariatric surgery through an online process, making it simple, flexible, and affordable.`}
      />
      <SectionLayout>
        <div className="tab:w-5/6 m-auto py-6">
          <Heading1
            color={`text-titleColor`}
            align={"text-center leading-tight"}
          >
            Weight-loss surgery can get expensive. Prosper can help.
          </Heading1>
          <Text align={"text-center"} padding={`py-3`}>
            Although the benefits from weight loss surgery can be life-changing,
            insurance companies don’t consistently cover the costs, which
            typically range from $15,000 to $25,000.
          </Text>
          <Text align={"text-center"} padding={`py-2`}>
            Insurance coverage may not take care of all of your costs. You may
            end up needing to cover out-of-pocket costs due to deductibles, time
            off work, and other associated expenses.
          </Text>
          <Text align={"text-center"} padding={`py-2`}>
            Understanding the kinds of costs involved with weight-loss surgery
            can help you evaluate your financial situation and consider whether
            bariatric surgery financing may be right for you.
          </Text>
        </div>
      </SectionLayout>
      <BariatricEventCard />
      <HowFintechSpecial />
    </>
  );
}

export default PLBariatric;
