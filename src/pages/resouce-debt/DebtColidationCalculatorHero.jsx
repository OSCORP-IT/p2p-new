import SectionLayout from "../../ui/SectionLayout";
import SubTitle from "../../components/SubTitle";
import Text from "../../components/Text";
import { useState } from "react";
import SliderInputs from "./SliderInputs";
import PrimaryButton from "../../components/PrimaryButton";

function DebtColidationCalculatorHero() {
  const [debtToPay, setDebtToPay] = useState(12000);
  const [payMonthly, setPayMonthly] = useState(250);
  const [averageInterestRate, setAverageInterestRate] = useState(21);
  const [creditScore, setCreditScore] = useState(660);
  return (
    <div>
      <SectionLayout bg={`bg-accent/20`}>
        <SubTitle align={`text-center`} color={`text-primary`} padding={`py-0`}>
          Loan calculator for debt consolidation
        </SubTitle>
        <Text align={`text-center`} color={`textColor2`}>
          Estimate debt consolidation interest savings, and payments, with our
          fast and easy loan calculator
        </Text>
        <div className="p-[30px] bg-white rounded-[20px] border-2 border-accent mt-4 flex flex-wrap-reverse sm:flex-nowrap items-start">
          <div className="w-full sm:w-[60%] tab:w-1/2 sm:border-r sm:border-r-gray-300 px-4">
            <SliderInputs
              min={2000}
              max={40000}
              step={2000}
              sliderValue={debtToPay}
              setSliderValue={setDebtToPay}
              dollar={true}
              label={"How much debt do your need to pay off?"}
            />
            <SliderInputs
              min={0}
              max={20000}
              step={50}
              sliderValue={payMonthly}
              dollar={true}
              setSliderValue={setPayMonthly}
              label={"How much do you pay monthly?"}
            />
            <SliderInputs
              min={10}
              max={35}
              step={1}
              sliderValue={averageInterestRate}
              percent={true}
              setSliderValue={setAverageInterestRate}
              label={"What’s your average interest rate?"}
            />
            <SliderInputs
              min={300}
              max={850}
              step={10}
              sliderValue={creditScore}
              setSliderValue={setCreditScore}
              label={"What’s your credit score?"}
            />
          </div>
          <div className="w-full sm:w-[40%] tab:w-1/2 px-3 tab:px-6 pb-4 sm:pb-0">
            <p className="text-base tab:text-lg text-center">
              <span className="font-bold">
                Over 3 years, with a monthly payment of $418.87, and an APR of
                19.17%
              </span>
              , you could save this estimated amount of interest:
            </p>
            <h1 className="text-center text-primary text-[50px] tab:text-[72px] font-semibold">
              +${debtToPay - payMonthly}
            </h1>
            <p className="text-base tab:text-lg text-center py-4">
              Submit a quick application for a more personalized & accurate
              offer
            </p>
            <div className="w-max m-auto">
              <PrimaryButton noIcon={true}>Check your rate</PrimaryButton>
            </div>
          </div>
        </div>
      </SectionLayout>
    </div>
  );
}

export default DebtColidationCalculatorHero;
