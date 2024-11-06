import Heading1 from "../../components/Heading1";
import Text from "../../components/Text";
import SectionLayout from "../../ui/SectionLayout";
import HowFintechSpecial from "../pl-special/HowFintechSpecial";
import PlasticEventCards from "./PlasticEventCards";
import PlasticSurgeryHero from "./PlasticSurgeryHero";
import WhyPlasticSurgery from "./WhyPlasticSurgery";

function PlasticSurgery() {
  return (
    <>
      <PlasticSurgeryHero />
      <WhyPlasticSurgery />
      <SectionLayout>
        <div className="tab:w-5/6 m-auto py-6">
          <Heading1
            color={`text-titleColor`}
            align={"text-center leading-tight"}
          >
            Get the procedure you want. Prosper can help.
          </Heading1>
          <Text align={"text-center"} padding={`pt-3 pb-2`}>
            Depending on the type of cosmetic procedure you want, out of pocket
            expenses can add up. Rather than depleting your savings or using
            high-interest credit cards, you may want to consider cosmetic
            surgery financing.
          </Text>
          <Text align={"text-center"}>
            Understanding the kinds of costs involved with cosmetic surgery can
            help you evaluate your financial situation and whether plastic
            surgery financing may be right for you.
          </Text>
        </div>
      </SectionLayout>
      <PlasticEventCards />
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

export default PlasticSurgery;
