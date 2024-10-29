import Heading1 from "../../components/Heading1";
import Text from "../../components/Text";
import SectionLayout from "../../ui/SectionLayout";
import HowFintechSpecial from "../pl-special/HowFintechSpecial";
import DentalEventCards from "./DentalEventCards";
import PLDentalHero from "./PLDentalHero";
import WhyPLDental from "./WhyPLDental";

function PLDentalLoan() {
  return (
    <>
      <PLDentalHero />
      <WhyPLDental />
      <SectionLayout>
        <div className="tab:w-5/6 m-auto py-6">
          <Heading1
            color={`text-titleColor`}
            align={"text-center leading-tight"}
          >
            Dental care can be expensive. FINTECH can help.
          </Heading1>
          <Text align={"text-center"} padding={`py-3`}>
            Depending on the type of dental procedure you need, out of pocket
            expenses can add up quickly. You may want to consider financing
            rather than depleting your savings or using high-interest credit
            cards.
          </Text>
          <Text align={"text-center"} padding={`py-2`}>
            Getting a clearer picture of the various costs involved with dental
            surgery can help you evaluate your financial situation and whether
            dental financing might be right for you.
          </Text>
        </div>
      </SectionLayout>
      <DentalEventCards />
      <HowFintechSpecial />
    </>
  );
}

export default PLDentalLoan;
