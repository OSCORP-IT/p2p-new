import SectionLayout from "../../ui/SectionLayout";
import Heading2 from "../../components/Heading2";
import Heading1 from "../../components/Heading1";
import Title from "../../components/Title";
import SubHeading from "../../components/SubHeading";
import GlobeHemiSphere from "../../icon/GlobeHemiSphere";
import PersonArmSpread from "../../icon/PersonArmSpread";
import IconButton from "../../components/IconButton";
import { TbLogout, TbUsersGroup } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
function HowToRefer() {
  const navigate = useNavigate();
  return (
    <SectionLayout>
      <Heading2 align={`text-center`} font={`font-normal`}>
        Know any friends that&apos;s looking to invest or diversify their
        investments? Start referring your family and friends to CapBay P2P
        Invest and earn RM 100* each!
      </Heading2>
      <Heading1 align={`text-center`} padding={`py-3`}>
        Here&apos;s how you and your friend can earn RM 100:
      </Heading1>
      <div className="w-11/12 flex items-start justify-between flex-wrap sm:flex-nowrap gap-6 sm:gap-8 m-auto pt-6 pb-2 sm:pb-4">
        <div className="w-full sm:w-1/2 shadow-allSide shadow-gray-200 sm:h-[360px] tab:h-[300px] rounded-xl relative overflow-hidden p-6">
          <div className="w-[120px] h-[120px] tab:w-[180px] tab:h-[180px] bg-primary/80 blur-[130px] rounded-full absolute -top-14 am:-top-12 -right-4 sm:-right-6 tab:-right-4"></div>
          <div className="flex gap-2 items-center justify-start">
            <GlobeHemiSphere />
            <Title color={"text-primary"}>01</Title>
          </div>
          <Heading2 padding={"py-3"}>Spread the word</Heading2>
          <SubHeading padding={"pb-3"}>
            Login to your account and share your referral code
          </SubHeading>
          <IconButton
            text={"login"}
            bg={`gradient-to-l from-[#0d5152] to-[#1db5b8]`}
            onClick={() => navigate("/auth/login")}
          >
            <TbLogout />
          </IconButton>
        </div>
        <div className="w-full sm:w-1/2 shadow-allSide shadow-gray-200 sm:h-[360px] tab:h-[300px] rounded-xl relative overflow-hidden p-6">
          <div className="w-[120px] h-[120px] tab:w-[180px] tab:h-[180px] bg-primary/80 blur-[130px] rounded-full absolute -top-14 am:-top-12 -right-4 sm:-right-6 tab:-right-4"></div>
          <div className="flex gap-2 items-center justify-start">
            <PersonArmSpread />
            <Title color={"text-primary"}>02</Title>
          </div>
          <Heading2 padding={"py-3"}>
            TK 100 awaits you and your friend
          </Heading2>
          <SubHeading padding={"pb-3"}>
            For every referral(s) that registers, tops up and invests with
            CapBay, both the referrer and referred person will receive RM100!
          </SubHeading>
          <IconButton
            text={"start referring"}
            bg={`gradient-to-l from-[#0d5152] to-[#1db5b8]`}
          >
            <TbUsersGroup />
          </IconButton>
        </div>
      </div>
    </SectionLayout>
  );
}

export default HowToRefer;
