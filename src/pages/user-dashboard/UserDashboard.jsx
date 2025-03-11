import Heading2 from "../../components/Heading2";
import DashboardLayout from "./DashboardLayout";
import Text from "../../components/Text";
import IconButton from "../../components/IconButton";
import PaperPlaneTilt from "../../icon/PaperPlaneTilt";
import { PiUsersThree } from "react-icons/pi";
import { BiPlusCircle } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import LoanDetails from "./LoanDetails";
import NextMeeting from "./NextMeeting";
import LoanDistribution from "./LoanDistribution";
import LoanRepaymentProgress from "./LoanRepaymentProgress";
import UpcomingPayments from "./UpcomingPayments";
import RecentTransactions from "./RecentTransactions";
import LoanDisbursementSchedule from "./LoanDisbursementSchedule";
import LoadingScreen from "../../ui/LoadingScreen";

function UserDashboard() {
  const user = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user.isLoggedIn) {
      navigate("/auth/login");
    } else if (user.userType === "investor") {
      navigate("/");
    }
  }, [user.isLoggedIn, user.userType, navigate]);
  if (!user.isLoggedIn || user.userType === "investor") {
    <LoadingScreen />;
  }

  return (
    <>
      <DashboardLayout active={"dashboard"}>
        <div className="flex flex-wrap sm:flex-nowrap w-full items-center gap-2 tab:gap-3">
          <LoanDetails user={user} />
          <NextMeeting user={user} />
        </div>
        <div className="mt-3 w-full flex flex-wrap sm:flex-nowrap items-start gap-2 tab:gap-3 sm:h-[270px]">
          <LoanDistribution user={user} />
          <LoanRepaymentProgress user={user} />
        </div>
        <div className="mt-3 w-full flex items-start flex-wrap sm:flex-nowrap gap-2 tab:gap-3 sm:h-[270px]">
          <UpcomingPayments user={user} />
          <RecentTransactions user={user} />
        </div>
        <div className="mt-3 w-full flex flex-wrap sm:flex-nowrap items-start gap-2 tab:gap-3 sm:h-[250px] mb-3">
          <LoanDisbursementSchedule user={user} />
          <div className="h-full w-full sm:w-[35%] tab:w-1/3 bg-white  rounded-md shadow-md px-5 py-4">
            <Heading2 font={`font-bold font-poppins`} padding={`pt-1`}>
              Quick Actions
            </Heading2>
            <Text color={`textColor3`}>Manage your finance with ease</Text>
            <div className="mt-2">
              <IconButton bg={`accent w-full`} text={`make payment`}>
                <PaperPlaneTilt />
              </IconButton>
            </div>
            <div className="tab:hidden mt-2">
              <IconButton
                bg={`white w-full`}
                textColor={`text-[#737780]`}
                text={`apply new loan`}
                border={true}
                borderColor={`border-[#737780]`}
              >
                <BiPlusCircle className="font-semibold text-2xl" />
              </IconButton>
            </div>
            <div className="hidden tab:block mt-2">
              <IconButton
                bg={`white w-full`}
                textColor={`text-[#737780]`}
                text={`support ticket`}
                border={true}
                borderColor={`border-[#737780]`}
              >
                <BiPlusCircle className="font-semibold text-2xl" />
              </IconButton>
            </div>
            <div className="mt-2">
              <IconButton
                bg={`white w-full`}
                textColor={`text-[#737780]`}
                text={`admin contact`}
                border={true}
                borderColor={`border-[#737780]`}
              >
                <PiUsersThree className="font-semibold text-2xl" />
              </IconButton>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
}

export default UserDashboard;
