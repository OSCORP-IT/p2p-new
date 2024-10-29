import Heading1 from "../../components/Heading1";
import Text from "../../components/Text";
import SectionLayout from "../../ui/SectionLayout";
import ArrowBendCard from "./ArrowBendCard";
function HowFintechSpecial() {
  return (
    <SectionLayout>
      <div className="bg-accent/10 p-4 sm:p-6 tab:p-10 rounded-md mt-4">
        <Heading1
          align={`text-center leading-tight`}
          color={`text-titleColor`}
          padding={`pb-2`}
        >
          How will you FINTECH?
        </Heading1>
        <Text align={`text-center`}>
          A personal loan through FINTECH helps you finance the things that
          matter most.
        </Text>
        <div className="flex flex-wrap sm:flex-nowrap items-start gap-2 sm:gap-4 tab:gap-6 justify-between tab:w-[90%] m-auto pt-6 tab:pt-10">
          <div className="w-max m-auto sm:m-0 sm:w-1/3">
            <ArrowBendCard text={`Debt Consolidation Loan`} />
            <ArrowBendCard text={`Home Improvement Loan`} />
            <ArrowBendCard text={`Auto Loan`} />
            <ArrowBendCard text={`Engagement Ring Financing`} />
          </div>
          <div className="w-max m-auto sm:m-0 sm:w-1/3">
            <ArrowBendCard text={`Special Occasion Loan`} />
            <ArrowBendCard text={`Loan for Funeral Services`} />
            <ArrowBendCard text={`Mental Health Financing`} />
            <ArrowBendCard text={`Loans for Cosmetic Surgery`} />
          </div>
          <div className="w-max m-auto sm:m-0 sm:w-1/3">
            <ArrowBendCard text={`Healthcare Financing`} />
            <ArrowBendCard text={`Bariatric Surgery Financing`} />
            <ArrowBendCard text={`Dental Financing`} />
            <ArrowBendCard text={`Loans for IVF and Fertility`} />
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

export default HowFintechSpecial;
