import Title from "../../components/Title";
import Eligibility from "../../assets/Eligibility.png";
import SectionLayout from "../../ui/SectionLayout";
function GetFundEligibility() {
  return (
    <SectionLayout>
      <div className="pb-6">
        <Title align={`text-center `}>Eligibility</Title>
      </div>
      <div className="w-full flex flex-wrap sm:flex-nowrap items-center py-5 tab:py-8 px-4 tab:px-0">
        <div className="rounded-md w-full sm:w-1/3 px-6 mb-4 sm:mb-0 sm:px-0">
          <img
            src={Eligibility}
            alt="peer illustrator"
            className="object-cover rounded-md m-auto"
          />
        </div>
        <div className="w-full sm:w-2/3 flex justify-end">
          <div className="px-2 sm:px-8 tab:px-0 tab:w-5/6">
            <ul className="text-sm sm:text-base font-normal list-decimal">
              <li className="py-1">
                You’re a Bangladeshi-registered business and have been in
                operation for at least 1 year.
              </li>
              <li className="py-1">
                Your business is majorly owned by a Bangladeshi (at least 51%
                and above).
              </li>
              <li className="py-1">
                Your business is providing goods or services to other
                Bangladeshi businesses on credit terms (B2B Business).
              </li>
              <li className="py-1">
                Your business has mid-to-large size corporate(s) as customer(s)
                (private or public) OR you have an annual revenue of more than
                RM2 million.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

export default GetFundEligibility;
