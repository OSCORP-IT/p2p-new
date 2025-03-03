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
import CalculationResult from "./CalculationResult";

function PersonalLoanCalculatorHero() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState({
    credit_score_min: "680",
    credit_score_max: "700",
    borrow_amount: "12000",
    income_source: "",
    estimated_annual_pre_tax_income: "100000",
    home_ownership: "",
    year: "3",
  });

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
              {page === 1 && (
                <CreditScoreScreen
                  setPage={setPage}
                  data={data}
                  setData={setData}
                />
              )}
              {page === 2 && (
                <BorrowScreen setPage={setPage} data={data} setData={setData} />
              )}
              {page === 3 && (
                <IncomeScreen setPage={setPage} data={data} setData={setData} />
              )}
              {page === 4 && (
                <PreTaxScreen setPage={setPage} data={data} setData={setData} />
              )}
              {page === 5 && (
                <HaveHomeScreen
                  setPage={setPage}
                  data={data}
                  setData={setData}
                />
              )}
              {page === 6 && (
                <CalculationResult data={data} setData={setData} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalLoanCalculatorHero;
