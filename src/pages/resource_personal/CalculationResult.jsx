import { useEffect, useState } from "react";
import Heading2 from "../../components/Heading2";
import SubHeading from "../../components/SubHeading";
import Text from "../../components/Text";
import Small from "../../components/Small";
import PrimaryButton from "../../components/PrimaryButton";
import { personalCalculator } from "../../services/Calculator";
import { AiOutlineLoading } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function CalculationResult({ data, setData }) {
  const navigate = useNavigate();
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
        <div className="w-full px-4 sm:px-0 sm:w-1/2 p-2 sm:border-r-2 sm:border-r-primary">
          <Text font={`font-semibold`} align={`text-center`} color={`accent`}>
            Monthly Payment
          </Text>
          <SubHeading color={`primary`} align={`text-center`} font={`bold`}>
            {isLoading && (
              <AiOutlineLoading className="animate-spin w-max m-auto" />
            )}
            {isError && "Failed to load"}
            {!isError &&
              !isLoading &&
              estimatedLoan &&
              `$ ${estimatedLoan.result.monthly_payment}`}
          </SubHeading>
          <Text
            font={`font-semibold`}
            align={`text-center`}
            color={`accent`}
            padding={"pt-4"}
          >
            Annual Rate (%)
          </Text>
          <SubHeading color={`primary`} align={`text-center`} font={`bold`}>
            {isLoading && (
              <AiOutlineLoading className="animate-spin w-max m-auto" />
            )}
            {!isLoading && isError && "Failed to load"}
            {!isError &&
              !isLoading &&
              estimatedLoan &&
              estimatedLoan.result.apr}
          </SubHeading>
        </div>
        <div className="w-full px-4 sm:px-0 sm:w-1/2 p-4">
          <SubHeading color={`primary`} align={`text-center`} font={`bold`}>
            ${data.borrow_amount}
          </SubHeading>
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
                padding={`py-0`}
                color={data.year === "3" ? "white" : "primary"}
              >
                3 Years
              </Text>
              <p
                className={`text-[8px] text-center ${
                  data.year === "3" ? "text-white" : "text-primary"
                } font-medium`}
              >
                Lowest Rate
              </p>
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
                padding={`py-0`}
                color={data.year === "5" ? "white" : "primary"}
              >
                5 Years
              </Text>
              <p
                className={`text-[8px] text-center ${
                  data.year === "5" ? "text-white" : "text-primary"
                } font-medium`}
              >
                Less Payment
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => navigate("/check-rate")}
        className="w-max m-auto mt-4"
      >
        <PrimaryButton>check your rate</PrimaryButton>
      </div>
    </div>
  );
}

export default CalculationResult;
