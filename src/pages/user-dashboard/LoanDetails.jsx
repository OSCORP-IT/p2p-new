import { useEffect, useState } from "react";
import Bank from "../../assets/Bank.svg";
import CreditCard from "../../assets/CreditCard.svg";
import Wallet from "../../assets/Wallet.svg";
import Heading2 from "../../components/Heading2";
import Small from "../../components/Small";
import SmallText from "../../components/SmallText";
import { getInitialLoanData } from "../../services/dashboard";
import Skeleton from "react-loading-skeleton";
function LoanDetails({ user }) {
  const [data, setData] = useState({
    total_loan_balance: "",
    growth: "",
    active_loans: "",
    pending_application: "",
    next_payment_due: "",
    due_days: "",
  });
  const [isloading, setIsloading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    async function fetchInitialLoanData() {
      if (user.isLoggedIn) {
        try {
          setIsloading(true);
          const data = await getInitialLoanData(user.userToken);
          setData(data.result);
          setIsloading(false);
        } catch (error) {
          setIsError(true);
          setIsloading(false);
        }
      }
    }
    fetchInitialLoanData();
  }, [user.userToken, user.isLoggedIn]);
  return (
    <div className="w-full sm:w-3/4 tab:w-2/3 flex flex-wrap sm:flex-nowrap items-center gap-2 tab:gap-3">
      <div className="w-[48%] sm:w-1/3 shadow-md bg-white p-[10px] overflow-hidden rounded-md relative">
        <div className=" absolute -top-10 -right-8 w-[100px] h-[100px] bg-accent/20 rounded-full"></div>
        <div className="flex items-center justify-between">
          <Small padding={`py-0`} color={`textColor3`}>
            Total Loan Balance
          </Small>
          <div className="p-1 bg-accent rounded-[5px]">
            <img src={Bank} alt="bank" />
          </div>
        </div>
        {isloading ? (
          <Skeleton count={1} />
        ) : isError ? (
          "Error!"
        ) : (
          <Heading2 font={`font-bold font-poppins`}>
            ৳ {data.total_loan_balance}
          </Heading2>
        )}
        <SmallText padding={`pb-1`} color={`textColor3`}>
          {isloading ? (
            <Skeleton count={1} />
          ) : (
            <span
              className={data.growth < 0 ? "text-[#a92929]" : "text-[#0da500]"}
            >
              {data.growth}%{" "}
            </span>
          )}
          from last month
        </SmallText>
      </div>
      <div className="w-[48%] sm:w-1/3 shadow-md bg-white p-[10px] overflow-hidden rounded-md relative">
        <div className=" absolute -top-10 -right-8 w-[100px] h-[100px] bg-purple-800/20 rounded-full"></div>
        <div className="flex items-center justify-between">
          <Small padding={`py-0`} color={`textColor3`}>
            Active Loans
          </Small>
          <div className="p-1 bg-purple-800 rounded-[5px]">
            <img src={CreditCard} alt="CreditCard" />
          </div>
        </div>
        {isloading ? (
          <Skeleton count={1} />
        ) : isError ? (
          "Error!"
        ) : (
          <Heading2 font={`font-bold font-poppins`}>
            {data.active_loans}
          </Heading2>
        )}
        <SmallText padding={`pb-1`} color={`textColor3`}>
          {isloading ? <Skeleton count={1} /> : data.pending_application}{" "}
          pending for approval
        </SmallText>
      </div>
      <div className="hidden sm:block sm:w-1/3 shadow-md bg-white p-[10px] overflow-hidden rounded-md relative">
        <div className=" absolute -top-10 -right-8 w-[100px] h-[100px] bg-[#0da500]/20 rounded-full"></div>
        <div className="flex items-center justify-between">
          <Small padding={`py-0`} color={`textColor3`}>
            Next Payment Due
          </Small>
          <div className="p-1 bg-[#0da500] rounded-[5px]">
            <img src={Wallet} alt="wallet" />
          </div>
        </div>
        {isloading ? (
          <Skeleton count={1} />
        ) : isError ? (
          "Error!"
        ) : (
          <Heading2 font={`font-bold font-poppins`}>
            {data.next_payment_due}
          </Heading2>
        )}
        <SmallText padding={`pb-1`} color={`textColor3`}>
          {isloading ? <Skeleton count={1} /> : `due in ${data.due_days}`} days
        </SmallText>
      </div>
    </div>
  );
}

export default LoanDetails;
