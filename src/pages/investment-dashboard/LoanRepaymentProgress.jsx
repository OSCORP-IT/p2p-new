import { useEffect, useState } from "react";
import Heading2 from "../../components/Heading2";
import Text from "../../components/Text";
import { getLoanRepaymentProgress } from "../../services/dashboard";
import SubHeading from "../../components/SubHeading";
import { BiError } from "react-icons/bi";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function LoanRepaymentProgress({ user }) {
  const [repayData, setRepayData] = useState(null);
  const [isloading, setIsloading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    async function fetchClosedLoans() {
      if (user.isLoggedIn) {
        try {
          setIsloading(true);
          const data = await getLoanRepaymentProgress(user.userToken);
          setRepayData(data.result.loan_repayment_progress);
          setIsloading(false);
        } catch (error) {
          setIsError(true);
          setIsloading(false);
        }
      }
    }
    fetchClosedLoans();
  }, [user.userToken, user.isLoggedIn]);
  return (
    <div className="h-auto sm:h-full w-full sm:w-1/2 tab:w-[60%] bg-white  rounded-md shadow-md px-5 py-4">
      <Heading2 font={`font-bold font-poppins`} padding={`pt-1 pb-4`}>
        Loan Repayment Progress
      </Heading2>
      {isloading && (
        <SkeletonTheme baseColor="#ff6b001a" highlightColor="#fff">
          <div className="w-full my-4">
            <Skeleton count={3} />
          </div>
        </SkeletonTheme>
      )}
      {isError && (
        <div className="flex gap-2 animate-pulse items-center m-auto w-max h-max">
          <BiError className="text-red-900 text-3xl" />
          <SubHeading>Something Wrong!</SubHeading>
        </div>
      )}
      {repayData &&
        (repayData.length === 0 ? (
          <div className="mt-4">
            <SubHeading color={`secondary`} align={`text-center`}>
              NO LOANS YET!! Get one.
            </SubHeading>
          </div>
        ) : (
          repayData.map((item, index) => (
            <div key={index} className="pb-5">
              <div className="flex items-center justify-between">
                <Text font={`font-semibold`} padding={`pt-1 pb-2`}>
                  {item.loan_type}
                </Text>
                <Text font={`font-semibold`} padding={`pt-1 pb-2`}>
                  {item.progress}%
                </Text>
              </div>
              <div className="h-2 w-full bg-gray-200 rounded-md">
                <div
                  style={{ width: `${item.progress}%` }}
                  className={`h-full bg-gradient-to-r from-[#ff6b00] via-[#803600] to-[#ff6b00] rounded-[40px]`}
                ></div>
              </div>
            </div>
          ))
        ))}
    </div>
  );
}

export default LoanRepaymentProgress;
