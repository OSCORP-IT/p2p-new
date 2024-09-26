import { Outlet } from "react-router-dom";

function Applayout() {
  return (
    <div className="font-poppins">
      <div className="bg-white h-[75px] shadow-md shadow-gray-300 pl-4">
        Header
      </div>
      <div className="h-min-screen">
        <Outlet />
      </div>
      <div className=" bg-gray-400 h-[100px] shadow-md pl-4">Footer</div>
    </div>
  );
}

export default Applayout;
