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
import Form from "./pages/portfolio/Form";
import PersonalLoanCalculator from "./pages/resource_personal/PersonalLoanCalculator";
import DebtColidationCalculator from "./pages/resouce-debt/DebtColidationCalculator";
import HomeEquityCalculator from "./pages/resourse-homeEquity/HomeEquityCalculator";

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
    path: "/portfolio-form",
    element: <Form />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
