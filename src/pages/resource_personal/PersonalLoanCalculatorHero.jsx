import { FaCheckCircle } from "react-icons/fa";
import SubHeading from "../../components/SubHeading";
import Text from "../../components/Text";
import Title from "../../components/Title";
import { useState } from "react";
import CreditScoreScreen from "./CreditScoreScreen";
import BorrowScreen from "./BorrowScreen";
import IncomeScreen from "./IncomeScreen";
import PreTaxScreen from "./PreTaxScreen";
import HaveHomeScreen from "./HaveHomeScreen";

function PersonalLoanCalculatorHero() {
  const [page, setPage] = useState(1);

  return (
    <div className="w-full relative overflow-hidden">
      <div className="pt-4 px-4 tab:px-0 tab:w-10/12 m-auto flex flex-wrap tab:flex-nowrap items-center justify-between tab:h-[410px]">
        <div className="w-full tab:w-2/5">
          <SubHeading
            align={`text-center tab:text-left uppercase`}
            padding={`pb-1`}
            color={`primary`}
          >
            Personal loan calculator
          </SubHeading>
          <Title
            padding={"pb-4 leading-normal"}
            color={`text-titleColor`}
            align={`text-center tab:text-left`}
          >
            Estimate rates and payments
          </Title>
          <div className="flex items-start gap-4 w-[90%] tab:w-auto tab:m-0 m-auto">
            <FaCheckCircle className="text-primary text-xl" />
            <Text padding={`py-0`}>
              Estimate your rate and monthly payment in less than 30 seconds.
            </Text>
          </div>
          <div className="flex items-start gap-4 w-[90%] tab:w-auto tab:m-0 m-auto">
            <FaCheckCircle className="text-primary text-xl" />
            <Text padding={`py-0`}>
              This is not an application and won’t affect your credit score.
            </Text>
          </div>
        </div>
        <div className="w-full tab:w-[50%] p-6 my-6 tab:m-0">
          <div className="w-full shadow-allSide shadow-accent/60 rounded-md">
            <div className="bg-primary -rotate-[8deg] rounded-[15px]">
              {page === 1 && <CreditScoreScreen setPage={setPage} />}
              {page === 2 && <BorrowScreen setPage={setPage} />}
              {page === 3 && <IncomeScreen setPage={setPage} />}
              {page === 4 && <PreTaxScreen setPage={setPage} />}
              {page === 5 && <HaveHomeScreen setPage={setPage} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalLoanCalculatorHero;
