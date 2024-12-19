import { useSelector } from "react-redux";
import Heading2 from "../../components/Heading2";
import SmallText from "../../components/SmallText";
import SubTitle from "../../components/SubTitle";
import Text from "../../components/Text";
import DashboardLayout from "../user-dashboard/DashboardLayout";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDisbursement } from "../../services/dashboard";
import { BiError } from "react-icons/bi";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SubHeading from "../../components/SubHeading";
function Disbursement() {
  const [disbursements, setDisbursements] = useState(null);
  const [isloading, setIsloading] = useState(false);
  const [isError, setIsError] = useState(false);
  const user = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user.isLoggedIn) {
      navigate("/auth/login");
    }
  }, [user.isLoggedIn, navigate]);
  useEffect(() => {
    async function fetchActiveLoans() {
      if (user.isLoggedIn) {
        try {
          setIsloading(true);
          const data = await getDisbursement(user.userToken);
          setDisbursements(data.result.disbursement_schedules);
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
    <DashboardLayout active={`disbursement`}>
      <div className="bg-white rounded-md px-4 tab:px-8 py-6 w-full">
        <Heading2 font={`font-bold font-poppins`}>
          Loan Disbursement Schedule
        </Heading2>{" "}
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
        {disbursements &&
          (disbursements.length === 0 ? (
            <div className="mt-4">
              <SubHeading color={`secondary`} align={`text-center`}>
                No Disbursement Yet!!
              </SubHeading>
            </div>
          ) : (
            disbursements.map((item, index) => (
              <div
                key={index}
                className="p-5 border border-textColor3 rounded-md mt-4"
              >
                <Text padding={`py-0`} color={`textColor3`}>
                  {item.loanType}
                </Text>
                <SubTitle
                  padding={`py-0`}
                  font={`bold font-poppins leading-snug`}
                >
                  {item.loanName}
                </SubTitle>
                <div className=" mt-5">
                  <div className="flex items-center flex-wrap sm:flex-nowrap gap-2 sm:gap-0">
                    <div className=" w-[48%] sm:w-1/4">
                      <Text color={`textColor3`} padding={`py-0`}>
                        Principal
                      </Text>
                      <Heading2
                        color={`textColor3`}
                        font={`font-semibold font-poppins`}
                      >
                        {item.principal}
                      </Heading2>
                    </div>
                    <div className=" w-[48%] sm:w-1/4">
                      <Text color={`textColor3`} padding={`py-0`}>
                        Interest Rate
                      </Text>
                      <Heading2
                        color={`textColor3`}
                        font={`font-semibold font-poppins`}
                      >
                        {item.interestRate}
                      </Heading2>
                    </div>
                    <div className=" w-[48%] sm:w-1/4">
                      <Text color={`textColor3`} padding={`py-0`}>
                        Total Amount
                      </Text>
                      <Heading2
                        color={`textColor3`}
                        font={`font-semibold font-poppins`}
                      >
                        {item.totalAmount}
                      </Heading2>
                    </div>
                    <div className=" w-[48%] sm:w-1/4">
                      <Text color={`textColor3`} padding={`py-0`}>
                        Duration
                      </Text>
                      <Heading2
                        color={`textColor3`}
                        font={`font-semibold font-poppins`}
                      >
                        {item.duration}
                      </Heading2>
                    </div>
                  </div>
                </div>
                <div className=" mt-5">
                  <div className="flex items-end sm:items-center border-b border-textColor3 py-1">
                    <Text color={`textColor3`} font={`font-semibold w-[25%]`}>
                      Installment No.
                    </Text>
                    <Text color={`textColor3`} font={`font-semibold w-[25%]`}>
                      Amount
                    </Text>
                    <Text color={`textColor3`} font={`font-semibold w-[30%]`}>
                      Date
                    </Text>
                    <Text color={`textColor3`} font={`font-semibold w-[20%]`}>
                      Status
                    </Text>
                  </div>
                  {item.installments.map((installment, index) => (
                    <div
                      key={index}
                      className="flex items-center border-b border-textColor3 py-1"
                    >
                      <Text color={`textColor3`} font={`font-semibold w-[25%]`}>
                        {installment.installmentNo}
                      </Text>
                      <Text color={`textColor3`} font={`font-semibold w-[25%]`}>
                        {installment.amount}
                      </Text>
                      <Text color={`textColor3`} font={`font-semibold w-[30%]`}>
                        {installment.date}
                      </Text>
                      <SmallText
                        color={`textColor3`}
                        font={`font-semibold w-[20%]`}
                      >
                        <span
                          className={`${
                            installment.status === "Pending"
                              ? "bg-accent/10 text-accent"
                              : "bg-islamic/10 text-islamic"
                          } px-2 py-1 rounded-md w-max m-auto`}
                        >
                          {installment.status}
                        </span>
                      </SmallText>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ))}
      </div>
    </DashboardLayout>
  );
}

export default Disbursement;
