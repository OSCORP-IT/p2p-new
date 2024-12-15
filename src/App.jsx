import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Applayout from "./ui/Applayout";
import Home from "./ui/Home/Home";
import Investment from "./pages/investment/Investment";
import InvestmentIslamic from "./pages/investment-islamic/InvestmentIslamic";
import InvestmentAssure from "./pages/investment-assure/InvestmentAssure";
import InvestmentPlus from "./pages/investment-plus/InvestmentPlus";
import InvestmentReferral from "./pages/investment-referral/InvestmentReferral";
import GetFundConventional from "./pages/getfund-conventional/GetFundConventional";
import GetfFundCollateral from "./pages/getfund-collateral/GetfFundCollateral";
import GetFundIslamic from "./pages/getfund-islamic/GetFundIslamic";
import GetFundReferral from "./pages/getfund-referral/GetFundReferral";
import PLOverview from "./pages/pl-overview/PLOverview";
import PLDebt from "./pages/pl-debt/PLDebt";
import PLHomeImprovement from "./pages/pl-homeImprovement/PLHomeImprovement";
import PLMedicalLoan from "./pages/pl-medical/PLMedicalLoan";
import PLSpecialOccasion from "./pages/pl-special/PLSpecialOccasion";
import PLDentalLoan from "./pages/pl-dental/PLDentalLoan";
import PLBariatric from "./pages/pl-weightloss/PLBariatric";
import PersonalLoanCalculator from "./pages/resource_personal/PersonalLoanCalculator";
import DebtColidationCalculator from "./pages/resouce-debt/DebtColidationCalculator";
import HomeEquityCalculator from "./pages/resourse-homeEquity/HomeEquityCalculator";
import FertilityTreatment from "./pages/pl-fertility/FertilityTreatment";
import PlasticSurgery from "./pages/pl-plasricSurgery/PlasticSurgery";
import MentalHealth from "./pages/pl-mentalHealth/MentalHealth";
import CheckYourRate from "./pages/check-your-rate/CheckYourRate";
import LogIn from "./pages/login/LogIn";
import Registration from "./pages/login/Registration";
import useAutoLogout from "./useAutoLogOut";
import Form from "./pages/portfolio/Form";
import UserDashboard from "./pages/user-dashboard/UserDashboard";
import MyLoans from "./pages/my-loans/MyLoans";
import Transaction from "./pages/transaction/Transaction";
import AdminContact from "./pages/admin-contact/AdminContact";
import Settings from "./pages/settings/Settings";
import Profile from "./pages/profile/Profile";
import Disbursement from "./pages/disbursement/Disbursement";

const router = createBrowserRouter([
  {
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/investment",
        element: <Investment />,
      },
      {
        path: "/investment/islamic",
        element: <InvestmentIslamic />,
      },
      {
        path: "/investment/assure",
        element: <InvestmentAssure />,
      },
      {
        path: "/investment/plus",
        element: <InvestmentPlus />,
      },
      {
        path: "/investment/referral",
        element: <InvestmentReferral />,
      },
      {
        path: "/get-fund/conventional",
        element: <GetFundConventional />,
      },
      {
        path: "/get-fund/collateral",
        element: <GetfFundCollateral />,
      },
      {
        path: "/get-fund/islamic",
        element: <GetFundIslamic />,
      },
      {
        path: "/get-fund/referral",
        element: <GetFundReferral />,
      },
      {
        path: "/pl/overview",
        element: <PLOverview />,
      },
      {
        path: "/pl/debt",
        element: <PLDebt />,
      },
      {
        path: "/pl/home-improvement",
        element: <PLHomeImprovement />,
      },
      {
        path: "/pl/medical-loan",
        element: <PLMedicalLoan />,
      },
      {
        path: "/pl/special-occasion",
        element: <PLSpecialOccasion />,
      },
      {
        path: "/pl/dental",
        element: <PLDentalLoan />,
      },
      {
        path: "/pl/bariatric-surgery",
        element: <PLBariatric />,
      },
      {
        path: "/pl/plastic-surgery",
        element: <PlasticSurgery />,
      },
      {
        path: "/pl/mental-health",
        element: <MentalHealth />,
      },
      {
        path: "/pl/fertility-treatment",
        element: <FertilityTreatment />,
      },
      {
        path: "/calculator/personal",
        element: <PersonalLoanCalculator />,
      },
      {
        path: "/calculator/debt",
        element: <DebtColidationCalculator />,
      },
      {
        path: "/calculator/home-equity",
        element: <HomeEquityCalculator />,
      },
    ],
  },
  {
    path: "/check-rate",
    element: <CheckYourRate />,
  },
  {
    path: "/auth/login",
    element: <LogIn />,
  },
  {
    path: "/auth/registration",
    element: <Registration />,
  },
  {
    path: "/form/:portfolio_id",
    element: <Form />,
  },
  {
    path: "/user/dashboard",
    element: <UserDashboard />,
  },
  {
    path: "/user/my-loans",
    element: <MyLoans />,
  },
  {
    path: "/user/transaction",
    element: <Transaction />,
  },
  {
    path: "/user/admin-contact",
    element: <AdminContact />,
  },
  {
    path: "/user/settings",
    element: <Settings />,
  },
  {
    path: "/user/profile",
    element: <Profile />,
  },
  {
    path: "/user/disbursement",
    element: <Disbursement />,
  },
]);
function App() {
  useAutoLogout();
  return <RouterProvider router={router} />;
}

export default App;
