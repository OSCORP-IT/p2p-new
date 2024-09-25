import SubHeading from "../components/SubHeading";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import Hero from "../assets/MainHero.png";
function Home() {
  return (
    <div className="w-full relative">
      <div className="absolute -top-20 -left-16 -z-50 blur-[150px] bg-secondary/60 rounded-full w-[380px] h-[380px]  overflow-hidden"></div>
      <div className="absolute -bottom-10 -right-6 -z-50 blur-[150px] bg-secondary/60 rounded-full w-[300px] h-[300px]  overflow-hidden"></div>
      <div className="w-5/6 m-auto flex items-start pt-8 h-[450px]">
        <div className="w-2/5">
          <Title>FINTECH today with online loans & more</Title>
          <SubHeading font={"normal"}>
            Smart, simple tools for borrowing, saving & earning
          </SubHeading>
          <div className="py-4">
            <PrimaryButton>Get Started With Your Preferred Loan</PrimaryButton>
          </div>
        </div>
        <div className="w-3/5">
          <div className="flex justify-end">
            <img src={Hero} alt="hero image" className="h-full object-cover" />
          </div>
        </div>
      </div>
      <div className="w-5/6 m-auto"></div>
    </div>
  );
}

export default Home;
