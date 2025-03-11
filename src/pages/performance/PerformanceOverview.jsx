import { useEffect, useState } from "react";
import Heading2 from "../../components/Heading2";
import SubHeading from "../../components/SubHeading";
import Text from "../../components/Text";
import { getInitialPerformanceMetrics } from "../../services/investmentDashboard";
import Skeleton from "react-loading-skeleton";
function PerformanceOverview({ user }) {
  const [performanceMetrics, setPerformanceMetrics] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    async function fetchInitialPerformanceMetrics() {
      if (user.isLoggedIn) {
        try {
          setIsLoading(true);
          const data = await getInitialPerformanceMetrics(user.userToken);
          setPerformanceMetrics(data.result);
          setIsLoading(false);
        } catch (error) {
          setIsError(true);
          setIsLoading(false);
        }
      }
    }
    fetchInitialPerformanceMetrics();
  }, [user.userToken, user.isLoggedIn]);
  console.log(performanceMetrics);
  return (
    <div className="flex  flex-col sm:flex-row items-center gap-3">
      <div className="w-full tab:w-1/3 shadow-md bg-white p-[10px] overflow-hidden rounded-md relative">
        <div className=" absolute -top-4 -right-6 blur-2xl  w-[100px] h-[100px] bg-purple-700/20 rounded-full"></div>
        <div className="flex items-center justify-between">
          <div>
            <SubHeading padding={`py-0`} color={`textColor4`}>
              Total Return
            </SubHeading>
            <Text padding={`py-0`} color={`textColor3`}>
              Overall investment performance
            </Text>
            {isLoading ? (
              <Skeleton count={1} />
            ) : isError ? (
              "Error!"
            ) : (
              !isError &&
              !isLoading &&
              performanceMetrics && (
                <Heading2
                  font={`font-bold font-poppins`}
                  padding={`pt-2 pb-0`}
                  color={`text-islamic`}
                >
                  {performanceMetrics.total_return.percentage_value}%
                </Heading2>
              )
            )}
            {isLoading ? (
              <Skeleton count={1} />
            ) : isError ? (
              "Error!"
            ) : (
              !isError &&
              !isLoading &&
              performanceMetrics && (
                <Text padding={`py-0`} color={`textColor4`}>
                  ৳ {performanceMetrics.total_return.message}
                </Text>
              )
            )}
          </div>
        </div>
      </div>
      <div className="w-full tab:w-1/3 shadow-md bg-white p-[10px] overflow-hidden rounded-md relative">
        <div className=" absolute -top-4 -right-6 blur-2xl  w-[100px] h-[100px] bg-accent/20 rounded-full"></div>
        <div className="flex items-center justify-between">
          <div>
            <SubHeading padding={`py-0`} color={`textColor4`}>
              Annualize Return
            </SubHeading>
            <Text padding={`py-0`} color={`textColor3`}>
              Yearly average <br className="hidden sm:block tab:hidden" />{" "}
              return
            </Text>
            {isLoading ? (
              <Skeleton count={1} />
            ) : isError ? (
              "Error!"
            ) : (
              !isError &&
              !isLoading &&
              performanceMetrics && (
                <Heading2
                  font={`font-bold font-poppins`}
                  padding={`pt-2 pb-0`}
                  color={`text-islamic`}
                >
                  {performanceMetrics.annualize_return.percentage_value.toFixed(
                    1
                  )}
                  %
                </Heading2>
              )
            )}
            {isLoading ? (
              <Skeleton count={1} />
            ) : isError ? (
              "Error!"
            ) : (
              !isError &&
              !isLoading &&
              performanceMetrics && (
                <Text padding={`py-0`} color={`textColor4`}>
                  {performanceMetrics.annualize_return.message}
                </Text>
              )
            )}
          </div>
        </div>
      </div>
      <div className="w-full tab:w-1/3 shadow-md bg-white p-[10px] overflow-hidden rounded-md relative">
        <div className=" absolute -top-4 -right-6 blur-2xl  w-[100px] h-[100px] bg-islamic/20 rounded-full"></div>
        <div className="flex items-center justify-between">
          <div>
            <SubHeading padding={`py-0`} color={`textColor4`}>
              Risk-Adjusted Return
            </SubHeading>
            <Text padding={`py-0`} color={`textColor3`}>
              Sharp Ratio
            </Text>
            {isLoading ? (
              <Skeleton count={1} />
            ) : isError ? (
              "Error!"
            ) : (
              !isError &&
              !isLoading &&
              performanceMetrics && (
                <Heading2
                  font={`font-bold font-poppins`}
                  padding={`pt-2 pb-0`}
                  color={`text-accent`}
                >
                  {performanceMetrics.risk_adjusted_return.percentage_value}
                </Heading2>
              )
            )}
            {isLoading ? (
              <Skeleton count={1} />
            ) : isError ? (
              "Error!"
            ) : (
              !isError &&
              !isLoading &&
              performanceMetrics && (
                <Text padding={`py-0`} color={`textColor4`}>
                  Good risk-adjusted performance{" "}
                </Text>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerformanceOverview;
