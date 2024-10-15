import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Applayout from "./ui/Applayout";
import Home from "./ui/Home/Home";
import Investment from "./pages/investment/Investment";
import InvestmentIslamic from "./pages/investment-islamic/InvestmentIslamic";
import InvestmentAssure from "./pages/investment-assure/InvestmentAssure";
import InvestmentPlus from "./pages/investment-plus/InvestmentPlus";
import InvestmentReferral from "./pages/investment-referral/InvestmentReferral";

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
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
