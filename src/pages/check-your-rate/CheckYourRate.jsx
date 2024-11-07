import { useNavigate } from "react-router-dom";
import Logo from "../../assets/BlackLogo.png";
import HowMuchBorrow from "./HowMuchBorrow";
import { useState } from "react";
import PhoneNumber from "./PhoneNumber";
import OtpCheck from "./OtpCheck";
import PersonalDetail from "./PersonalDetail";
import HomeAddress from "./HomeAddress";

function CheckYourRate() {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-screen bg-gray-200">
      <div className="h-[70px] bg-white shadow-md shadow-gray-300 py-2">
        <img
          src={Logo}
          alt="logo"
          className="w-max m-auto cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>
      <div className="sm:mt-[30px] tab:mt-[60px] bg-white p-3 sm:p-[25px] tab:py-[30px] tab:px-[40px] w-full sm:w-[80%] tab:w-[45%] rounded-md m-auto">
        {page === 1 && <HowMuchBorrow setPage={setPage} />}
        {page === 2 && <PhoneNumber setPage={setPage} />}
        {page === 3 && <OtpCheck setPage={setPage} />}
        {page === 4 && <PersonalDetail setPage={setPage} />}
        {page === 5 && <HomeAddress setPage={setPage} />}
      </div>
    </div>
  );
}

export default CheckYourRate;
