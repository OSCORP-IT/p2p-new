import Heading1 from "../../components/Heading1";
import SubTitle from "../../components/SubTitle";
import Gift from "../../icon/Gift";
import SectionLayout from "../../ui/SectionLayout";
function BestDebtLoan() {
  return (
    <SectionLayout bg={`bg-primary`}>
      <div className="w-max m-auto">
        <Gift />
      </div>
      <Heading1 align={`text-center`} color={`text-white`} padding={`py-4`}>
        Best debt consolidation loans
      </Heading1>
      <div className="sm:w-11/12 tab:w-4/5 m-auto">
        <SubTitle
          align={`text-center`}
          color={`text-white`}
          font={`font-normal`}
          padding={`py-2`}
        >
          Take charge of your finances with a quick and easy custom solution.
          Use a personal loan through Prosper to consolidate debt, pay off
          credit card bills, finance home improvements, make a big purchase, or
          pay for healthcare.
        </SubTitle>
      </div>
    </SectionLayout>
  );
}

export default BestDebtLoan;
