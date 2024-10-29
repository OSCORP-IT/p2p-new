import { Outlet } from "react-router-dom";
import Header from "./Header";

function Applayout() {
  // const nav = useNavigate();
  return (
    <div className="font-poppins">
      {/* <div className="bg-white h-[75px] shadow-md shadow-gray-300 pl-4 flex flex-wrap gap-1 text-xs tab:text-base underline cursor-pointer">
        <p onClick={() => nav("/")}>Home</p>
        <p onClick={() => nav("/investment")}>Investment</p>
        <p onClick={() => nav("/investment/islamic")}>Investment Islamic</p>
        <p onClick={() => nav("/investment/assure")}>Investment Assure</p>
        <p onClick={() => nav("/investment/plus")}>Investment Plus</p>
        <p onClick={() => nav("/investment/referral")}>Investment Referral</p>
        <p onClick={() => nav("/get-fund/conventional")}>
          Get-fund Conventional
        </p>
        <p onClick={() => nav("/get-fund/collateral")}>Get-fund Collateral</p>
        <p onClick={() => nav("/get-fund/islamic")}>Get-fund Islamic</p>
        <p onClick={() => nav("/get-fund/referral")}>Get-fund Referral</p>
        <p onClick={() => nav("/pl/overview")}>PL Overview</p>
        <p onClick={() => nav("/pl/debt")}>PL Debt</p>
        <p onClick={() => nav("/pl/home-improvement")}>PL Home-Improve</p>
        <p onClick={() => nav("/pl/medical-loan")}>PL Medical</p>
        <p onClick={() => nav("/pl/special-occasion")}>PL Special</p>
        <p onClick={() => nav("/pl/dental")}>PL Dental</p>
      </div> */}
      <Header />
      <div className="h-min-screen">
        <Outlet />
      </div>
      <div className=" bg-gray-400 h-[100px] shadow-md pl-4">Footer</div>
    </div>
  );
}

export default Applayout;
