import { useState } from "react";
import Heading2 from "../../components/Heading2";
import DashboardLayout from "../user-dashboard/DashboardLayout";
import Tab from "./Tab";

import ActiveLoans from "./ActiveLoans";
import PendingLoans from "./PendingLoans";
import IncompleteApplication from "./IncompleteApplication";
import ClosedLoans from "./ClosedLoans";

function MyLoans() {
  const [activeTab, setActiveTab] = useState("1");

  return (
    <DashboardLayout active={"loan"}>
      <div className="tab:h-full bg-white rounded-md px-4 tab:px-8 py-6 w-full overflow-x-hidden">
        <Heading2 font={`font-bold font-poppins`}>Loan Details</Heading2>
        <select
          name="lons"
          onChange={(e) => setActiveTab(e.target.value)}
          id="loans"
          className="mb-2 sm:hidden p-2 border border-textColor3 rounded-md font-semibold text-textColor3 text-base"
        >
          <option value="1">Active Loans</option>
          <option value="2">Pending Applications</option>
          <option value="3">Incomplete Applications</option>
          <option value="4">Closed Loans</option>
        </select>
        <div className="hidden sm:flex my-6 p-[3px] bg-gray-200 rounded-md  justify-normal items-center">
          <Tab
            activeTab={activeTab}
            index={"1"}
            onClick={() => setActiveTab("1")}
          >
            Active Loans
          </Tab>
          <Tab
            activeTab={activeTab}
            index={"2"}
            onClick={() => setActiveTab("2")}
          >
            Pending Applications
          </Tab>
          <Tab
            activeTab={activeTab}
            index={"3"}
            onClick={() => setActiveTab("3")}
          >
            Incomplete Applications
          </Tab>
          <Tab
            activeTab={activeTab}
            index={"4"}
            onClick={() => setActiveTab("4")}
          >
            Closed Loans
          </Tab>
        </div>
        {activeTab == 1 && <ActiveLoans />}
        {activeTab == 2 && <PendingLoans />}
        {activeTab == 3 && <IncompleteApplication />}
        {activeTab == 4 && <ClosedLoans />}
      </div>
    </DashboardLayout>
  );
}

export default MyLoans;
