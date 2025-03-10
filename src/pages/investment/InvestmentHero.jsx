import { TbHeadset } from "react-icons/tb";
import Hero from "../../assets/InvestHero.png";
import IconButton from "../../components/IconButton";
import PrimaryButton from "../../components/PrimaryButton";
import SmallText from "../../components/SmallText";
import Title from "../../components/Title";
import Sheild from "../../icon/Sheild";
import { useNavigate } from "react-router-dom";
function InvestmentHero() {
  const navigate = useNavigate();
  return (
    <div className="w-full relative overflow-hidden pt-4 sm:py-4 tab:py-0 tab:pt-8">
      <div className="absolute -top-20 -left-2 -z-50 blur-[80px] tab:blur-[150px] bg-secondary/60 rounded-full w-[450px] h-[450px] overflow-hidden"></div>
      <div className="flex flex-wrap-reverse sm:flex-nowrap justify-between items-center px-4 tab:px-0 tab:w-11/12 laptop:w-5/6 m-auto">
        <div className="w-full sm:w-1/2 tab:w-2/3 px-4 py-4 sm:py-0">
          <Title align={"text-center"}>Investing made simple</Title>
          <div className="flex gap-2 items-center w-max m-auto pt-2 pb-4">
            <Sheild />
            <SmallText>Regulated by Securities Commission Bangladesh</SmallText>
          </div>
          <div className="flex gap-4 py-6 items-center w-max m-auto">
            <PrimaryButton>invest now</PrimaryButton>
            <IconButton
              text={"contact us"}
              onClick={() => navigate("/contact-us")}
            >
              <TbHeadset className="font-semibold text-lg" />
            </IconButton>
          </div>
        </div>
        <div className="z-20 flex items-center sm:items-end justify-end h-full w-full m-auto relative overflow-hidden">
          <img
            src={Hero}
            alt="image hero"
            className="h-full w-max sm:w-auto m-auto sm:m-0"
          />
        </div>
      </div>
    </div>
  );
}

export default InvestmentHero;
