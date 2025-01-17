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
import HomeEquityCalculator from "./pages/resource-homeEquity/HomeEquityCalculator";
import FertilityTreatment from "./pages/pl-fertility/FertilityTreatment";
import PlasticSurgery from "./pages/pl-plasricSurgery/PlasticSurgery";
import MentalHealth from "./pages/pl-mentalHealth/MentalHealth";
import CheckYourRate from "./pages/check-your-rate/CheckYourRate";
import LogIn from "./pages/login/LogIn";
import Registration from "./pages/login/Registration";
import useAutoLogout from "./useAutoLogOut";
import Form from "./pages/portfolio/Form";
import UserDashboard from "./pages/user-dashboard/UserDashboard";
import InvestmentDashboard from "./pages/investment-dashboard/InvestmentDashboard";
import MyLoans from "./pages/my-loans/MyLoans";
import Transaction from "./pages/transaction/Transaction";
import AdminContact from "./pages/admin-contact/AdminContact";
import Settings from "./pages/settings/Settings";
import Profile from "./pages/profile/Profile";
import Error from "./ui/Error";
import Disbursement from "./pages/disbursement/Disbursement";
import AboutUs from "./pages/about/AboutUs";
import ContactUs from "./pages/contact/ContactUs";
import MyInvestment from "./pages/my-investments/MyInvestment";
import Performance from "./pages/performance/Performance";
import InvestmentAdminContact from "./pages/invest-admin-contact/InvestmentAdminContact";
import InvestmentSettings from "./pages/investment-settings/InvestmentSettings";
import ForgotPassword from "./pages/forgot-password/ForgotPassword";
import InvestmentProfile from "./pages/invest-profile/InvestmentProfile";
import GetFundReferralForm from "./pages/getfund-referral/GetFundReferralForm";
import FAQPage from "./pages/faq/FAQPage";

const router = createBrowserRouter([
  {
    element: <Applayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
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
        path: "/get-fund/referral/form",
        element: <GetFundReferralForm />,
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
      {
        path: "/faq",
        element: <FAQPage />,
      },
    ],
  },
  {
    path: "/check-rate",
    element: <CheckYourRate />,
    errorElement: <Error />,
  },
  {
    path: "/auth/login",
    element: <LogIn />,
    errorElement: <Error />,
  },
  {
    path: "/auth/registration",
    element: <Registration />,
    errorElement: <Error />,
  },
  {
    path: "/auth/forgot-password",
    element: <ForgotPassword />,
    errorElement: <Error />,
  },
  {
    path: "/form/:portfolio_id",
    element: <Form />,
    errorElement: <Error />,
  },
  {
    path: "/user/dashboard",
    element: <UserDashboard />,
    errorElement: <Error />,
  },
  {
    path: "/user/my-loans",
    element: <MyLoans />,
    errorElement: <Error />,
  },
  {
    path: "/user/transaction",
    element: <Transaction />,
    errorElement: <Error />,
  },
  {
    path: "/user/admin-contact",
    element: <AdminContact />,
    errorElement: <Error />,
  },
  {
    path: "/user/settings",
    element: <Settings />,
    errorElement: <Error />,
  },
  {
    path: "/user/profile",
    element: <Profile />,
    errorElement: <Error />,
  },
  {
    path: "/investment/profile",
    element: <InvestmentProfile />,
    errorElement: <Error />,
  },
  {
    path: "/user/disbursement",
    element: <Disbursement />,
    errorElement: <Error />,
  },
  {
    path: "/investment/dashboard",
    element: <InvestmentDashboard />,
    errorElement: <Error />,
  },
  {
    path: "/investment/my-investments",
    element: <MyInvestment />,
    errorElement: <Error />,
  },
  {
    path: "/investment/performance",
    element: <Performance />,
    errorElement: <Error />,
  },
  {
    path: "/investment/admin-contact",
    element: <InvestmentAdminContact />,
    errorElement: <Error />,
  },
  {
    path: "/investment/settings",
    element: <InvestmentSettings />,
    errorElement: <Error />,
  },
]);
function App() {
  useAutoLogout();
  return <RouterProvider router={router} />;
}

export default App;
