import Heading2 from "../../components/Heading2";
import Text from "../../components/Text";
import DashboardLayout from "../user-dashboard/DashboardLayout";

function Transaction() {
  const transaction = [
    {
      Date: "2024-06-22",
      Description: "Loan Repayment",
      Amount: 500000,
      TrxID: "B7e38jasKl",
      Type: "Debit",
      Status: "Completed",
    },
    {
      Date: "2024-06-22",
      Description: "Loan Repayment",
      Amount: 100000,
      TrxID: "Nsjhh763jlk",
      Type: "Debit",
      Status: "Completed",
    },
    {
      Date: "2024-06-22",
      Description: "Loan Disbursement",
      Amount: 5000000,
      TrxID: "sdfue4kK8f",
      Type: "Credit",
      Status: "Completed",
    },
    {
      Date: "2024-06-22",
      Description: "Loan Repayment",
      Amount: 800000,
      TrxID: "Xsedifo63jl",
      Type: "Debit",
      Status: "Late",
    },
    {
      Date: "2024-06-22",
      Description: "Loan Disbursement",
      Amount: 200000,
      TrxID: "IksaieJHL87",
      Type: "Credit",
      Status: "Completed",
    },
    {
      Date: "2024-06-22",
      Description: "Loan Repayment",
      Amount: 70000,
      TrxID: "faserfo32r9",
      Type: "Debit",
      Status: "Completed",
    },
  ];

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
              align={`text-left w-[25%]`}
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
              align={`text-left w-[10%]`}
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
          {transaction.map((item, index) => (
            <div
              key={index}
              className="w-[180%] sm:w-full flex px-2 items-center border-b border-b-textColor3 py-1"
            >
              <Text
                font={`font-semibold`}
                color={`textColor3`}
                align={`text-left w-[20%]`}
              >
                {item.Date}
              </Text>
              <Text
                font={`font-semibold`}
                color={`textColor3`}
                align={`text-left w-[25%]`}
              >
                {item.Description}
              </Text>
              <Text
                font={`font-semibold`}
                color={`textColor3`}
                align={`text-left w-[15%]`}
              >
                {item.Amount}
              </Text>
              <Text
                font={`font-semibold`}
                color={`textColor3`}
                align={`text-left w-[15%]`}
              >
                {item.TrxID}
              </Text>
              <Text
                font={`font-semibold`}
                color={`textColor3`}
                align={`text-left w-[10%]`}
              >
                {item.Type}
              </Text>
              <Text
                font={`font-semibold`}
                color={`textColor3`}
                align={`text-left w-[15%]`}
              >
                <span
                  className={`${
                    item.Status === "Late"
                      ? "text-red-600"
                      : item.Type === "Debit"
                      ? "text-islamic"
                      : "text-blueText"
                  }`}
                >
                  {item.Status}
                </span>
              </Text>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Transaction;
