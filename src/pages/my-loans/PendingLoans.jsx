import Text from "../../components/Text";

function PendingLoans() {
  const pendingLoans = [
    {
      status: "under review",
      loanType: "Car Loan",
      amount: 500000,
      appDate: "2024-06-22",
    },
    {
      status: "processing",
      loanType: "Business Loan",
      amount: 100000,
      nextPayment: { amount: 15000, dueInDays: 3 },
      appDate: "2024-06-20",
    },
  ];
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
      {pendingLoans.map((item, index) => (
        <div
          key={index}
          className="w-[150%] sm:w-full flex px-2 items-center border-b border-b-textColor3 py-1"
        >
          <Text
            font={`font-semibold`}
            color={`textColor3`}
            align={`text-left w-[30%]`}
          >
            {item.loanType}
          </Text>
          <Text
            font={`font-semibold`}
            color={`textColor3`}
            align={`text-left w-[25%]`}
          >
            {item.amount}
          </Text>
          <Text
            font={`font-semibold`}
            color={`textColor3`}
            align={`text-left w-[25%]`}
          >
            {item.appDate}
          </Text>
          <Text
            font={`font-semibold capitalize`}
            color={item.status === "processing" ? `primary` : `accent`}
            align={`text-left w-[20%]`}
          >
            {item.status}
          </Text>
        </div>
      ))}
    </div>
  );
}

export default PendingLoans;
