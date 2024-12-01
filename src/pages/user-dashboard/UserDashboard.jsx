import Small from "../../components/Small";
import Heading2 from "../../components/Heading2";
import DashboardLayout from "./DashboardLayout";
import SmallText from "../../components/SmallText";

function UserDashboard() {
  return (
    <>
      <DashboardLayout active={"dashboard"}>
        <div className="flex items-center gap-3">
          <div className="w-2/3 flex items-center gap-3">
            <div className="w-1/3 bg-white p-[10px] rounded-md">
              <Small padding={`py-0`} color={`textColor3`}>
                Loan Balance
              </Small>
              <Heading2 font={`font-bold font-poppins`}>৳ 50,000,000</Heading2>
              <SmallText padding={`pb-1`} color={`textColor3`}>
                <span className="text-[#0da500]">+20.1%</span> from last month
              </SmallText>
            </div>
            <div className="w-1/3 bg-white p-[10px] rounded-md">
              <Small padding={`py-0`} color={`textColor3`}>
                Active Loans
              </Small>
              <Heading2 font={`font-bold font-poppins`}>03</Heading2>
              <SmallText padding={`pb-1`} color={`textColor3`}>
                2 pending for approval
              </SmallText>
            </div>
            <div className="w-1/3 bg-white p-[10px] rounded-md">
              <Small padding={`py-0`} color={`textColor3`}>
                Next Payment Due
              </Small>
              <Heading2 font={`font-bold font-poppins`}>৳ 50,000</Heading2>
              <SmallText padding={`pb-1`} color={`textColor3`}>
                due in 5 days
              </SmallText>
            </div>
          </div>
          <div className="w-1/3 bg-white p-[10px] rounded-md"></div>
        </div>
      </DashboardLayout>
    </>
  );
}

export default UserDashboard;
