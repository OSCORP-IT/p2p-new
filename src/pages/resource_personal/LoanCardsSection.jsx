import Heading1 from "../../components/Heading1";
import SmallText from "../../components/SmallText";
import SubHeading from "../../components/SubHeading";
import Bubble from "../../icon/Bubble";
import ChartDoughnut from "../../icon/ChartDoughnut";
import ChartLineUp from "../../icon/ChartLineUp";
import HouseLine from "../../icon/HouseLine";
import SectionLayout from "../../ui/SectionLayout";
function LoanCardsSection() {
  return (
    <>
      <SectionLayout bg={`bg-primary`}>
        <Heading1 align={`text-center`} color={`text-white`}>
          Discover FINTECH
        </Heading1>
        <SubHeading
          align={`text-center`}
          color={`white`}
          font={`font-normal`}
          padding={`pt-2 pb-6`}
        >
          Join the thousands who have achieved their financial goals.
        </SubHeading>
      </SectionLayout>
      <SectionLayout padding={`pb-4 -mt-10`} bg={`bg-transparent`}>
        <div className="w-full p-3 shadow-xl bg-white shadow-gray-300 rounded-md flex flex-wrap sm:flex-nowrap items-start justify-start">
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
      </SectionLayout>
    </>
  );
}

export default LoanCardsSection;
