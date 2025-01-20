import HeroImg from "../../assets/HouseLoan.png";
import PrimaryButton from "../../components/PrimaryButton";
import Heading2 from "../../components/Heading2";
import Title from "../../components/Title";
import { useNavigate } from "react-router-dom";
function PLHomeImprovementHero() {
  const navigate = useNavigate();
  return (
    <div className="w-full relative overflow-hidden">
      <div className="hidden sm:block absolute -top-10 tab:-top-20 left-0 -z-50 blur-[130px] bg-primary/40 rounded-full w-[250px] tab:w-[450px] h-[180px] tab:h-[300px]"></div>
      <div className="pt-4 px-4 tab:px-0 tab:w-11/12 laptop:w-5/6 m-auto flex flex-wrap sm:flex-nowrap items-center justify-between tab:h-[410px]">
        <div className="hidden sm:block sm:w-2/3 tab:w-3/5">
          <Title padding={"py-0 leading-tight"} color={`text-titleColor`}>
            Home improvement loans made easy
          </Title>
          <Heading2 font={`font-normal`} padding={`py-2`}>
            Checking your rate won’t affect your credit score
          </Heading2>
          <div className="pt-8 pb-4" onClick={() => navigate("/check-rate")}>
            <PrimaryButton>check your rate</PrimaryButton>
          </div>
        </div>
        <div className="w-full sm:w-1/3 tab:w-2/5">
          <div className="flex tab:justify-end relative">
            <img
              src={HeroImg}
              alt="hero image"
              className="-z-10 m-auto sm:m-0"
            />
          </div>
        </div>
        <div className="sm:hidden w-full pt-4">
          <Title
            align={`text-center`}
            padding={"py-0 leading-tight"}
            color={`text-titleColor`}
          >
            Home improvement loans made easy
          </Title>
          <Heading2 align={`text-center`} font={`font-normal`} padding={`py-2`}>
            Checking your rate won’t affect your credit score
          </Heading2>
          <div
            className="pt-8 pb-4 w-max m-auto"
            onClick={() => navigate("/check-rate")}
          >
            <PrimaryButton>check your rate</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PLHomeImprovementHero;
