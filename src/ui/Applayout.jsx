import { Outlet, useNavigate } from "react-router-dom";

function Applayout() {
  const nav = useNavigate();
  return (
    <div className="font-poppins">
      <div className="bg-white h-[75px] shadow-md shadow-gray-300 pl-4 flex gap-2 underline cursor-pointer">
        <p onClick={() => nav("/")}>Home</p>
        <p onClick={() => nav("/investment")}>Investment</p>
      </div>
      <div className="h-min-screen">
        <Outlet />
      </div>
      <div className=" bg-gray-400 h-[100px] shadow-md pl-4">Footer</div>
    </div>
  );
}

export default Applayout;
