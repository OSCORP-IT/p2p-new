import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Applayout from "./ui/Applayout";
import Home from "./ui/Home/Home";
import Investment from "./pages/investment/Investment";
import InvestmentIslamic from "./pages/investment-islamic/InvestmentIslamic";
import InvestmentAssure from "./pages/investment-assure/InvestmentAssure";

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
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
