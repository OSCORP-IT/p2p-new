import Heading1 from "../../components/Heading1";
import Heading2 from "../../components/Heading2";
import SmallText from "../../components/SmallText";
import SubHeading from "../../components/SubHeading";
import SectionLayout from "../../ui/SectionLayout";
function Calculations() {
  return (
    <SectionLayout bg={`bg-accent/10`}>
      <div className="px-2 sm:px-0 sm:w-11/12 tab:w-3/5 m-auto py-4">
        <Heading1 align={`text-center capitalize leading-tight`}>
          How to calculate the Eligible Balance for FINTECH Plus using an
          example of RM 10,000 portfolio:
        </Heading1>
        <div className="w-4/5 sm:w-1/2 m-auto text-left py-2">
          <Heading2 align={`text-center sm:text-left`} padding={"pt-4"}>
            N (Total Portfolio): TK10,000
          </Heading2>
          <Heading2 align={`text-center sm:text-left`}>
            X (Invested Funds): TK8,000
          </Heading2>
          <div className="w-max m-auto sm:w-auto sm:m-0">
            <SubHeading font={`font-normal`} padding={`pt-4`}>
              = (95% x N) - X{" "}
            </SubHeading>
            <SubHeading font={`font-normal`}>
              = (95% x TK 10,000) - TK 8,000
            </SubHeading>
            <SubHeading font={`font-normal`}>= TK 1,500 </SubHeading>
          </div>
        </div>
      </div>
      <SmallText align={`text-center`} color={"black/60"}>
        NOTE: The Eligible Balance is calculated as follows where &apos;N&apos;
        is the total value of the investor&apos;s Capbay investment portfolio
        and &apos;X&apos; is the total amount invested of that portfolio
      </SmallText>
    </SectionLayout>
  );
}

export default Calculations;
