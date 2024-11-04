import Heading1 from "../../components/Heading1";
import Text from "../../components/Text";
import Calculator from "../../icon/Calculator";
import SectionLayout from "../../ui/SectionLayout";

function HowCalculatorWorks() {
  return (
    <SectionLayout>
      <div className="w-max m-auto">
        <Calculator />
      </div>
      <Heading1
        align={`text-center`}
        color={`text-titleColor`}
        padding={`py-6`}
      >
        How does Prosper’s loan calculator work?
      </Heading1>
      <div className="sm:w-11/12 tab:w-4/5 m-auto">
        <Text align={`text-center`} font={`font-normal`} padding={`py-2`}>
          We calculate your interest savings estimate by weighing the financial
          information you entered alongside historical data on loans and an
          estimation of what your rate for a loan through Prosper would be based
          on your credit score.
        </Text>
        <Text align={`text-center`} font={`font-normal`} padding={`py-2`}>
          Eligibility for a personal loan is not guaranteed. But filling out an
          application takes fewer than 5 minutes, and it will take a few
          additional factors related to your creditworthiness into account—such
          as your employment, income, credit usage, history, and more—to
          generate an offer and fine-tune your potential savings in interest.
        </Text>
      </div>
    </SectionLayout>
  );
}

export default HowCalculatorWorks;
