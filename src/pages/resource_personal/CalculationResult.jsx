import { useEffect, useState } from "react";
import Heading2 from "../../components/Heading2";
import Text from "../../components/Text";
import { personalCalculator } from "../../services/Calculator";
import { AiOutlineLoading } from "react-icons/ai";

function CalculationResult({ data }) {
  const [estimatedLoan, setEstimatedLoan] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    async function getCalculationResult() {
      setIsLoading(true);
      try {
        const result = await personalCalculator(data);
        setEstimatedLoan(result);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    }
    getCalculationResult();
  }, [data]);
  return (
    <div className="bg-white rotate-[8deg] rounded-[15px] p-[20px]">
      <Text align={`text-center`} color={`accent`} padding={`pb-2`}>
        Your Result is Ready
      </Text>
      <Heading2 align={`text-center`} font={`font-normal`}>
        Here&apos;s what your loan could look like
      </Heading2>
      <div className="p-4">
        <Text font={`font-semibold`} align={`text-center`} color={`accent`}>
          Monthly Payment
        </Text>
        <Heading2
          color={`text-primary`}
          align={`text-center`}
          font={`font-bold`}
        >
          {isLoading && (
            <AiOutlineLoading className="animate-spin w-max m-auto" />
          )}
          {isError && "Failed to load"}
          {estimatedLoan && `$ ${estimatedLoan.result.monthly_payment}`}
        </Heading2>
        <Text
          font={`font-semibold`}
          align={`text-center`}
          color={`accent`}
          padding={"pt-4"}
        >
          Annual Rate (%)
        </Text>
        <Heading2
          color={`text-primary`}
          align={`text-center`}
          font={`font-bold`}
        >
          {isLoading && (
            <AiOutlineLoading className="animate-spin w-max m-auto" />
          )}
          {isError && "Failed to load"}
          {estimatedLoan && estimatedLoan.result.apr}
        </Heading2>
      </div>
    </div>
  );
}

export default CalculationResult;
