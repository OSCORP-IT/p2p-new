import Heading1 from "../../components/Heading1";
import Text from "../../components/Text";
import SectionLayout from "../../ui/SectionLayout";
import HowFintechSpecial from "../pl-special/HowFintechSpecial";
import MentalEventCards from "./MentalEventCards";
import MentalHealthHero from "./MentalHealthHero";
import WhyMentalHealth from "./WhyMentalHealth";

function MentalHealth() {
  return (
    <>
      <MentalHealthHero />
      <WhyMentalHealth />
      <SectionLayout>
        <div className="tab:w-5/6 m-auto py-6">
          <Heading1
            color={`text-titleColor`}
            align={"text-center leading-tight"}
          >
            Behavioral health treatments can get very expensive. Prosper can
            help.
          </Heading1>
          <Text align={"text-center"} padding={`pt-3 pb-2`}>
            Although the benefits from mental health treatment can be
            life-changing, insurance companies don’t always cover the costs.
            Even with coverage, you may still end up spending large amounts
            out-of-pocket because of high deductibles.
          </Text>
          <Text align={"text-center"}>
            Understanding types of mental health treatments and their associated
            costs may help you evaluate your financial situation and whether
            behavioral health financing may be right for you.
          </Text>
        </div>
      </SectionLayout>
      <MentalEventCards />
      <SectionLayout>
        <div className="tab:w-5/6 m-auto py-6">
          <Heading1
            color={`text-titleColor`}
            align={"text-center leading-tight"}
          >
            Fast, flexible funding when you need it
          </Heading1>
          <Text align={"text-center"} padding={`pt-3 pb-2`}>
            Mental health financing through Prosper gives you the fast, flexible
            funding you need to get the procedures and care you want.
          </Text>
        </div>
      </SectionLayout>
      <HowFintechSpecial />
    </>
  );
}

export default MentalHealth;
