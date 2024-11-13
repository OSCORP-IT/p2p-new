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
import GivePassword from "./GIvePassword";
const initialUserState = {
  phone: "",
  firstName: "",
  lastName: "",
  dob: "",
  email: "",
  id: "",
  password: "",
  agree: true,
};
const initialPortfolioState = {
  borrowAmount: 50000,
  purpose: "",
  update: true,
  address: "",
  thana: "",
  district: "",
  postalCode: "",
  incomeSource: "",
  annualIncome: "",
  additionalIncome: "",
  monthlyRate: "",
  disburseApproval: false,
  disburseAmount: "",
};
function CheckYourRate() {
  const [page, setPage] = useState(1);
  const [userData, setUserData] = useState(initialUserState);
  const [portfolioData, setPortfolioData] = useState(initialPortfolioState);
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
        {page === 1 && (
          <HowMuchBorrow
            data={portfolioData}
            setData={setPortfolioData}
            setPage={setPage}
          />
        )}
        {page === 2 && (
          <PhoneNumber
            userData={userData}
            setUserData={setUserData}
            portfolioData={portfolioData}
            setPortfolioData={setPortfolioData}
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
            data={portfolioData}
            setData={setPortfolioData}
            setPage={setPage}
          />
        )}
        {page === 6 && (
          <IncomeCheck
            data={portfolioData}
            setData={setPortfolioData}
            setPage={setPage}
          />
        )}
        {page === 7 && (
          <FinancialPicture
            data={portfolioData}
            setData={setPortfolioData}
            setPage={setPage}
          />
        )}
        {page === 8 && (
          <LoanDisburse
            data={portfolioData}
            setData={setPortfolioData}
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
        {page === 10 && (
          <GivePassword
            setPage={setPage}
            data={userData}
            setData={setUserData}
          />
        )}
      </div>
    </div>
  );
}

export default CheckYourRate;
