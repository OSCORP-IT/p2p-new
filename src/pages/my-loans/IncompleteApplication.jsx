import Text from "../../components/Text";

function IncompleteApplication() {
  const incompleteLoans = [
    {
      status: "30",
      loanType: "Personal Loan",
      amount: 500000,
      appDate: "2024-06-22",
    },
    {
      status: "65",
      loanType: "Business Loan",
      amount: 100000,
      appDate: "2024-06-20",
    },
  ];
  return (
    <div className="overflow-x-scroll sm:overflow-x-hidden">
      <div className="w-[180%] sm:w-full flex px-2 items-center border-b border-b-textColor3 py-1">
        <Text
          font={`font-semibold`}
          color={`textColor3`}
          align={`text-left w-[20%] tab:w-[25%]`}
        >
          Loan Type
        </Text>
        <Text
          font={`font-semibold`}
          color={`textColor3`}
          align={`text-left w-[15%] tab:w-[25%]`}
        >
          Amount Requested
        </Text>
        <Text
          font={`font-semibold`}
          color={`textColor3`}
          align={`text-left w-[25%] tab:w-[20%]`}
        >
          Application Date
        </Text>
        <Text
          font={`font-semibold`}
          color={`textColor3`}
          align={`text-left w-[20%] tab:w-[14%]`}
        >
          Application Status
        </Text>
        <Text
          font={`font-semibold`}
          color={`textColor3`}
          align={`text-left w-[20%] tab:w-[16%]`}
        >
          Action
        </Text>
      </div>
      {incompleteLoans.map((item, index) => (
        <div
          key={index}
          className="w-[180%] sm:w-full flex px-2 items-center border-b border-b-textColor3 py-1"
        >
          <Text
            font={`font-semibold`}
            color={`textColor3`}
            align={`text-left w-[20%] tab:w-[25%]`}
          >
            {item.loanType}
          </Text>
          <Text
            font={`font-semibold`}
            color={`textColor3`}
            align={`text-left w-[15%] tab:w-[25%]`}
          >
            {item.amount}
          </Text>
          <Text
            font={`font-semibold`}
            color={`textColor3`}
            align={`text-left w-[25%] tab:w-[20%]`}
          >
            {item.appDate}
          </Text>
          <Text
            font={`font-semibold`}
            color={`textColor3`}
            align={`text-left w-[20%] tab:w-[14%]`}
          >
            {item.status}%
          </Text>
          <Text
            font={`font-semibold`}
            color={`textColor3`}
            align={`text-left w-[20%] tab:w-[16%]`}
          >
            <button className="py-1 px-2 border border-textColor3 rounded-sm hover:bg-accent/20">
              Complete Now
            </button>
          </Text>
        </div>
      ))}
    </div>
  );
}

export default IncompleteApplication;
