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
const initialPortfolioState = {
  borrow_amount: "50000",
  loan_type_id: "",
  is_notifiable_in_mobile_number: "1", // accept only 0 or 1
  home_address: "",
  thana: "",
  district: "",
  postal_code: "",
  source_of_income: "",
  annual_income: "",
  additional_income: "",
  monthly_rent_or_mortgage_payment: "",
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
        {page === 3 && <OtpCheck data={userData} setPage={setPage} />}
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
            userData={userData}
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
        {page === 10 && <GivePassword setPage={setPage} data={userData} />}
      </div>
    </div>
  );
}

export default CheckYourRate;
