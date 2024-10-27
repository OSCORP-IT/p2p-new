import Heading1 from "../../components/Heading1";
import SubTitle from "../../components/SubTitle";
import Gift from "../../icon/Gift";
import SectionLayout from "../../ui/SectionLayout";

function OnlineLoan() {
  return (
    <SectionLayout bg={`bg-primary`}>
      <div className="w-max m-auto">
        <Gift />
      </div>
      <Heading1 align={`text-center`} color={`text-white`} padding={`py-4`}>
        Online loans and more
      </Heading1>
      <div className="sm:w-11/12 tab:w-4/5 m-auto">
        <SubTitle
          align={`text-center`}
          color={`text-white`}
          font={`font-normal`}
          padding={`py-2`}
        >
          Take charge of your finances with a quick and easy custom solution.
          Use the Prosper platform to consolidate debt, finance home
          improvements, pay for healthcare, apply for a home equity line of
          credit, or get a credit card in just a few simple steps.
        </SubTitle>
      </div>
    </SectionLayout>
  );
}

export default OnlineLoan;
