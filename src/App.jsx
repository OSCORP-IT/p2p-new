import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import Applayout from "./ui/Applayout";
const Home = lazy(() => import("./ui/Home/Home"));
const Investment = lazy(() => import("./pages/investment/Investment"));
const InvestmentIslamic = lazy(() =>
  import("./pages/investment-islamic/InvestmentIslamic")
);
const InvestmentAssure = lazy(() =>
  import("./pages/investment-assure/InvestmentAssure")
);
const InvestmentPlus = lazy(() =>
  import("./pages/investment-plus/InvestmentPlus")
);
const InvestmentReferral = lazy(() =>
  import("./pages/investment-referral/InvestmentReferral")
);
const GetFundConventional = lazy(() =>
  import("./pages/getfund-conventional/GetFundConventional")
);
const GetfFundCollateral = lazy(() =>
  import("./pages/getfund-collateral/GetfFundCollateral")
);
const GetFundIslamic = lazy(() =>
  import("./pages/getfund-islamic/GetFundIslamic")
);
const GetFundReferral = lazy(() =>
  import("./pages/getfund-referral/GetFundReferral")
);
const PLOverview = lazy(() => import("./pages/pl-overview/PLOverview"));
const PLDebt = lazy(() => import("./pages/pl-debt/PLDebt"));
const PLHomeImprovement = lazy(() =>
  import("./pages/pl-homeImprovement/PLHomeImprovement")
);
const PLMedicalLoan = lazy(() => import("./pages/pl-medical/PLMedicalLoan"));
const PLSpecialOccasion = lazy(() =>
  import("./pages/pl-special/PLSpecialOccasion")
);
const PLDentalLoan = lazy(() => import("./pages/pl-dental/PLDentalLoan"));
const PLBariatric = lazy(() => import("./pages/pl-weightloss/PLBariatric"));
const PersonalLoanCalculator = lazy(() =>
  import("./pages/resource_personal/PersonalLoanCalculator")
);
const DebtColidationCalculator = lazy(() =>
  import("./pages/resouce-debt/DebtColidationCalculator")
);
const HomeEquityCalculator = lazy(() =>
  import("./pages/resource-homeEquity/HomeEquityCalculator")
);
const FertilityTreatment = lazy(() =>
  import("./pages/pl-fertility/FertilityTreatment")
);
const PlasticSurgery = lazy(() =>
  import("./pages/pl-plasricSurgery/PlasticSurgery")
);
const MentalHealth = lazy(() => import("./pages/pl-mentalHealth/MentalHealth"));
const CheckYourRate = lazy(() =>
  import("./pages/check-your-rate/CheckYourRate")
);
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
import Logo from "./assets/BlackLogo.png";
const FAQPage = lazy(() => import("./pages/faq/FAQPage"));
const PLAutoLoan = lazy(() => import("./pages/pl-auto/PLAutoLoan"));
const PLEngagement = lazy(() => import("./pages/pl-engagement/PLEngagement"));
const PLFuneral = lazy(() => import("./pages/pl-funeral/PLFuneral"));

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
        path: "/pl/auto-loan",
        element: <PLAutoLoan />,
      },
      {
        path: "/pl/engagement-ring",
        element: <PLEngagement />,
      },
      {
        path: "/pl/funeral-service",
        element: <PLFuneral />,
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
function AnimatedFallback() {
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div className="animate-pulse text-lg">
          <img src={Logo} alt="White Logo" />
        </div>
      </div>
    </div>
  );
}
function App() {
  useAutoLogout();
  return (
    <Suspense fallback={<AnimatedFallback />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
