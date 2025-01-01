import PrimaryButton from "../../components/PrimaryButton";
import Title from "../../components/Title";
import HeroImg from "../../assets/InvestAssureHero.png";
import Sheild from "../../icon/Sheild";
import SmallText from "../../components/SmallText";
import IconButton from "../../components/IconButton";
import { TbHeadset } from "react-icons/tb";
function AboutHero() {
  return (
    <div className="w-full relative">
      <div className="absolute -top-20 -left-16 -z-50 blur-[150px] bg-secondary/50 rounded-full w-[220px] tab:w-[380px] h-[220px] tab:h-[380px]"></div>
      <div className="absolute -bottom-10 right-0 -z-50 blur-[150px] bg-secondary/50 rounded-full w-[150px] tab:w-[300px] h-[150px] tab:h-[300px]"></div>
      <div className="px-4 tab:px-0 tab:w-11/12 laptop:w-5/6 m-auto flex flex-wrap sm:flex-nowrap items-center py-6 tab:h-[400px]">
        <div className="hidden sm:block sm:w-1/2 tab:w-3/5">
          <Title color={`text-primary`}>
            We are your best financial solution in Bangladesh.
          </Title>
          <div className="flex gap-2 items-center py-4">
            <Sheild />
            <SmallText>Regulated by Securities Commission Bangladesh</SmallText>
          </div>
          <div className="flex gap-4 py-6 items-center">
            <PrimaryButton bg={`accent`}>Apply for loan</PrimaryButton>
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
            We are your best financial solution in Bangladesh.
          </Title>

          <div className="flex gap-2 items-center pb-4 w-max m-auto">
            <Sheild />
            <SmallText>Regulated by Securities Commission Bangladesh</SmallText>
          </div>
          <div className="flex gap-4 py-3 items-center w-max m-auto">
            <PrimaryButton bg={`accent`}>Apply for loan</PrimaryButton>
            <IconButton text={"contact us"} bg={`accent`}>
              <TbHeadset className="font-semibold text-lg" />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutHero;
