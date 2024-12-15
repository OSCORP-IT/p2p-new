import { useSelector } from "react-redux";
import Heading2 from "../../components/Heading2";
import SmallText from "../../components/SmallText";
import SubTitle from "../../components/SubTitle";
import Text from "../../components/Text";
import DashboardLayout from "../user-dashboard/DashboardLayout";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const disbursements = [
  {
    loanType: "Personal Loan",
    loanName: "Home Improvement Loan",
    principal: "৳ 5,00,000",
    interestRate: "5%",
    totalAmount: "৳ 5,25,000",
    duration: "24 months",
    installments: [
      {
        installmentNo: 1,
        amount: "৳ 1,00,000",
        date: "2024-03-25",
        status: "Complete",
      },
      {
        installmentNo: 2,
        amount: "৳ 1,00,000",
        date: "2024-08-20",
        status: "Complete",
      },
      {
        installmentNo: 3,
        amount: "৳ 1,00,000",
        date: "2025-01-24",
        status: "Pending",
      },
      {
        installmentNo: 4,
        amount: "৳ 1,00,000",
        date: "2025-06-25",
        status: "Pending",
      },
      {
        installmentNo: 5,
        amount: "৳ 1,00,000",
        date: "2025-11-26",
        status: "Pending",
      },
    ],
  },
  {
    loanType: "Vehicle Loan",
    loanName: "Car Loan",
    principal: "৳ 8,00,000",
    interestRate: "7%",
    totalAmount: "৳ 8,56,000",
    duration: "36 months",
    installments: [
      {
        installmentNo: 1,
        amount: "৳ 1,14,000",
        date: "2024-04-10",
        status: "Pending",
      },
      {
        installmentNo: 2,
        amount: "৳ 1,14,000",
        date: "2024-09-15",
        status: "Pending",
      },
      {
        installmentNo: 3,
        amount: "৳ 1,14,000",
        date: "2025-02-20",
        status: "Pending",
      },
      {
        installmentNo: 4,
        amount: "৳ 1,14,000",
        date: "2025-07-25",
        status: "Pending",
      },
      {
        installmentNo: 5,
        amount: "৳ 1,14,000",
        date: "2025-12-30",
        status: "Pending",
      },
    ],
  },
];
function Disbursement() {
  const user = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user.isLoggedIn) {
      navigate("/auth/login");
    }
  }, [user.isLoggedIn, navigate]);
  return (
    <DashboardLayout active={`disbursement`}>
      <div className="bg-white rounded-md px-4 tab:px-8 py-6 w-full">
        <Heading2 font={`font-bold font-poppins`}>
          Loan Disbursement Schedule
        </Heading2>
        {disbursements.map((item, index) => (
          <div
            key={index}
            className="p-5 border border-textColor3 rounded-md mt-4"
          >
            <Text padding={`py-0`} color={`textColor3`}>
              {item.loanType}
            </Text>
            <SubTitle padding={`py-0`} font={`bold font-poppins leading-snug`}>
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
        ))}
      </div>
    </DashboardLayout>
  );
}

export default Disbursement;
