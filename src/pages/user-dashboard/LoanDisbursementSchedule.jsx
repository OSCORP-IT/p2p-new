import Heading2 from "../../components/Heading2";
import Text from "../../components/Text";
import { useEffect, useState } from "react";
import { getLoanDisbursementSchedule } from "../../services/dashboard";
import SubHeading from "../../components/SubHeading";
import { BiError } from "react-icons/bi";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
function LoanDisbursementSchedule({ user }) {
  const [disbursementData, setDisbursementData] = useState();
  const [isloading, setIsloading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    async function fetchClosedLoans() {
      if (user.isLoggedIn) {
        try {
          setIsloading(true);
          const data = await getLoanDisbursementSchedule(user.userToken);
          setDisbursementData(data.result.loan_disbursement_schedules);
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
    <div className="h-full w-full sm:w-[65%] tab:w-2/3 bg-white  rounded-md shadow-md px-5 py-4">
      <Heading2 font={`font-bold font-poppins`}>
        Loan Disbursement Schedule
      </Heading2>
      <div className="flex items-center justify-normal border-b border-textColor3 py-2">
        <Text
          font={`font-semibold`}
          color={`textColor3`}
          align={`text-left w-[35%]`}
        >
          Loan Name
        </Text>
        <Text
          font={`font-semibold`}
          color={`textColor3`}
          align={`text-left w-[25%]`}
        >
          Installment No
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
          Date
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
          <SubHeading>Something Wrong!</SubHeading>
        </div>
      )}
      {disbursementData &&
        (disbursementData.length === 0 ? (
          <div className="mt-4">
            <SubHeading color={`secondary`} align={`text-center`}>
              No Scheduled Disbursement.
            </SubHeading>
          </div>
        ) : (
          disbursementData.map((item, index) => (
            <div
              key={index}
              className="border-b border-textColor3 py-1 flex items-center"
            >
              <Text color={`textColor3`} align={`text-left w-[35%]`}>
                {item.loan_name}
              </Text>
              <Text color={`textColor3`} align={`text-left w-[25%]`}>
                {item.disbursement_no}
              </Text>
              <Text color={`textColor3`} align={`text-left w-[20%]`}>
                ৳ {item.amount}
              </Text>
              <Text color={`textColor3`} align={`text-left w-[20%]`}>
                {item.date}
              </Text>
            </div>
          ))
        ))}
    </div>
  );
}

export default LoanDisbursementSchedule;
