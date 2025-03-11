import { useSelector } from "react-redux";
import Heading2 from "../../components/Heading2";
import Text from "../../components/Text";
import DashboardLayout from "../user-dashboard/DashboardLayout";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTransactions } from "../../services/loansPortfolio";
import { BiError } from "react-icons/bi";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SubHeading from "../../components/SubHeading";
import { formatDateToYYYYMMDD } from "../../services/dateFunctions";
import LoadingScreen from "../../ui/LoadingScreen";

function Transaction() {
  const user = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState(null);
  const [isloading, setIsloading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    if (!user.isLoggedIn) {
      navigate("/auth/login");
    } else if (user.userType === "investor") {
      navigate("/");
    }
  }, [user.isLoggedIn, user.userType, navigate]);
  if (!user.isLoggedIn || user.userType === "investor") {
    <LoadingScreen />;
  }
  useEffect(() => {
    async function fetchTransactions() {
      if (user.isLoggedIn) {
        try {
          setIsloading(true);
          const data = await getTransactions(user.userToken);
          setTransaction(data.result.transactions);
          setIsloading(false);
        } catch (error) {
          setIsError(true);
          setIsloading(false);
        }
      }
    }
    fetchTransactions();
  }, [user.userToken, user.isLoggedIn]);

  return (
    <DashboardLayout active={"transaction"}>
      <div className="h-full bg-white rounded-md px-8 py-6">
        <Heading2 font={`font-bold font-poppins`}>Transaction History</Heading2>
        <div className="overflow-x-scroll sm:overflow-x-hidden mt-2 sm:mt-0">
          <div className="w-[180%] sm:w-full flex px-2 items-center border-b border-b-textColor3 py-1">
            <Text
              font={`font-semibold`}
              color={`textColor3`}
              align={`text-left w-[20%]`}
            >
              Date
            </Text>
            <Text
              font={`font-semibold`}
              color={`textColor3`}
              align={`text-left w-[20%]`}
            >
              Description
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
              align={`text-left w-[15%]`}
            >
              TrxID
            </Text>
            <Text
              font={`font-semibold`}
              color={`textColor3`}
              align={`text-left w-[15%]`}
            >
              Type
            </Text>
            <Text
              font={`font-semibold`}
              color={`textColor3`}
              align={`text-left w-[15%]`}
            >
              Status
            </Text>
          </div>
          {isloading && (
            <SkeletonTheme baseColor="#ff6b001a" highlightColor="#fff">
              <div className="w-[180%] sm:w-full flex px-2 items-center py-1 gap-2">
                <div className="w-[20%]">
                  <Skeleton count={2} />
                </div>
                <div className="w-[25%]">
                  <Skeleton count={2} />
                </div>
                <div className="w-[15%]">
                  <Skeleton count={2} />
                </div>
                <div className="w-[15%]">
                  <Skeleton count={2} />
                </div>
                <div className="w-[10%]]">
                  <Skeleton count={2} />
                </div>
                <div className="w-[15%]">
                  <Skeleton count={2} />
                </div>
              </div>
            </SkeletonTheme>
          )}
          {isError && (
            <div className="flex gap-2 animate-pulse items-center m-auto w-max h-max">
              <BiError className="text-red-900 text-3xl" />
              <SubHeading>Error Loading Data</SubHeading>
            </div>
          )}
          {transaction &&
            (transaction.length === 0 ? (
              <div className="mt-4">
                <SubHeading color={`secondary`} align={`text-center`}>
                  No Transactons Yet!!
                </SubHeading>
              </div>
            ) : (
              transaction.map((item, index) => (
                <div
                  key={index}
                  className="w-[180%] sm:w-full flex px-2 items-center border-b border-b-textColor3 py-1"
                >
                  <Text
                    font={`font-semibold`}
                    color={`textColor3`}
                    align={`text-left w-[20%]`}
                  >
                    {formatDateToYYYYMMDD(item.date)}
                  </Text>
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
                    align={`text-left w-[15%]`}
                  >
                    {item.amount}
                  </Text>
                  <Text
                    font={`font-semibold`}
                    color={`textColor3`}
                    align={`text-left w-[15%]`}
                  >
                    {item.transaction_id}
                  </Text>
                  <Text
                    font={`font-semibold`}
                    color={`textColor3`}
                    align={`text-left w-[15%]`}
                  >
                    {item.type}
                  </Text>
                  <Text
                    font={`font-semibold`}
                    color={`textColor3`}
                    align={`text-left w-[15%]`}
                  >
                    <span
                      className={`${
                        item.status === "Late"
                          ? "text-red-600"
                          : item.type === "Debit"
                          ? "text-islamic"
                          : "text-blueText"
                      }`}
                    >
                      {item.status}
                    </span>
                  </Text>
                </div>
              ))
            ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Transaction;
