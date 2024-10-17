import Title from "../../components/Title";
import HeroImg from "../../assets/conventional.png";
import IconButton from "../../components/IconButton";
import PrimaryButton from "../../components/PrimaryButton";
import { TbHeadset } from "react-icons/tb";
import Heading2 from "../../components/Heading2";
function ConventionalHero() {
  return (
    <div className="w-full relative overflow-hidden">
      <div className="hidden sm:block absolute -top-20 -left-16 -z-50 blur-[150px] bg-primary/50 rounded-full w-[180px] tab:w-[300px] h-[180px] tab:h-[300px]"></div>
      <div className="px-4 tab:px-0 tab:w-11/12 laptop:w-5/6 m-auto flex flex-wrap sm:flex-nowrap items-center justify-between tab:h-[400px]">
        <div className="hidden sm:block sm:w-2/5 tab:w-2/3">
          <Title padding={"py-0"}>
            An Inclusive Financing Solution for Your Small Business
          </Title>
          <Heading2 font={`font-normal`} padding={`pt-2`}>
            Level your playing field with
          </Heading2>
          <Heading2 font={`font-normal`} padding={`pb-2`}>
            FINTECH’s supply chain finance solution
          </Heading2>

          <div className="flex gap-4 pt-8 pb-4items-center">
            <PrimaryButton>apply now</PrimaryButton>
            <IconButton text={"contact us"}>
              <TbHeadset className="font-semibold text-lg" />
            </IconButton>
          </div>
        </div>
        <div className="w-full sm:w-1/2 tab:w-2/5">
          <div className="flex justify-end relative">
            <img src={HeroImg} alt="hero image" className="-z-10" />
          </div>
        </div>
        <div className="sm:hidden w-full">
          <Title color={`text-primary`} align={`text-center`} padding={`pt-4`}>
            Introducing <span className="text-accent">FINTECH Plus</span>
          </Title>
          <Heading2 align={"text-center"}>
            Earn Cash Bonus on Undeployed Funds
          </Heading2>
          <Heading2 padding={"py-2"} align={"text-center"}>
            Current rate offered: 02% p.a.
          </Heading2>
          <div className="flex gap-4 py-3 items-center w-max m-auto">
            <IconButton text={"contact us"} bg={`accent`}>
              <TbHeadset className="font-semibold text-lg" />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConventionalHero;
