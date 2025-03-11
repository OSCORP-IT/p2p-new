import InvestmentDashboardLayout from "./InvestmentDashboardLayout";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import InvestmentFields from "./InvestmentFields";
import RecentInvestments from "./RecentInvestments";
import InitialOverviews from "./InitialOverviews";
import LoadingScreen from "../../ui/LoadingScreen";

function InvestmentDashboard() {
  const user = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user.isLoggedIn) {
      navigate("/auth/login");
    } else if (user.userType === "client") {
      navigate("/");
    }
  }, [user.isLoggedIn, user.userType, navigate]);
  if (!user.isLoggedIn || user.userType === "client") {
    <LoadingScreen />;
  }

  return (
    <>
      <InvestmentDashboardLayout
        active={"dashboard"}
        pageTitle={`Investment Dashboard`}
      >
        <InitialOverviews user={user} />
        <div className="mt-3 w-full flex flex-wrap sm:flex-nowrap items-start gap-2 tab:gap-3">
          <InvestmentFields user={user} />
        </div>
        <div className="my-3 w-full flex items-start flex-wrap sm:flex-nowrap gap-2 tab:gap-3">
          <RecentInvestments user={user} />
        </div>
      </InvestmentDashboardLayout>
    </>
  );
}

export default InvestmentDashboard;
