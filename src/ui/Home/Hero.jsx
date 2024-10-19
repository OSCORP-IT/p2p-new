import SubHeading from "../../components/SubHeading";
import PrimaryButton from "../../components/PrimaryButton";
import Title from "../../components/Title";
import HeroImg from "../../assets/MainHero.png";
import HeroCards from "./HeroCards";
function Hero() {
  return (
    <div className="w-full relative">
      <div className="absolute -top-20 -left-16 -z-50 blur-[150px] bg-secondary/60 rounded-full w-[380px] h-[380px]  overflow-hidden"></div>
      <div className="absolute -bottom-10 right-0 -z-50 blur-[150px] bg-secondary/60 rounded-full w-[300px] h-[300px]  overflow-hidden"></div>
      <div className="px-4 tab:px-0 tab:w-11/12 laptop:w-5/6 m-auto flex items-start pt-8 tab:h-[450px]">
        <div className="hidden sm:block sm:w-1/2 tab:w-2/5">
          <Title align={"text-center tab:text-left"}>
            FINTECH today with online loans & more
          </Title>
          <SubHeading font={"normal"}>
            Smart, simple tools for borrowing, saving & earning
          </SubHeading>
          <div className="py-4">
            <PrimaryButton>Get Started With Your Preferred Loan</PrimaryButton>
          </div>
        </div>
        <div className="w-full sm:w-1/2 tab:w-3/5">
          <div className="flex justify-end">
            <img
              src={HeroImg}
              alt="hero image"
              className="h-full object-cover -z-10"
            />
          </div>
        </div>
      </div>
      <div className="w-11/12 m-auto sm:hidden">
        <Title align={"text-center"} padding="pt-2">
          FINTECH today with online loans & more
        </Title>
        <SubHeading font={"normal"} align={"center"}>
          Smart, simple tools for borrowing, saving & earning
        </SubHeading>
        <div className="py-4 flex sm:block justify-center sm:w-max m-auto">
          <PrimaryButton>Get Started With Your Preferred Loan</PrimaryButton>
        </div>
      </div>
      <HeroCards />
    </div>
  );
}

export default Hero;
