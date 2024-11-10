import { FaLessThan } from "react-icons/fa6";
import SubHeading from "../../components/SubHeading";
import SubTitle from "../../components/SubTitle";
import Text from "../../components/Text";
import List from "../../icon/List";
import PrimaryButton from "../../components/PrimaryButton";
import { useState } from "react";

function IncomeCheck({ setPage }) {
  const [incomeSource, setIncomeSource] = useState("");
  return (
    <>
      <SubTitle align={`text-center`} font={`font-normal`}>
        Welcome, Mr. X!
      </SubTitle>
      <SubHeading align={`text-center`} padding={`pb-3`} font={`font-normal`}>
        What is your source of income?
      </SubHeading>
      <div
        className={`px-10 py-5 border border-gray-400 rounded-md cursor-pointer ${
          incomeSource === "employed" ? "bg-primary/10" : ""
        } hover:bg-primary/10 mt-3`}
        onClick={() => setIncomeSource("employed")}
      >
        <div className="w-max m-auto pb-3">
          <List />
        </div>
        <SubHeading align={`text-center uppercase`}>employed income</SubHeading>
        <Text align={`text-center`} padding={`py-0`}>
          You receive a <strong>W2</strong> for your primary source of income
        </Text>
      </div>
      <div
        className={`px-10 py-5 border border-gray-400 rounded-md cursor-pointer ${
          incomeSource === "self" ? "bg-primary/10" : ""
        } hover:bg-primary/10 mt-3`}
        onClick={() => setIncomeSource("self")}
      >
        <div className="w-max m-auto pb-3">
          <List />
        </div>
        <SubHeading align={`text-center uppercase`}>
          self-employed income
        </SubHeading>
        <Text align={`text-center`} padding={`py-0`}>
          You receive a <strong>1099</strong> or you own
          <strong> your own company</strong>
        </Text>
      </div>
      <div
        className={`px-10 py-5 border border-gray-400 rounded-md cursor-pointer ${
          incomeSource === "others" ? "bg-primary/10" : ""
        } hover:bg-primary/10 my-3`}
        onClick={() => setIncomeSource("others")}
      >
        <div className="w-max m-auto pb-3">
          <List />
        </div>
        <SubHeading align={`text-center uppercase`}>
          retirement / other
        </SubHeading>
        <Text align={`text-center`} padding={`py-0`}>
          You receive a <strong>retirement</strong> income,
          <strong> disability</strong> income or any
          <strong> other benefits</strong>. You may also include
          <strong> W2</strong> income
        </Text>
      </div>
      <div className="flex gap-2 items-center justify-between pt-4">
        <div
          className="border border-primary p-2 rounded-md cursor-pointer"
          onClick={() => setPage(5)}
        >
          <FaLessThan className="text-primary" />
        </div>
        <div className="w-full" onClick={() => setPage(7)}>
          <PrimaryButton width={`w-full`} noIcon={true}>
            Continue
          </PrimaryButton>
        </div>
      </div>
      <Text align={`text-center`} color={`textColor3`}>
        This will not affect your credit score
      </Text>
    </>
  );
}

export default IncomeCheck;
