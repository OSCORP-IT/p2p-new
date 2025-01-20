import Title from "../../components/Title";
import HeroImg from "../../assets/referal.png";
import IconButton from "../../components/IconButton";
import { TbHeadset } from "react-icons/tb";
import Heading2 from "../../components/Heading2";
import Text from "../../components/Text";
import { useNavigate } from "react-router-dom";
function InvestmentReferralHero() {
  const navigate = useNavigate();
  return (
    <div className="w-full relative overflow-hidden">
      <div className="hidden sm:block absolute -top-20 -left-16 -z-50 blur-[150px] bg-accent/50 rounded-full w-[180px] tab:w-[300px] h-[180px] tab:h-[300px]"></div>
      <div className="px-4 tab:px-0 tab:w-11/12 laptop:w-5/6 m-auto flex flex-wrap sm:flex-nowrap items-center justify-between tab:h-[400px]">
        <div className="hidden sm:block sm:w-2/5 tab:w-3/5">
          <Heading2 color={`text-accent`}>
            Friends that stick together, earn together!
          </Heading2>
          <Title padding={"py-0"}>
            Refer a Friend to FINTECH and earn TK 100* each
          </Title>
          <Text>*T&C applies.</Text>

          <div className="flex gap-4 pt-8 pb-4items-center">
            <IconButton
              text={"contact us"}
              bg={`accent`}
              onClick={() => navigate("/contact-us")}
            >
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

export default InvestmentReferralHero;
