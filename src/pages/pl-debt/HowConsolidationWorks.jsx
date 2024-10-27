import SectionLayout from "../../ui/SectionLayout";
import ConsolidationWorks from "../../assets/ConsolidationWorks.png";
import SubHeading from "../../components/SubHeading";
import CheckSquare from "../../icon/CheckSquare";
import Heading2 from "../../components/Heading2";
import Heading1 from "../../components/Heading1";
function HowConsolidationWorks() {
  return (
    <SectionLayout>
      <div className="w-11/12 tab:w-4/5 m-auto">
        <Heading1
          align={"text-center"}
          padding={`py-2`}
          color={`text-titleColor`}
        >
          How consolidation loans work
        </Heading1>
      </div>
      <div className="w-full flex flex-wrap sm:flex-nowrap items-center gap-6 justify-between py-5 tab:py-8 px-2 tab:px-0">
        <div className="sm:hidden w-full px-6 mb-4">
          <img
            src={ConsolidationWorks}
            alt="peer illustrator"
            className="object-cover rounded-md m-auto w-11/12"
          />
        </div>
        <div className="w-full sm:w-1/2 flex flex-col gap-6 justify-between h-full flex-1">
          <div className="flex items-start gap-2">
            <div className="pt-1">
              <CheckSquare />
            </div>
            <div>
              <Heading2 padding={"py-0 sm:py-1"} color={"text-primary"}>
                Check your rate
              </Heading2>
              <SubHeading font={"normal"}>
                Submit your debt consolidation loan application in minutes
              </SubHeading>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <div className="pt-1">
              <CheckSquare />
            </div>
            <div>
              <Heading2 padding={"py-0 sm:py-1"} color={"text-primary"}>
                Get approved & get your funds
              </Heading2>
              <SubHeading font={"normal"}>
                You can receive your loan in as little as one business day
              </SubHeading>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <div className="pt-1">
              <CheckSquare />
            </div>
            <div>
              <Heading2 padding={"py-0 sm:py-1"} color={"text-primary"}>
                Pay off credit card debt
              </Heading2>
              <SubHeading font={"normal"}>
                You&apos;ll have a single monthly loan payment, and you could
                end up saving on interest with a lower interest loan and feel
                relief!
              </SubHeading>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 px-6 mb-4 sm:mb-0 sm:px-0">
          <img
            src={ConsolidationWorks}
            alt="peer illustrator"
            className="object-cover rounded-md m-auto w-11/12"
          />
        </div>
      </div>
    </SectionLayout>
  );
}

export default HowConsolidationWorks;
