import { useNavigate } from "react-router-dom";
import Logo from "../../assets/BlackLogo.png";
import HowMuchBorrow from "./HowMuchBorrow";
import { useState } from "react";
import PhoneNumber from "./PhoneNumber";
import OtpCheck from "./OtpCheck";
import PersonalDetail from "./PersonalDetail";
import HomeAddress from "./HomeAddress";
import IncomeCheck from "./IncomeCheck";
import FinancialPicture from "./FinancialPicture";
import LoanDisburse from "./LoanDisburse";
import SetPassword from "./SetPassword";
const initialState = {
  borrowData: { borrowAmount: 50000, purpose: "" },
  phone: { phoneNumber: "", update: true },
  personalDetail: { firstName: "", lastName: "", dob: "", email: "", id: "" },
  homeAddress: { address: "", thana: "", district: "", postalCode: "" },
  incomeSource: "",
  financialPicture: { annualIncome: 0, additionalIncome: 0, monthlyRate: 0 },
  loanApproval: { approved: false, amount: 0 },
  password: { inital: "", confirm: "", agree: true },
};
function CheckYourRate() {
  const [page, setPage] = useState(9);
  const [userData, setUserData] = useState(initialState);
  const navigate = useNavigate();
  console.log(userData);
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
        {page === 1 && (
          <HowMuchBorrow
            data={userData}
            setData={setUserData}
            setPage={setPage}
          />
        )}
        {page === 2 && (
          <PhoneNumber
            data={userData}
            setData={setUserData}
            setPage={setPage}
          />
        )}
        {page === 3 && (
          <OtpCheck data={userData} setData={setUserData} setPage={setPage} />
        )}
        {page === 4 && (
          <PersonalDetail
            data={userData}
            setData={setUserData}
            setPage={setPage}
          />
        )}
        {page === 5 && (
          <HomeAddress
            data={userData}
            setData={setUserData}
            setPage={setPage}
          />
        )}
        {page === 6 && (
          <IncomeCheck
            data={userData}
            setData={setUserData}
            setPage={setPage}
          />
        )}
        {page === 7 && (
          <FinancialPicture
            data={userData}
            setData={setUserData}
            setPage={setPage}
          />
        )}
        {page === 8 && (
          <LoanDisburse
            data={userData}
            setData={setUserData}
            setPage={setPage}
          />
        )}
        {page === 9 && (
          <SetPassword
            data={userData}
            setData={setUserData}
            setPage={setPage}
          />
        )}
      </div>
    </div>
  );
}

export default CheckYourRate;
