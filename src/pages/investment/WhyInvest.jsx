import Title from "../../components/Title";
import Button from "../../components/Button";
import HeadCircuit from "../../icon/HeadCircuit";
import SectionLayout from "../../ui/SectionLayout";
import IconBox from "./IconBox";
function WhyInvest() {
  return (
    <SectionLayout>
      <div className="w-11/12 tab:w-3/5 laptop:w-1/2 m-auto">
        <Title align={"text-center"}>Why Invest with FINTECH</Title>
      </div>
      <div className="w-full flex flex-wrap sm:flex-nowrap items-start h-auto sm:h-[420px] tab:h-[350px] justify-between gap-3 sm:gap-4 py-8">
        <IconBox
          heading={"Automated Investments"}
          text={
            "Enjoy seamless investing with our Auto Invest feature that allocates your portfolio based on your risk profile"
          }
        >
          <div className="bg-accent p-1.5 rounded-md w-max m-auto">
            <HeadCircuit />
          </div>
        </IconBox>
        <IconBox
          heading={"Robust Risk Management"}
          text={
            "We finance suppliers of blue-chip companies and GLCs, leveraging data-driven due diligence for higher quality investments"
          }
        >
          <div className="bg-accent p-1.5 rounded-md w-max m-auto">
            <HeadCircuit />
          </div>
        </IconBox>
        <IconBox
          heading={"Short Lock-in Periods"}
          text={
            "Our investment notes are relatively short term, with investment tenures up to 6 months, offering greater liquidity"
          }
        >
          <div className="bg-accent p-1.5 rounded-md w-max m-auto">
            <HeadCircuit />
          </div>
        </IconBox>
        <IconBox
          heading={"Transparent Returns"}
          text={
            "We display our net returns upfront and include detailed breakdowns to show that there are no hidden fees"
          }
        >
          <div className="bg-accent p-1.5 rounded-md w-max m-auto">
            <HeadCircuit />
          </div>
        </IconBox>
      </div>
      <div className="w-max m-auto">
        <Button>invest now</Button>
      </div>
    </SectionLayout>
  );
}

export default WhyInvest;
