import InvestmentDashboardLayout from "./InvestmentDashboardLayout";
// import Text from "../../components/Text";
// import IconButton from "../../components/IconButton";
// import PaperPlaneTilt from "../../icon/PaperPlaneTilt";
// import { PiUsersThree } from "react-icons/pi";
// import { BiPlusCircle } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import InvestmentFields from "./InvestmentFields";
import RecentInvestments from "./RecentInvestments";
// import LoanDistribution from "./LoanDistribution";
// import UpcomingPayments from "./UpcomingPayments";
// import LoanDisbursementSchedule from "./LoanDisbursementSchedule";
import InitialOverviews from "./InitialOverviews";

function InvestmentDashboard() {
  const user = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user.isLoggedIn) {
      navigate("/auth/login");
    }
  }, [user.isLoggedIn, navigate]);

  return (
    <>
      <InvestmentDashboardLayout
        active={"dashboard"}
        pageTitle={`Investment Dashboard`}
      >
        <InitialOverviews />
        <div className="mt-3 w-full flex flex-wrap sm:flex-nowrap items-start gap-2 tab:gap-3">
          <InvestmentFields />
        </div>
        <div className="my-3 w-full flex items-start flex-wrap sm:flex-nowrap gap-2 tab:gap-3">
          <RecentInvestments />
        </div>
      </InvestmentDashboardLayout>
    </>
  );
}

export default InvestmentDashboard;
