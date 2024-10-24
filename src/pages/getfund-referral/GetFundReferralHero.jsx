import Title from "../../components/Title";
import HeroImg from "../../assets/SMEReferral.png";
import IconButton from "../../components/IconButton";
import { TbHeadset } from "react-icons/tb";
import Heading2 from "../../components/Heading2";
function GetFundReferralHero() {
  return (
    <div className="w-full relative">
      <div className="hidden sm:block absolute -top-20 -left-10 -z-50 blur-[100px] bg-accent/30 rounded-full w-[280px] tab:w-[300px] h-[280px] tab:h-[300px]"></div>
      <div className="px-4 tab:px-0 tab:w-11/12 laptop:w-5/6 m-auto flex flex-wrap sm:flex-nowrap items-center justify-between py-10 tab:h-[400px]">
        <div className="hidden sm:block sm:w-9/12 tab:w-1/2">
          <Title color={`text-primary`} padding={`pt-4`}>
            Let’s support the growth of Bangladeshi’s SME Together
          </Title>
          <Heading2 color={`text-accent`} padding={`py-2`}>
            Earn cash rewards with each successful referrals
          </Heading2>
          <div className="pt-6 pb-4">
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
            Let’s support the growth of Bangladeshi’s SME Together
          </Title>
          <Heading2 color={`text-accent`} align={`text-center`}>
            Earn cash rewards with each successful referrals
          </Heading2>
          <div className="py-3  w-max m-auto">
            <IconButton text={"contact us"} bg={`accent`}>
              <TbHeadset className="font-semibold text-lg" />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetFundReferralHero;
