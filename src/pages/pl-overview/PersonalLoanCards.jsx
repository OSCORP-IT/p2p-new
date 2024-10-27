import SectionLayout from "../../ui/SectionLayout";
import Text from "../../components/Text";
import SubHeading from "../../components/SubHeading";
import Heading1 from "../../components/Heading1";
import CreditCard from "../../icon/CreditCard";
import Buildings from "../../icon/Buildings";
import Hospital from "../../icon/Hospital";
import StoreFront from "../../icon/StoreFront";
import Truck from "../../icon/Truck";
import PuzzlePiece from "../../icon/PuzzlePiece";
function PersonalLoanCards() {
  return (
    <SectionLayout bg={`hidden sm:block`}>
      <div className="w-11/12 tab:w-4/5 laptop:w-2/3 m-auto py-6">
        <Heading1
          align={"text-center"}
          padding={`py-4`}
          color={`text-titleColor`}
        >
          We’ve got the best personal loan for you
        </Heading1>
        <Text align={`text-center w-10/12 m-auto`}>
          Whether you want to consolidate debt to lower your monthly payments,
          finish a home improvement project, pay off medical debt, buy a car, or
          take a vacation, you can apply for a fast, easy personal loan through
          Prosper today!
        </Text>
      </div>
      <div className="w-11/12 tab:w-10/12 laptop:w-2/3 flex items-center justify-between gap-8 m-auto">
        <div className="w-1/3 h-[150px] shadow-allSide px-8 py-6 shadow-gray-200 rounded-md">
          <div className="w-max m-auto pb-2">
            <CreditCard />
          </div>
          <SubHeading font={`font-normal`} align={`text-center`}>
            Debt Consolidation
          </SubHeading>
        </div>
        <div className="w-1/3 h-[150px] shadow-allSide px-8 py-6 shadow-gray-200 rounded-md">
          <div className="w-max m-auto pb-2">
            <Buildings width={`48`} color={`#ff6b00`} stroke={`1`} />
          </div>
          <SubHeading font={`font-normal`} align={`text-center`}>
            Home Improvement
          </SubHeading>
        </div>
        <div className="w-1/3 h-[150px] shadow-allSide px-8 py-6 shadow-gray-200 rounded-md">
          <div className="w-max m-auto pb-2">
            <Hospital />
          </div>
          <SubHeading font={`font-normal`} align={`text-center`}>
            Healthcare Financing
          </SubHeading>
        </div>
      </div>
      <div className="w-11/12 tab:w-10/12 laptop:w-2/3 flex items-center justify-between py-8 gap-8 m-auto">
        <div className="w-1/3 h-[150px] shadow-allSide px-8 py-6 shadow-gray-200 rounded-md">
          <div className="w-max m-auto pb-2">
            <StoreFront />
          </div>
          <SubHeading font={`font-normal`} align={`text-center`}>
            Household Expenses
          </SubHeading>
        </div>
        <div className="w-1/3 h-[150px] shadow-allSide px-8 py-6 shadow-gray-200 rounded-md">
          <div className="w-max m-auto pb-2">
            <Truck />
          </div>
          <SubHeading font={`font-normal`} align={`text-center`}>
            Vehicle Purchases
          </SubHeading>
        </div>
        <div className="w-1/3 h-[150px] shadow-allSide px-8 py-6 shadow-gray-200 rounded-md">
          <div className="w-max m-auto pb-2">
            <PuzzlePiece />
          </div>
          <SubHeading font={`font-normal`} align={`text-center`}>
            Others
          </SubHeading>
        </div>
      </div>
    </SectionLayout>
  );
}

export default PersonalLoanCards;
