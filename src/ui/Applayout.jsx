import { Outlet, useNavigate } from "react-router-dom";

function Applayout() {
  const nav = useNavigate();
  return (
    <div className="font-poppins">
      <div className="bg-white h-[75px] shadow-md shadow-gray-300 pl-4 flex flex-wrap gap-2 text-xs sm:text-base underline cursor-pointer">
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
      </div>
      <div className="h-min-screen">
        <Outlet />
      </div>
      <div className=" bg-gray-400 h-[100px] shadow-md pl-4">Footer</div>
    </div>
  );
}

export default Applayout;
