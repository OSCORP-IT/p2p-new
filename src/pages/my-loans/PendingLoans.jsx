import { useEffect, useState } from "react";
import Text from "../../components/Text";
import { getPendingApplications } from "../../services/loansPortfolio";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { BiError } from "react-icons/bi";
import SubHeading from "../../components/SubHeading";
import { formatDateToYYYYMMDD } from "../../services/dateFunctions";

function PendingLoans({ user }) {
  const [pendingLoans, setPendingLoans] = useState(null);
  const [isloading, setIsloading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchActiveLoans() {
      if (user.isLoggedIn) {
        try {
          setIsloading(true);
          const data = await getPendingApplications(user.userToken);
          setPendingLoans(data.result.pending_applied_loan_portfolios);
          setIsloading(false);
        } catch (error) {
          setIsError(true);
          setIsloading(false);
        }
      }
    }
    fetchActiveLoans();
  }, [user.isLoggedIn, user.userToken]);
  return (
    <div className="overflow-x-scroll sm:overflow-x-hidden">
      <div className="w-[150%] sm:w-full flex px-2 items-center border-b border-b-textColor3 py-1">
        <Text
          font={`font-semibold`}
          color={`textColor3`}
          align={`text-left w-[30%]`}
        >
          Loan Type
        </Text>
        <Text
          font={`font-semibold`}
          color={`textColor3`}
          align={`text-left w-[25%]`}
        >
          Amount Requested
        </Text>
        <Text
          font={`font-semibold`}
          color={`textColor3`}
          align={`text-left w-[25%]`}
        >
          Application Date
        </Text>
        <Text
          font={`font-semibold`}
          color={`textColor3`}
          align={`text-left w-[20%]`}
        >
          Status
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
      {pendingLoans &&
        (pendingLoans.length === 0 ? (
          <div className="mt-4">
            <SubHeading color={`secondary`} align={`text-center`}>
              No Pending Applications!!
            </SubHeading>
          </div>
        ) : (
          pendingLoans.map((item, index) => (
            <div
              key={index}
              className="w-[150%] sm:w-full flex px-2 items-center border-b border-b-textColor3 py-1"
            >
              <Text
                font={`font-semibold`}
                color={`textColor3`}
                align={`text-left w-[30%]`}
              >
                {item.loan_type_name}
              </Text>
              <Text
                font={`font-semibold`}
                color={`textColor3`}
                align={`text-left w-[25%]`}
              >
                {item.requested_amount}
              </Text>
              <Text
                font={`font-semibold`}
                color={`textColor3`}
                align={`text-left w-[25%]`}
              >
                {formatDateToYYYYMMDD(item.application_date)}
              </Text>
              <Text
                font={`font-semibold capitalize`}
                color={item.status === "processing" ? `primary` : `accent`}
                align={`text-left w-[20%]`}
              >
                {item.status}
              </Text>
            </div>
          ))
        ))}
    </div>
  );
}

export default PendingLoans;
