// import { useState } from "react";
import { useSelector } from "react-redux";
import InvestmentDashboardLayout from "../investment-dashboard/InvestmentDashboardLayout";
import PerformanceBySector from "./PerformanceBySector";
import PerformanceOverview from "./PerformanceOverview";
import TopPerforming from "./TopPerforming";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import LoadingScreen from "../../ui/LoadingScreen";

function Performance() {
  //   const [invests, setInvests] = useState([1]);
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
    <InvestmentDashboardLayout
      active={"performance"}
      pageTitle={`Performance Metrics`}
    >
      <PerformanceOverview user={user} />
      <div className="my-3 w-full">
        <PerformanceBySector user={user} />
      </div>
      <div className="my-3 w-full">
        <TopPerforming user={user} />
      </div>
    </InvestmentDashboardLayout>
  );
}

export default Performance;
