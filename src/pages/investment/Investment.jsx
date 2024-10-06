import { TbHeadset } from "react-icons/tb";
import Hero from "../../assets/InvestHero.png";
import IconButton from "../../components/IconButton";
import PrimaryButton from "../../components/PrimaryButton";
import SmallText from "../../components/SmallText";
import Title from "../../components/Title";
import Sheild from "../../icon/Sheild";
function Investment() {
  return (
    <div className="w-full relative overflow-hidden pt-8 flex items-end">
      <div className="absolute -top-20 -left-2 -z-50 blur-[150px] bg-secondary/60 rounded-full w-[450px] h-[450px]  overflow-hidden"></div>
      <div className="absolute -bottom-8 -right-6 z-0 w-[350px] h-[250px] rounded-2xl bg-accent rotate-45"></div>
      <div className="flex justify-between items-center px-4 tab:px-0 tab:w-11/12 laptop:w-5/6 m-auto">
        <div className="w-2/3">
          <Title align={"text-center"}>Investing made simple</Title>
          <div className="flex gap-2 items-center w-max m-auto pt-2 pb-4">
            <Sheild />
            <SmallText>Regulated by Securities Commission Bangladesh</SmallText>
          </div>
          <div className="flex gap-4 py-6 items-center w-max m-auto">
            <PrimaryButton>invest now</PrimaryButton>
            <IconButton text={"contact us"}>
              <TbHeadset className="font-semibold text-lg" />
            </IconButton>
          </div>
        </div>

        <div className="z-20 flex items-end justify-end h-full">
          <img src={Hero} alt="image hero" className="h-full" />
        </div>
      </div>
    </div>
  );
}

export default Investment;
