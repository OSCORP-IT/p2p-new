import ChartDoughnut from "../../icon/ChartDoughnut";
import ChartLineUp from "../../icon/ChartLineUp";
import HouseLine from "../../icon/HouseLine";
import Bubble from "../../icon/Bubble";
import SmallText from "../../components/SmallText";
import SubHeading from "../../components/SubHeading";
function HeroCards() {
  return (
    <div className="px-4 tab:px-0 tab:w-11/12 laptop:w-5/6 m-auto tab:-mt-[160px] laptop:-mt-[100px] pb-4">
      <div className=" z-100 w-full tab:w-5/6 laptop:w-9/12 p-3 shadow-allSide bg-white shadow-dropShadow rounded-md flex flex-wrap sm:flex-nowrap items-start justify-start">
        <div className="pb-2 sm:pb-0 w-1/2 sm:w-1/4 flex flex-col items-center justify-center border-r border-gray-300 border-b sm:border-b-0">
          <ChartDoughnut />
          <SubHeading align={"capitalize py-2"}>personal loans</SubHeading>
          <SmallText>from ৳10,000 - ৳5,00,000</SmallText>
        </div>
        <div className="pb-2 sm:pb-0 w-1/2 sm:w-1/4 flex flex-col items-center justify-center sm:border-r border-gray-300 border-b sm:border-b-0">
          <ChartLineUp />
          <SubHeading align={"capitalize py-2"}>business loans</SubHeading>
          <SmallText>from ৳1,00,000 - ৳5,00,00,000</SmallText>
        </div>
        <div className="pt-2 sm:pt-0 w-1/2 sm:w-1/4 flex flex-col items-center justify-center border-r border-gray-300">
          <HouseLine />
          <SubHeading align={"capitalize py-2"}>home equity</SubHeading>
          <SmallText>upto ৳5,00,00,000</SmallText>
        </div>
        <div className="pt-2 sm:pt-0 w-1/2 sm:w-1/4 flex flex-col items-center justify-center">
          <Bubble />
          <SubHeading align={"capitalize py-2"}>investments</SubHeading>
          <SmallText>Invest in real people</SmallText>
        </div>
      </div>
    </div>
  );
}

export default HeroCards;
