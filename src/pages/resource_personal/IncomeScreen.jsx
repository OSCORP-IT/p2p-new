import SubHeading from "../../components/SubHeading";
import { useState } from "react";
import Text from "../../components/Text";
import Heading2 from "../../components/Heading2";
function IncomeScreen({ setPage }) {
  const [incomeSource, setIncomeSource] = useState("");
  function handleclick(value) {
    setIncomeSource(value);
    setPage(4);
  }
  return (
    <div className="bg-white rotate-[8deg] rounded-[15px] p-[20px]">
      <Text align={`text-center`} color={`accent`} padding={`pb-2`}>
        3/5
      </Text>
      <Heading2 align={`text-center`} font={`font-normal`}>
        How do you earn your income?
      </Heading2>
      <div className="p-4 flex items-center gap-4 flex-wrap">
        <div
          className={`w-[48%] p-3 rounded-md ${
            incomeSource === "employed" ? "bg-primary/20" : "bg-accent/20"
          } cursor-pointer hover:bg-primary/20`}
          onClick={() => handleclick("employed")}
        >
          <SubHeading align={`text-center`}>Employed</SubHeading>
        </div>
        <div
          className={`w-[48%] p-3 rounded-md ${
            incomeSource === "self" ? "bg-primary/20" : "bg-accent/20"
          } cursor-pointer hover:bg-primary/20`}
          onClick={() => handleclick("self")}
        >
          <SubHeading align={`text-center`}>Self-Employed</SubHeading>
        </div>
        <div
          className={`w-[48%] p-3 rounded-md ${
            incomeSource === "retired" ? "bg-primary/20" : "bg-accent/20"
          } cursor-pointer hover:bg-primary/20`}
          onClick={() => handleclick("retired")}
        >
          <SubHeading align={`text-center`}>Retired</SubHeading>
        </div>
        <div
          className={`w-[48%] p-3 rounded-md ${
            incomeSource === "others" ? "bg-primary/20" : "bg-accent/20"
          } cursor-pointer hover:bg-primary/20`}
          onClick={() => handleclick("others")}
        >
          <SubHeading align={`text-center`}>Others</SubHeading>
        </div>
      </div>
    </div>
  );
}

export default IncomeScreen;
