import Text from "../../components/Text";

function ClosedLoans() {
  const closedLoans = [
    {
      status: "completed",
      loanType: "Personal Loan",
      amount: 500000,
      closeDate: "2024-06-22",
    },
    {
      status: "canceled",
      loanType: "Business Loan",
      amount: 100000,
      closeDate: "2024-06-20",
    },
  ];
  return (
    <div className="overflow-x-scroll sm:overflow-x-hidden">
      <div className="w-[150%] sm:w-full flex px-2 items-center border-b border-b-textColor3 py-1">
        <Text
          font={`font-semibold`}
          color={`textColor3`}
          align={`text-left w-[20%]`}
        >
          Loan Type
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
          Closure Date
        </Text>
        <Text
          font={`font-semibold`}
          color={`textColor3`}
          align={`text-left w-[20%]`}
        >
          Closure Status
        </Text>
        <Text
          font={`font-semibold`}
          color={`textColor3`}
          align={`text-left w-[20%]`}
        >
          Action
        </Text>
      </div>
      {closedLoans.map((item, index) => (
        <div
          key={index}
          className="w-[150%] sm:w-full flex px-2 items-center border-b border-b-textColor3 py-1"
        >
          <Text
            font={`font-semibold`}
            color={`textColor3`}
            align={`text-left w-[20%]`}
          >
            {item.loanType}
          </Text>
          <Text
            font={`font-semibold`}
            color={`textColor3`}
            align={`text-left w-[20%]`}
          >
            {item.amount}
          </Text>
          <Text
            font={`font-semibold`}
            color={`textColor3`}
            align={`text-left w-[20%]`}
          >
            {item.closeDate}
          </Text>
          <Text
            font={`font-semibold capitalize`}
            color={item.status === "canceled" ? `red-600` : `primary`}
            align={`text-left w-[20%]`}
          >
            {item.status}
          </Text>
          <Text
            font={`font-semibold`}
            color={`textColor3`}
            align={`text-left w-[20%]`}
          >
            <button className="py-1 px-2 border border-textColor3 rounded-sm hover:bg-accent/20">
              {item.status === "canceled" ? "Check Report" : "View Statement"}
            </button>
          </Text>
        </div>
      ))}
    </div>
  );
}

export default ClosedLoans;
