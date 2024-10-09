import PrimaryButton from "../../components/PrimaryButton";
import SubHeading from "../../components/SubHeading";
import Title from "../../components/Title";
import HeroImg from "../../assets/InvestAssureHero.png";
import SubTitle from "../../components/SubTitle";
import Sheild from "../../icon/Sheild";
import SmallText from "../../components/SmallText";
import IconButton from "../../components/IconButton";
import { TbHeadset } from "react-icons/tb";

function InvestmentAssure() {
  return (
    <div className="w-full relative">
      <div className="absolute -top-20 -left-16 -z-50 blur-[150px] bg-accent/60 rounded-full w-[220px] tab:w-[380px] h-[220px] tab:h-[380px]  overflow-hidden"></div>
      <div className="absolute -bottom-10 right-0 -z-50 blur-[150px] bg-accent/60 rounded-full w-[150px] tab:w-[300px] h-[150px] tab:h-[300px]  overflow-hidden"></div>
      <div className="px-4 tab:px-0 tab:w-11/12 laptop:w-5/6 m-auto flex flex-wrap sm:flex-nowrap items-end py-6 tab:h-[400px]">
        <div className="hidden sm:block sm:w-1/2 tab:w-3/5">
          <Title color={`text-primary`}>
            Safeguard your investments with FINTECH Assure
          </Title>
          <SubTitle color={"text-[#737780]"} padding={"pt-4"}>
            Earn Guaranteed net returns of{" "}
            <span className="text-accent">up to 6% p.a</span>
          </SubTitle>
          <div className="flex gap-2 items-center pb-4">
            <Sheild />
            <SmallText>Regulated by Securities Commission Bangladesh</SmallText>
          </div>
          <div className="flex gap-4 py-6 items-center">
            <PrimaryButton bg={`accent`}>invest now</PrimaryButton>
            <IconButton text={"contact us"} bg={`accent`}>
              <TbHeadset className="font-semibold text-lg" />
            </IconButton>
          </div>
        </div>
        <div className="w-full sm:w-1/2 tab:w-2/5">
          <div className="flex justify-end">
            <img
              src={HeroImg}
              alt="hero image"
              className="h-full object-cover -z-10"
            />
          </div>
        </div>
        <div className="sm:hidden w-full">
          <Title color={`text-primary`} align={`text-center`} padding={`pt-4`}>
            Safeguard your investments with FINTECH Assure
          </Title>
          <SubTitle
            align={`text-center`}
            color={"text-[#737780]"}
            padding={"pt-2 sm:pt-4"}
          >
            Earn Guaranteed net returns of{" "}
            <span className="text-accent">up to 6% p.a</span>
          </SubTitle>
          <div className="flex gap-2 items-center pb-4 w-max m-auto">
            <Sheild />
            <SmallText>Regulated by Securities Commission Bangladesh</SmallText>
          </div>
          <div className="flex gap-4 py-3 items-center w-max m-auto">
            <PrimaryButton bg={`accent`}>invest now</PrimaryButton>
            <IconButton text={"contact us"} bg={`accent`}>
              <TbHeadset className="font-semibold text-lg" />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvestmentAssure;
