import IconBox from "../investment/IconBox";
import Title from "../../components/Title";
import PrimaryButton from "../../components/PrimaryButton";
import ChartLineUp from "../../icon/ChartLineUp";
import Rocket from "../../icon/Rocket";
import CPU from "../../icon/CPU";
import Sheild from "../../icon/Sheild";
import SectionLayout from "../../ui/SectionLayout";
function WhyFinance() {
  return (
    <SectionLayout>
      <div className="w-11/12 tab:w-3/5 laptop:w-1/2 m-auto">
        <Title align={"text-center"}>
          Here’s why you should finance with FINTECH
        </Title>
      </div>
      <div className="w-full flex flex-wrap sm:flex-nowrap items-start h-auto sm:h-[410px] tab:h-[340px] justify-between gap-3 sm:gap-4 py-8">
        <IconBox
          heading={"Fast and Simple"}
          text={
            "Our digitalised application and documentation process accelerates the speed of approval and disbursement of funds."
          }
        >
          <div className="bg-gradient-to-b from-[#0da500] to-[#0d5152] from p-2.5 rounded-md w-max m-auto">
            <Rocket />
          </div>
        </IconBox>
        <IconBox
          heading={"Flexible"}
          text={
            "We tailor our solution to the needs of your business so that you can focus on what is important, i.e. running your business."
          }
        >
          <div className="bg-gradient-to-b from-[#0da500] to-[#0d5152] from p-2.5 rounded-md w-max m-auto">
            <ChartLineUp
              color={`#FFFFFF`}
              bgShade={false}
              width={"25"}
              height={"24"}
            />
          </div>
        </IconBox>
        <IconBox
          heading={"Technology-driven"}
          text={
            "Our data-driven insights to generate sophisticated credit scoring ensure your objective aligns with your business goals."
          }
        >
          <div className="bg-gradient-to-b from-[#0da500] to-[#0d5152] from p-2.5 rounded-md w-max m-auto">
            <CPU />
          </div>
        </IconBox>
        <IconBox
          heading={"Secured"}
          text={
            "We use advanced encryption technology and exceptional security measures to keep your data and information safe."
          }
        >
          <div className="bg-gradient-to-b from-[#0da500] to-[#0d5152] from p-2.5 rounded-md w-max m-auto">
            <Sheild color={`#FFFFFF`} />
          </div>
        </IconBox>
      </div>
      <div className="w-max m-auto">
        <PrimaryButton>Apply now</PrimaryButton>
      </div>
    </SectionLayout>
  );
}

export default WhyFinance;
