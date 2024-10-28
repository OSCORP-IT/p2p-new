import SectionLayout from "../../ui/SectionLayout";
import MedicalIconBox from "./MedicalIconBox";
function MedicalLoanCards() {
  return (
    <SectionLayout>
      <div className="py-8 flex flex-wrap items-center justify-center gap-10">
        <MedicalIconBox loanName={"Dental Loan"} />
        <MedicalIconBox loanName={"Bariatric surgery financing"} />
        <MedicalIconBox loanName={"Plastic surgery financing"} />
        <MedicalIconBox loanName={"Fertility treatment financing"} />
        <MedicalIconBox loanName={"Mental Health financing"} />
      </div>
    </SectionLayout>
  );
}

export default MedicalLoanCards;
