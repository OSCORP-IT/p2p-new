// import { useState } from "react";
import InvestmentDashboardLayout from "../investment-dashboard/InvestmentDashboardLayout";
import PerformanceBySector from "./PerformanceBySector";
import PerformanceOverview from "./PerformanceOverview";
import TopPerforming from "./TopPerforming";

function Performance() {
  //   const [invests, setInvests] = useState([1]);
  return (
    <InvestmentDashboardLayout
      active={"performance"}
      pageTitle={`Performance Metrics`}
    >
      <PerformanceOverview />
      <div className="my-3 w-full">
        <PerformanceBySector />
      </div>
      <div className="my-3 w-full">
        <TopPerforming />
      </div>
    </InvestmentDashboardLayout>
  );
}

export default Performance;
