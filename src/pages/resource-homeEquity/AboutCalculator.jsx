import Heading1 from "../../components/Heading1";
import SubHeading from "../../components/SubHeading";
import SubTitle from "../../components/SubTitle";
import Gear from "../../icon/Gear";
import SectionLayout from "../../ui/SectionLayout";
import Pointer from "./Pointer";
function AboutCalculator() {
  return (
    <SectionLayout>
      <Heading1
        align={`text-center`}
        padding={`pb-10`}
        color={`text-titleColor`}
      >
        About our home equity calculator
      </Heading1>
      <div className="bg-primary/10 p-4 tab:p-6 w-full rounded-[30px]">
        <div className="w-max m-auto">
          <Pointer />
        </div>
        <div className="sm:w-11/12 tab:w-4/5 m-auto">
          <SubTitle align={`text-center`} padding={`pt-6 pb-4`}>
            How to use our home equity calculator
          </SubTitle>
          <ol className=" list-decimal text-base sm:text-lg tab:text-xl py-2 pl-4 sm:pl-0">
            <li>
              <SubHeading font={`font-normal`}>
                Enter your property’s estimated value. If you’re not sure, check
                your most recent appraisal or look up your address online.
              </SubHeading>
            </li>
            <li>
              <SubHeading font={`font-normal`}>
                Enter your remaining mortgage balance amount. You can find this
                on your most recent mortgage statement.
              </SubHeading>
            </li>
            <li>
              <SubHeading font={`font-normal`}>
                Click or tap “Calculate”.
              </SubHeading>
            </li>
            <li>
              <SubHeading font={`font-normal`}>
                This calculator will show the estimated amount of home equity
                you may be able to borrow with a home equity line of credit
                (HELOC) or home equity loan (HELoan) through Prosper.
              </SubHeading>
            </li>
          </ol>
        </div>
      </div>
      <div className="bg-primary/10 p-4 tab:p-6 w-full rounded-[30px] mt-4">
        <div className="w-max m-auto">
          <Gear />
        </div>
        <div className="sm:w-11/12 tab:w-4/5 m-auto">
          <SubTitle align={`text-center`} padding={`pt-6 pb-4`}>
            How home equity is calculated
          </SubTitle>
          <ul className="py-2">
            <li>
              <SubHeading font={`font-normal`}>
                Home equity is calculated by subtracting the amount of money
                still owed on a property from the property’s fair market value.
              </SubHeading>
            </li>
            <li>
              <SubHeading font={`font-normal`}>
                Here’s an example of how it could look: if your property is
                valued at $100,000 and your owe $40,000 on your mortgage, your
                current equity would be $60,000.
              </SubHeading>
            </li>
            <li>
              <SubHeading font={`font-normal`}>
                $100,000 (estimated home value)-$40,000 (mortgage balance still
                owed) = $60,000 (current equity)
              </SubHeading>
            </li>
          </ul>
        </div>
      </div>
    </SectionLayout>
  );
}

export default AboutCalculator;
