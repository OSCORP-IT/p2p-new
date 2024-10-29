import HeroImg from "../../assets/WeightSurgery.png";
import PrimaryButton from "../../components/PrimaryButton";
import Title from "../../components/Title";
import Text from "../../components/Text";
function PLBariatricHero() {
  return (
    <div className="w-full relative overflow-hidden">
      <div className="hidden sm:block absolute -top-10 tab:-top-20 left-0 -z-50 blur-[130px] bg-primary/40 rounded-full w-[250px] tab:w-[450px] h-[180px] tab:h-[300px]"></div>
      <div className="pt-4 px-4 tab:px-0 tab:w-10/12 m-auto flex flex-wrap sm:flex-nowrap items-center justify-between tab:h-[400px]">
        <div className="hidden sm:block sm:w-2/3 tab:w-1/2">
          <Text
            align={`text-left uppercase`}
            padding={`pb-4`}
            font={`font-semibold`}
          >
            bariatric surgery financing
          </Text>
          <Title padding={"py-0 leading-tight"} color={`text-titleColor`}>
            Weight-loss surgery loans
          </Title>
          <Text padding={`py-2`}>
            Planning for weight-loss surgery can be overwhelming. Access
            stress-free and affordable financing for all bariatric surgery
            expenses with loans through Prosper.
          </Text>
          <div className="pt-8 pb-4">
            <PrimaryButton>check your rate</PrimaryButton>
          </div>
        </div>
        <div className="w-full sm:w-1/3 tab:w-1/2">
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
            Weight-loss surgery loans
          </Title>
          <Text align={`text-center`} padding={`py-2`}>
            Planning for weight-loss surgery can be overwhelming. Access
            stress-free and affordable financing for all bariatric surgery
            expenses with loans through Prosper.
          </Text>
          <div className="pt-8 pb-4 w-max m-auto">
            <PrimaryButton>check your rate</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PLBariatricHero;
