import { useEffect, useRef, useState } from "react";
import IconButton from "../../components/IconButton";
import Text from "../../components/Text";
import PaperPlaneTilt from "../../icon/PaperPlaneTilt";
import DetailListFormat from "./DetailListFormat";
import SubTitle from "../../components/SubTitle";
import { getActiveLoans } from "../../services/loansPortfolio";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { BiError } from "react-icons/bi";
import SubHeading from "../../components/SubHeading";
function ActiveLoans({ user }) {
  const [activeLoans, setActiveLoans] = useState(null);
  const middleRef = useRef(null);
  const [showDetails, setShowDetails] = useState(false);
  const [isloading, setIsloading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (middleRef.current && !middleRef.current.contains(event.target)) {
        setShowDetails(false); // Call the function passed via props
      }
    };

    // Attach event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowDetails]);
  useEffect(() => {
    async function fetchActiveLoans() {
      if (user.isLoggedIn) {
        try {
          setIsloading(true);
          const data = await getActiveLoans(user.userToken);
          setActiveLoans(data.result.active_applied_loan_portfolios);
          setIsloading(false);
        } catch (error) {
          setIsError(true);
          setIsloading(false);
          console.log(error);
        }
      }
    }
    fetchActiveLoans();
  }, [user.isLoggedIn, user.userToken]);
  return (
    <div className="overflow-x-scroll sm:overflow-x-hidden">
      {showDetails && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black/15">
          <div className="flex items-center justify-center h-full">
            <div
              ref={middleRef}
              className="w-full sm:w-3/5 tab:w-1/3 rounded-md bg-white border-2 border-gray-300 p-6"
            >
              <Text padding={`py-0`}>Personal Loan</Text>
              <div className="flex items-center justify-between">
                <SubTitle
                  padding={`py-0`}
                  color={`text-accent`}
                  font={`bold font-poppins`}
                >
                  Car Loan
                </SubTitle>
                <div className="rounded-full bg-green-600 text-white text-[10px] sm:text-xs px-4 py-1">
                  Active
                </div>
              </div>
              <Text color={`textColor3`} padding={`pt-0 pb-2`}>
                Loan ID: 01
              </Text>
              <DetailListFormat
                name={"Total Amount"}
                value={"5,00,000"}
                currencySign={true}
              />
              <DetailListFormat
                name={"Paid"}
                value={"1,00,000"}
                currencySign={true}
              />
              <DetailListFormat
                name={"Remaining"}
                value={"4,00,000"}
                currencySign={true}
              />
              <DetailListFormat
                name={"Next Payment"}
                value={"20,000"}
                currencySign={true}
              />
              <DetailListFormat name={"Due Date"} value={"2024-06-22"} />
              <DetailListFormat name={"Term"} value={"36 Months"} />
              <DetailListFormat name={"Repayment Progress"} value={"20%"} />
              <div className="h-2 w-full bg-gray-200 rounded-[40px] mt-1">
                <div
                  style={{ width: `20%` }}
                  className={`h-full bg-gradient-to-r from-[#ff6b00] via-[#803600] via-slate-50 to-[#ff6b00] rounded-[40px]`}
                ></div>
              </div>
              <div className="mt-4">
                <IconButton bg={`accent w-full`} text={`make payment`}>
                  <PaperPlaneTilt />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="w-[200%] sm:w-full flex px-2 items-center border-b border-b-textColor3 py-1">
        <Text
          font={`font-semibold`}
          color={`textColor3`}
          align={`text-left w-[10%]`}
        >
          Loan ID
        </Text>
        <Text
          font={`font-semibold`}
          color={`textColor3`}
          align={`text-left w-[25%]`}
        >
          Loan Type
        </Text>
        <Text
          font={`font-semibold`}
          color={`textColor3`}
          align={`text-left w-[15%]`}
        >
          Amount
        </Text>
        <Text
          font={`font-semibold`}
          color={`textColor3`}
          align={`text-left w-[22%]`}
        >
          Next Payment
        </Text>
        <Text
          font={`font-semibold`}
          color={`textColor3`}
          align={`text-left w-[16%]`}
        >
          Repayment Date
        </Text>
        <Text
          font={`font-semibold`}
          color={`textColor3`}
          align={`text-left w-[12%]`}
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
      {activeLoans &&
        (activeLoans.length === 0 ? (
          <div className="mt-4">
            <SubHeading color={`secondary`} align={`text-center`}>
              No Active Loans!!
            </SubHeading>
          </div>
        ) : (
          activeLoans.map((item, index) => (
            <div
              key={index}
              className="w-[200%] sm:w-full flex px-2 items-center border-b border-b-textColor3 py-1"
            >
              <Text
                font={`font-semibold`}
                color={`textColor3`}
                align={`text-left w-[10%]`}
              >
                {item.loanID}
              </Text>
              <Text
                font={`font-semibold`}
                color={`textColor3`}
                align={`text-left w-[25%]`}
              >
                {item.loanType}
              </Text>
              <Text
                font={`font-semibold`}
                color={`textColor3`}
                align={`text-left w-[15%]`}
              >
                ৳ {item.amount}
              </Text>
              <Text
                font={`font-semibold`}
                color={`textColor3`}
                align={`text-left w-[22%]`}
              >
                {`৳ ${item.nextPayment.amount} (Due in ${item.nextPayment.dueInDays} days)`}
              </Text>
              <Text
                font={`font-semibold`}
                color={`textColor3`}
                align={`text-left w-[16%]`}
              >
                {item.repaymentDate}
              </Text>
              <Text
                font={`font-semibold`}
                color={`textColor3`}
                align={`text-left w-[12%]`}
              >
                <button
                  onClick={() => setShowDetails(true)}
                  className="py-1 px-2 border border-textColor3 rounded-sm hover:bg-accent/20"
                >
                  <Text color={`textcolor3`}>View Details</Text>
                </button>
              </Text>
            </div>
          ))
        ))}
    </div>
  );
}

export default ActiveLoans;
