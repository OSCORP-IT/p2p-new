import { useEffect, useState } from "react";
import Text from "../../components/Text";
import { getIncompleteApplication } from "../../services/loansPortfolio";
import SubHeading from "../../components/SubHeading";
import { BiError } from "react-icons/bi";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { formatDateToYYYYMMDD } from "../../services/dateFunctions";
import { useNavigate } from "react-router-dom";

function IncompleteApplication({ user }) {
  const [incompleteLoans, setIncompleteLoans] = useState(null);
  const [isloading, setIsloading] = useState(false);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchIincompleteLoans() {
      if (user.isLoggedIn) {
        try {
          setIsloading(true);
          const data = await getIncompleteApplication(user.userToken);
          setIncompleteLoans(data.result.incomplete_applied_loan_portfolios);
          setIsloading(false);
        } catch (error) {
          setIsError(true);
          setIsloading(false);
        }
      }
    }
    fetchIincompleteLoans();
  }, [user.isLoggedIn, user.userToken]);

  return (
    <div className="overflow-x-scroll sm:overflow-x-hidden">
      <div className="w-[180%] sm:w-full flex px-2 items-center border-b border-b-textColor3 py-1">
        <Text
          font={`font-semibold`}
          color={`textColor3`}
          align={`text-left w-[20%] tab:w-[25%]`}
        >
          Loan Type
        </Text>
        <Text
          font={`font-semibold`}
          color={`textColor3`}
          align={`text-left w-[15%] tab:w-[25%]`}
        >
          Amount Requested
        </Text>
        <Text
          font={`font-semibold`}
          color={`textColor3`}
          align={`text-left w-[25%] tab:w-[20%]`}
        >
          Application Date
        </Text>
        <Text
          font={`font-semibold`}
          color={`textColor3`}
          align={`text-left w-[20%] tab:w-[14%]`}
        >
          Application Status
        </Text>
        <Text
          font={`font-semibold`}
          color={`textColor3`}
          align={`text-left w-[20%] tab:w-[16%]`}
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
      {incompleteLoans &&
        (incompleteLoans.length === 0 ? (
          <div className="mt-4">
            <SubHeading color={`secondary`} align={`text-center`}>
              No Pending Applications!!
            </SubHeading>
          </div>
        ) : (
          incompleteLoans.map((item, index) => (
            <div
              key={index}
              className="w-[180%] sm:w-full flex px-2 items-center border-b border-b-textColor3 py-1"
            >
              <Text
                font={`font-semibold`}
                color={`textColor3`}
                align={`text-left w-[20%] tab:w-[25%]`}
              >
                {item.loan_type_name}
              </Text>
              <Text
                font={`font-semibold`}
                color={`textColor3`}
                align={`text-left w-[15%] tab:w-[25%]`}
              >
                {item.requested_amount}
              </Text>
              <Text
                font={`font-semibold`}
                color={`textColor3`}
                align={`text-left w-[25%] tab:w-[20%]`}
              >
                {formatDateToYYYYMMDD(item.application_date)}
              </Text>
              <Text
                font={`font-semibold`}
                color={`textColor3`}
                align={`text-left w-[20%] tab:w-[14%]`}
              >
                {item.average_form_fill_up_percentage.toFixed(2)}%
              </Text>
              <Text
                font={`font-semibold`}
                color={`textColor3`}
                align={`text-left w-[20%] tab:w-[16%]`}
              >
                <button
                  onClick={() => navigate(`/form/${item.loan_portfolio_id}`)}
                  className="py-1 px-2 border border-textColor3 rounded-sm hover:bg-accent/20"
                >
                  Complete Now
                </button>
              </Text>
            </div>
          ))
        ))}
    </div>
  );
}

export default IncompleteApplication;
