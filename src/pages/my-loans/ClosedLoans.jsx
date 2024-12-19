import { useEffect, useState } from "react";
import Text from "../../components/Text";
import { getClosedLoans } from "../../services/loansPortfolio";
import { BiError } from "react-icons/bi";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
// import { formatDateToYYYYMMDD } from "../../services/dateFunctions";
import SubHeading from "../../components/SubHeading";

function ClosedLoans({ user }) {
  const [closedLoans, setClosedLoans] = useState(null);
  const [isloading, setIsloading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    async function fetchClosedLoans() {
      if (user.isLoggedIn) {
        try {
          setIsloading(true);
          const data = await getClosedLoans(user.userToken);
          setClosedLoans(data.result.closed_applied_loan_portfolios);
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
    <div className="overflow-x-scroll sm:overflow-x-hidden">
      <div className="w-[150%] sm:w-full flex px-2 items-center border-b border-b-textColor3 py-1">
        <Text
          font={`font-semibold`}
          color={`textColor3`}
          align={`text-left w-[20%]`}
        >
          Loan Type
        </Text>
        <Text
          font={`font-semibold`}
          color={`textColor3`}
          align={`text-left w-[20%]`}
        >
          Amount
        </Text>
        <Text
          font={`font-semibold`}
          color={`textColor3`}
          align={`text-left w-[20%]`}
        >
          Closure Date
        </Text>
        <Text
          font={`font-semibold`}
          color={`textColor3`}
          align={`text-left w-[20%]`}
        >
          Closure Status
        </Text>
        <Text
          font={`font-semibold`}
          color={`textColor3`}
          align={`text-left w-[20%]`}
        >
          Action
        </Text>
      </div>
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
          <SubHeading>Error Loading Data</SubHeading>
        </div>
      )}
      {closedLoans &&
        (closedLoans.length === 0 ? (
          <div className="mt-4">
            <SubHeading color={`secondary`} align={`text-center`}>
              Loans are yet to be closed!!
            </SubHeading>
          </div>
        ) : (
          closedLoans.map((item, index) => (
            <div
              key={index}
              className="w-[150%] sm:w-full flex px-2 items-center border-b border-b-textColor3 py-1"
            >
              <Text
                font={`font-semibold`}
                color={`textColor3`}
                align={`text-left w-[20%]`}
              >
                {item.loan_type_name}
              </Text>
              <Text
                font={`font-semibold`}
                color={`textColor3`}
                align={`text-left w-[20%]`}
              >
                {item.amount}
              </Text>
              <Text
                font={`font-semibold`}
                color={`textColor3`}
                align={`text-left w-[20%]`}
              >
                {item.closure_date}
              </Text>
              <Text
                font={`font-semibold capitalize`}
                color={item.status === "Canceled" ? `red-600` : `islamic`}
                align={`text-left w-[20%]`}
              >
                {item.status}
              </Text>
              <Text
                font={`font-semibold`}
                color={`textColor3`}
                align={`text-left w-[20%]`}
              >
                <button className="py-1 px-2 border border-textColor3 rounded-sm hover:bg-accent/20">
                  {item.status === "canceled"
                    ? "Check Report"
                    : "View Statement"}
                </button>
              </Text>
            </div>
          ))
        ))}
    </div>
  );
}

export default ClosedLoans;
