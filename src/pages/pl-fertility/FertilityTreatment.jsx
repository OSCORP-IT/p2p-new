import Heading1 from "../../components/Heading1";
import Text from "../../components/Text";
import SectionLayout from "../../ui/SectionLayout";
import FertilityTreatmentHero from "./FertilityTreatmentHero";
import FertilityEventCards from "./FertlityEventCards";
import WhyFertility from "./WhyFertility";
import HowFintechSpecial from "../pl-special/HowFintechSpecial";

function FertilityTreatment() {
  return (
    <>
      <FertilityTreatmentHero />
      <WhyFertility />
      <SectionLayout>
        <div className="tab:w-5/6 m-auto py-6">
          <Heading1
            color={`text-titleColor`}
            align={"text-center leading-tight"}
          >
            Fertility treatments can get expensive. Prosper can help.
          </Heading1>
          <Text align={"text-center"} padding={`pt-3 pb-2`}>
            In 2023, the average cost of a single cycle of in vitro
            fertilization (IVF) can range from $15,000 to $30,000.
          </Text>
          <Text align={"text-center"}>
            With fertility costs continuing to rise, understanding the complete
            costs of medications, treatments, and technologies can help you
            figure out whether fertility treatment financing is the right choice
            for you.
          </Text>
        </div>
      </SectionLayout>
      <FertilityEventCards />
      <SectionLayout>
        <div className="tab:w-5/6 m-auto py-6">
          <Heading1
            color={`text-titleColor`}
            align={"text-center leading-tight"}
          >
            Fast, flexible funding when you need it
          </Heading1>
          <Text align={"text-center"} padding={`pt-3 pb-2`}>
            Fertility treatment financing through Prosper gives you the fast,
            flexible funding you need to get the medications and procedures you
            want.
          </Text>
        </div>
      </SectionLayout>
      <HowFintechSpecial />
    </>
  );
}

export default FertilityTreatment;
