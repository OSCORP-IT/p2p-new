import Heading1 from "../../components/Heading1";
import SubTitle from "../../components/SubTitle";
import SectionLayout from "../../ui/SectionLayout";
function WhyMedicalLoan() {
  return (
    <SectionLayout>
      <div className="bg-gray-200 p-4 sm:p-6 tab:p-10 rounded-md">
        <Heading1
          align={`text-center`}
          color={`text-titleColor`}
          padding={`pb-2 sm:pb-3 tab:pb-4`}
        >
          Why medical loans through FINTECH?
        </Heading1>
        <SubTitle font={`font-normal`} align={`text-center`}>
          When faced with medical costs, whether planned or unexpected, your top
          priority should be your health. You shouldn’t have to stress about how
          to pay for these expenses. That’s why we provide access to loans
          through Prosper, with flexible terms, fixed monthly payments3, and no
          prepayment penalties. This way, you can concentrate on what matters
          most-your health and well-being.
        </SubTitle>
      </div>
    </SectionLayout>
  );
}

export default WhyMedicalLoan;
