import { Outlet } from "react-router-dom";

function Applayout() {
  return (
    <div className="font-poppins">
      <Outlet />
    </div>
  );
}

export default Applayout;
