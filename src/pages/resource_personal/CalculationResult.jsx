import { useEffect, useState } from "react";
import Heading2 from "../../components/Heading2";
import Text from "../../components/Text";
import Small from "../../components/Small";
import { personalCalculator } from "../../services/Calculator";
import { AiOutlineLoading } from "react-icons/ai";

function CalculationResult({ data, setData }) {
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
    <div className="bg-white rotate-[8deg] rounded-[15px] p-[20px] ">
      <Text align={`text-center`} color={`accent`} padding={`pb-2`}>
        Your Result is Ready
      </Text>
      <Heading2 align={`text-center`} font={`font-normal`}>
        Here&apos;s what your loan could look like
      </Heading2>
      <div className="flex justify-normal items-center flex-col sm:flex-row">
        <div className="w-1/2 p-4 border-r-4 border-r-primary">
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
            {!isLoading &&
              estimatedLoan &&
              `$ ${estimatedLoan.result.monthly_payment}`}
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
            {!isLoading && estimatedLoan && estimatedLoan.result.apr}
          </Heading2>
        </div>
        <div className="w-1/2 p-4">
          <Heading2
            color={`text-primary`}
            align={`text-center`}
            font={`font-bold`}
          >
            ${data.borrow_amount}
          </Heading2>
          <input
            type="range"
            className="w-full h-1"
            min={2000}
            max={40000}
            value={data.borrow_amount}
            onChange={(e) =>
              setData({ ...data, borrow_amount: e.target.value })
            }
            step={2000}
          />
          <div className="flex justify-between items-center -mt-2">
            <Small color={`textColor3/50`}>2000</Small>
            <Small color={`textColor3/50`}>40000</Small>
          </div>
          <div className="flex justify-normal items-center mt-2 border border-primary rounded-xl">
            <div
              onClick={() => setData({ ...data, year: "3" })}
              className={`cursor-pointer w-1/2 rounded-l-xl px-3 py-2 ${
                data.year === "3" ? "bg-primary" : "bg-white"
              }`}
            >
              <Text
                align={`text-center`}
                font={`font-semibold`}
                color={data.year === "3" ? "white" : "primary"}
              >
                3 Years
              </Text>
            </div>
            <div
              onClick={() => setData({ ...data, year: "5" })}
              className={`cursor-pointer w-1/2 rounded-r-xl px-3 py-2 ${
                data.year === "5" ? "bg-primary" : "bg-white"
              }`}
            >
              <Text
                align={`text-center`}
                font={`font-semibold`}
                color={data.year === "5" ? "white" : "primary"}
              >
                5 Years
              </Text>
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
}

export default CalculationResult;
