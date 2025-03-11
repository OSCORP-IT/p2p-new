import { useEffect, useState } from "react";
import Heading2 from "../../components/Heading2";
import DashboardLayout from "../user-dashboard/DashboardLayout";
import Tab from "./Tab";

import ActiveLoans from "./ActiveLoans";
import PendingLoans from "./PendingLoans";
import IncompleteApplication from "./IncompleteApplication";
import ClosedLoans from "./ClosedLoans";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllLoanCount } from "../../services/loansPortfolio";
import LoadingScreen from "../../ui/LoadingScreen";

function MyLoans() {
  const [activeTab, setActiveTab] = useState("1");
  const [allLoanCount, setAllLoanCount] = useState(null);

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
  useEffect(() => {
    async function fetchAllLoans() {
      try {
        const response = await getAllLoanCount(user.userToken);
        setAllLoanCount(response.result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchAllLoans();
  }, [user.userToken]);

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
          <option value="1">
            Active Loans(
            {allLoanCount ? allLoanCount.active_applied_loan_portfolios : 0})
          </option>
          <option value="2">
            Pending Applications(
            {allLoanCount ? allLoanCount.pending_applied_loan_portfolios : 0})
          </option>
          <option value="3">
            Incomplete Applications(
            {allLoanCount ? allLoanCount.incomplete_applied_loan_portfolios : 0}
            )
          </option>
          <option value="4">
            Closed Loans(
            {allLoanCount ? allLoanCount.closed_applied_loan_portfolios : 0})
          </option>
        </select>
        <div className="hidden sm:flex my-6 p-[3px] bg-gray-200 rounded-md  justify-normal items-center">
          <Tab
            activeTab={activeTab}
            index={"1"}
            onClick={() => setActiveTab("1")}
          >
            Active Loans (
            {allLoanCount ? allLoanCount.active_applied_loan_portfolios : 0})
          </Tab>
          <Tab
            activeTab={activeTab}
            index={"2"}
            onClick={() => setActiveTab("2")}
          >
            Pending Applications (
            {allLoanCount ? allLoanCount.pending_applied_loan_portfolios : 0})
          </Tab>
          <Tab
            activeTab={activeTab}
            index={"3"}
            onClick={() => setActiveTab("3")}
          >
            Incomplete Applications (
            {allLoanCount ? allLoanCount.incomplete_applied_loan_portfolios : 0}
            )
          </Tab>
          <Tab
            activeTab={activeTab}
            index={"4"}
            onClick={() => setActiveTab("4")}
          >
            Closed Loans (
            {allLoanCount ? allLoanCount.closed_applied_loan_portfolios : 0})
          </Tab>
        </div>
        {activeTab == 1 && <ActiveLoans user={user} />}
        {activeTab == 2 && <PendingLoans user={user} />}
        {activeTab == 3 && <IncompleteApplication user={user} />}
        {activeTab == 4 && <ClosedLoans user={user} />}
      </div>
    </DashboardLayout>
  );
}

export default MyLoans;
