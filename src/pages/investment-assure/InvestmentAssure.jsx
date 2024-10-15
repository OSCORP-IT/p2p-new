import Heading1 from "../../components/Heading1";
import SubHeading from "../../components/SubHeading";
import SectionLayout from "../../ui/SectionLayout";
import AssureHero from "./AssureHero";
import HowToInvest from "./HowToInvest";
import KeyHighlights from "./KeyHighlights";
import ReserveFund from "./ReserveFund";
import WhatIsAssure from "./WhatIsAssure";

function InvestmentAssure() {
  return (
    <>
      <AssureHero />
      <WhatIsAssure />
      <KeyHighlights />
      <ReserveFund />
      <HowToInvest />
      <SectionLayout bg={"bg-accent/10"}>
        <Heading1 align={"text-center"} padding={"py-2 sm:py-4"}>
          The Reserve Fund is maintained at a Coverage Ratio that sufficiently
          covers Expected Losses
        </Heading1>
        <div className="w-full flex flex-wrap sm:flex-nowrap items-center justify-between py-4">
          <div className="w-full sm:w-1/2 sm:border-r border-accent py-4 sm:py-0">
            <h1 className="text-[32px] sm:text-5xl tab:text-6xl text-accent font-bold w-max m-auto sm:py-2">
              08%
            </h1>
            <SubHeading align={"w-max m-auto"}>
              Minimum Coverage Ratio
            </SubHeading>
          </div>
          <div className="w-[100px] h-[1px] bg-accent sm:hidden m-auto mt-4"></div>
          <div className="w-full sm:w-1/2 py-4 sm:py-0">
            <h1 className="text-[32px] sm:text-5xl tab:text-6xl text-accent font-bold w-max m-auto py-2">
              &gt;10%
            </h1>
            <SubHeading align={"w-max m-auto"}>
              Current Coverage Ratio
            </SubHeading>
          </div>
        </div>
      </SectionLayout>
    </>
  );
}

export default InvestmentAssure;
