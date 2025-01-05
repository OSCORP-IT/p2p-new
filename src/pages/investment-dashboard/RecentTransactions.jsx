import { useEffect, useState } from "react";
import PaperPlane from "../../assets/PaperPlane.svg";
import ArrRight from "../../assets/ArrRight.svg";
import Heading2 from "../../components/Heading2";
import Text from "../../components/Text";
import SmallText from "../../components/SmallText";
import { BiError } from "react-icons/bi";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { getRecentTransactions } from "../../services/dashboard";
import SubHeading from "../../components/SubHeading";
function RecentTransactions({ user }) {
  const [transactions, setTransactions] = useState(null);
  const [isloading, setIsloading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    async function fetchClosedLoans() {
      if (user.isLoggedIn) {
        try {
          setIsloading(true);
          const data = await getRecentTransactions(user.userToken);
          setTransactions(data.result.recent_transactions);
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
    <div className="h-full w-full sm:w-[50%] bg-white  rounded-md shadow-md px-5 py-4">
      <Heading2 font={`font-bold font-poppins`}>Recent Transaction</Heading2>
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
      {transactions &&
        (transactions.length === 0 ? (
          <div className="mt-4">
            <SubHeading color={`secondary`} align={`text-center`}>
              No Recent Transactions.
            </SubHeading>
          </div>
        ) : (
          transactions.map((item, index) => (
            <div
              key={index}
              className="flex items-start justify-between gap-2 tab:gap-3 mt-3"
            >
              <div className="flex items-center gap-2">
                <div
                  className={`${
                    item.type === "Repayment" ? "bg-red-700" : "bg-islamic"
                  } p-2 rounded-full`}
                >
                  <img
                    src={item.type === "Repayment" ? PaperPlane : ArrRight}
                    alt="transaction icon"
                    className="my-auto"
                  />
                </div>
                <div>
                  <Text font={`font-semibold`}>
                    {item.loan_type_name}
                    {item.type ? `-${item.type}` : ""}
                  </Text>
                  <SmallText padding={`py-0`} color={`textColor3`}>
                    {item.date}
                  </SmallText>
                </div>
              </div>
              <div>
                <Text
                  font={`font-semibold`}
                  color={item.type === "Repayment" ? "red-700" : "primary"}
                >
                  {item.type === "Repayment" ? "-" : "+"}৳{item.amount}
                </Text>
              </div>
            </div>
          ))
        ))}
    </div>
  );
}

export default RecentTransactions;
