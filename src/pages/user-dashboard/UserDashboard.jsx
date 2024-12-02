import Small from "../../components/Small";
import Heading2 from "../../components/Heading2";
import DashboardLayout from "./DashboardLayout";
import SmallText from "../../components/SmallText";
import Bank from "../../assets/Bank.svg";
import CreditCard from "../../assets/CreditCard.svg";
import Wallet from "../../assets/Wallet.svg";
import CalendarDots from "../../assets/CalendarDots.svg";
import DounutChart from "./DounutChart";
import Text from "../../components/Text";

function UserDashboard() {
  const data = [
    {
      label: "Personal Loan",
      value: 23,
      amount: "500,000",
    },
    {
      label: "Business Loan",
      value: 43,
      amount: "5,000,000",
    },

    {
      label: "Home Loan",
      value: 34,
      amount: "10,000,000",
    },
  ];
  const repayData = [
    { label: "Personal Loan", value: 55 },
    { label: "Business Loan", value: 70 },
    { label: "Home Loan", value: 15 },
  ];

  return (
    <>
      <DashboardLayout active={"dashboard"}>
        <div className="flex w-full items-center gap-3">
          <div className="w-2/3 flex items-center gap-3">
            <div className="w-1/3 shadow-md bg-white p-[10px] overflow-hidden rounded-md relative">
              <div className=" absolute -top-10 -right-8 w-[100px] h-[100px] bg-accent/20 rounded-full"></div>
              <div className="flex items-center justify-between">
                <Small padding={`py-0`} color={`textColor3`}>
                  Total Loan Balance
                </Small>
                <div className="p-1 bg-accent rounded-[5px]">
                  <img src={Bank} alt="bank" />
                </div>
              </div>
              <Heading2 font={`font-bold font-poppins`}>৳ 50,000,000</Heading2>
              <SmallText padding={`pb-1`} color={`textColor3`}>
                <span className="text-[#0da500]">+20.1%</span> from last month
              </SmallText>
            </div>
            <div className="w-1/3 shadow-md bg-white p-[10px] overflow-hidden rounded-md relative">
              <div className=" absolute -top-10 -right-8 w-[100px] h-[100px] bg-purple-800/20 rounded-full"></div>
              <div className="flex items-center justify-between">
                <Small padding={`py-0`} color={`textColor3`}>
                  Active Loans
                </Small>
                <div className="p-1 bg-purple-800 rounded-[5px]">
                  <img src={CreditCard} alt="CreditCard" />
                </div>
              </div>
              <Heading2 font={`font-bold font-poppins`}>03</Heading2>
              <SmallText padding={`pb-1`} color={`textColor3`}>
                2 pending for approval
              </SmallText>
            </div>
            <div className="w-1/3 shadow-md bg-white p-[10px] overflow-hidden rounded-md relative">
              <div className=" absolute -top-10 -right-8 w-[100px] h-[100px] bg-[#0da500]/20 rounded-full"></div>
              <div className="flex items-center justify-between">
                <Small padding={`py-0`} color={`textColor3`}>
                  Next Payment Due
                </Small>
                <div className="p-1 bg-[#0da500] rounded-[5px]">
                  <img src={Wallet} alt="wallet" />
                </div>
              </div>
              <Heading2 font={`font-bold font-poppins`}>৳ 50,000</Heading2>
              <SmallText padding={`pb-1`} color={`textColor3`}>
                due in 5 days
              </SmallText>
            </div>
          </div>
          <div className="w-1/3 shadow-md bg-white p-[10px] rounded-md relative overflow-hidden">
            <div className=" absolute -top-8 -right-6 w-[100px] h-[100px] bg-primary/20 rounded-full"></div>
            <div className="flex items-center justify-between">
              <Small padding={`py-0`} color={`textColor3`}>
                Next Meeting
              </Small>
              <div className="p-1 bg-primary rounded-[5px]">
                <img src={CalendarDots} alt="CalendarDots" />
              </div>
            </div>
            <Heading2 font={`font-bold font-poppins`}>January 5,2025</Heading2>
            <SmallText padding={`pb-1`} color={`textColor3`}>
              Wednesday
            </SmallText>
          </div>
        </div>
        <div className="mt-3 w-full flex items-start gap-3">
          <div className="w-[40%] bg-white  rounded-md shadow-md px-5 py-4">
            <Heading2 font={`font-bold font-poppins`}>
              Loan Distribution
            </Heading2>
            <div className="flex items-center justify-between pt-2">
              <div>
                {data.map((item, index) => (
                  <div className="flex gap-2 items-start" key={index}>
                    <div
                      className={`${
                        index == 0
                          ? "bg-primary"
                          : index == 1
                          ? "bg-[#a259fb]"
                          : "bg-accent"
                      } w-5 h-2 rounded-md mt-1`}
                    ></div>
                    <div>
                      <SmallText font={`font-semibold`} padding={`py-0`}>
                        {item.label}
                      </SmallText>
                      <SmallText>৳ {item.amount}</SmallText>
                      <SmallText padding={`pb-1`} color={`textColor3`}>
                        {item.value}%
                      </SmallText>
                    </div>
                  </div>
                ))}
              </div>
              <div className="w-max m-auto">
                <DounutChart data={data} />
              </div>
            </div>
          </div>
          <div className="w-[60%] bg-white  rounded-md shadow-md px-5 py-4">
            <Heading2 font={`font-bold font-poppins`} padding={`pt-1 pb-4`}>
              Loan Repayment Progress
            </Heading2>
            {repayData.map((item, index) => (
              <div key={index} className="pb-5">
                <div className="flex items-center justify-between">
                  <Text font={`font-semibold`} padding={`pt-1 pb-2`}>
                    {item.label}
                  </Text>
                  <Text font={`font-semibold`} padding={`pt-1 pb-2`}>
                    {item.value}%
                  </Text>
                </div>
                <div className="h-2 w-full bg-gray-200 rounded-md">
                  <div
                    style={{ width: `${item.value}%` }}
                    className={`h-full bg-gradient-to-r from-[#ff6b00] via-[#803600] to-[#ff6b00] rounded-[40px]`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </DashboardLayout>
    </>
  );
}

export default UserDashboard;
