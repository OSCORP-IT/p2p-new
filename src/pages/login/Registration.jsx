import SideBg from "../../assets/RegistrationSideBg.jpeg";
import Logo from "../../assets/BlackLogo.png";
import { useNavigate } from "react-router-dom";
import Text from "../../components/Text";
import { PiPhoneCall } from "react-icons/pi";
import { BiEnvelope } from "react-icons/bi";
import "react-datepicker/dist/react-datepicker.css";
import RegistrationStepOne from "./RegistrationStepOne";
import { useState } from "react";
import RegistrationStepTwo from "./RegistrationStepTwo";
import RegistrationStepThree from "./RegistrationStepThree";
const initialUserState = {
  first_name: "",
  last_name: "",
  identification_type: "",
  identification_number: "",
  date_of_birth: "",
  email: "",
  mobile_number: "",
  password: "",
  password_confirmation: "",
};

function Registration() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [userType, setUserType] = useState("");
  const [userData, setUserData] = useState(initialUserState);
  return (
    <div className="w-full bg-gray-200 sm:min-h-screen tab:h-screen flex sm:items-center">
      <div className="w-full sm:w-2/3 p-4 sm:p-0">
        <img
          src={Logo}
          alt="logo"
          className="sm:hidden w-max cursor-pointer mx-auto my-2"
          onClick={() => navigate("/")}
        />
        {page === 1 && (
          <RegistrationStepOne
            setPage={setPage}
            userType={userType}
            setUserType={setUserType}
            data={userData}
            setData={setUserData}
          />
        )}
        {page === 2 && (
          <RegistrationStepTwo setPage={setPage} data={userData} />
        )}
        {page === 3 && (
          <RegistrationStepThree
            userType={userType}
            setPage={setPage}
            data={userData}
            setData={setUserData}
          />
        )}
        <div className="w-full sm:hidden pt-[20px]">
          <div className="tab:w-max m-auto border-y border-gray-500 py-1 flex items-center gap-4 tab:gap-6 justify-center">
            <div className="flex items-center gap-1">
              <PiPhoneCall className="text-xl text-titleColor" />
              <Text color={`titleColor`} padding={`py-0`}>
                +880 1XXX XXXXXX
              </Text>
            </div>
            <div className="flex items-center gap-1">
              <BiEnvelope className="text-xl text-titleColor" />
              <Text color={`titleColor`} padding={`py-0`}>
                support@fintech.com
              </Text>
            </div>
          </div>
          <Text align={`text-center`} color={`titleColor`}>
            2024 © FINTECH
          </Text>
        </div>
      </div>
      <div
        className="hidden sm:w-1/3 sm:min-h-screen h-full bg-center bg-cover rounded-l-[20px] sm:py-[30px] sm:px-[20px] tab:py-[50px] tab:px-[30px] sm:flex flex-col justify-between"
        style={{ backgroundImage: `url(${SideBg})` }}
      >
        <img
          src={Logo}
          alt="logo"
          className="w-max cursor-pointer mx-auto"
          onClick={() => navigate("/")}
        />
        <div className="tab:w-full">
          <div className="tab:w-max m-auto border-y border-gray-200 flex flex-col tab:flex-row items-center gap-2 tab:gap-6 justify-center">
            <div className="flex items-center gap-1">
              <PiPhoneCall className="text-xl text-white" />
              <Text color={`white`} padding={`py-0`}>
                +880 1XXX XXXXXX
              </Text>
            </div>
            <div className="flex items-center gap-1">
              <BiEnvelope className="text-xl text-white" />
              <Text color={`white`} padding={`py-0`}>
                support@fintech.com
              </Text>
            </div>
          </div>
          <Text align={`text-center`} color={`white`}>
            2024 © FINTECH
          </Text>
        </div>
      </div>
    </div>
  );
}

export default Registration;
