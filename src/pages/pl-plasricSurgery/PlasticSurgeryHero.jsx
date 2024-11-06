import HeroImg from "../../assets/PlasticSurgery.png";
import PrimaryButton from "../../components/PrimaryButton";
import Title from "../../components/Title";
import Text from "../../components/Text";
function PlasticSurgeryHero() {
  return (
    <div className="w-full relative overflow-hidden">
      <div className="hidden sm:block absolute -top-10 tab:-top-20 left-0 -z-50 blur-[130px] bg-primary/40 rounded-full w-[250px] tab:w-[450px] h-[180px] tab:h-[300px]"></div>
      <div className="pt-4 px-4 tab:px-0 tab:w-10/12 m-auto flex flex-wrap sm:flex-nowrap items-center justify-between tab:h-[400px]">
        <div className="hidden sm:block sm:w-2/3 tab:w-3/5">
          <Text
            align={`text-left uppercase`}
            padding={`pb-4`}
            font={`font-semibold`}
          >
            plastic surgery financing
          </Text>
          <Title padding={"py-0 leading-tight"} color={`text-titleColor`}>
            Cosmetic surgery financing
          </Title>
          <Text padding={`py-2`}>
            Financing your plastic surgery can be stressful. But through
            Prosper, you can ease that financial burden.
          </Text>
          <div className="pt-8 pb-4">
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
            Cosmetic surgery financing
          </Title>
          <Text align={`text-center`} padding={`py-2`}>
            Financing your plastic surgery can be stressful. But through
            Prosper, you can ease that financial burden.
          </Text>
          <div className="pt-8 pb-4 w-max m-auto">
            <PrimaryButton>check your rate</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlasticSurgeryHero;
