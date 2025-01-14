import SubHeading from "../../components/SubHeading";
import Title from "../../components/Title";
import CheckFat from "../../icon/CheckFat";
import SectionLayout from "../../ui/SectionLayout";
import Phone from "../../assets/Phone.png";
import IconButton from "../../components/IconButton";
import UsersThree from "../../icon/UsersThree";
import { useNavigate } from "react-router-dom";
function GetFundReferralEligibility() {
  const navigate = useNavigate();
  return (
    <SectionLayout>
      <Title align={`text-center`}>Eligibility</Title>
      <div className="flex flex-wrap sm:flex-nowrap items-center justify-between py-6">
        <div className="pb-8 sm:pb-0 w-full sm:w-2/3 tab:w-auto">
          <div className="flex items-center gap-2">
            <CheckFat color={`#ff6b00`} />
            <SubHeading font={`font-normal`}>
              Bangladeshi registered company
            </SubHeading>
          </div>
          <div className="flex items-center gap-2 py-2">
            <CheckFat color={`#ff6b00`} />
            <SubHeading font={`font-normal`}>
              At least 1 year in operation
            </SubHeading>
          </div>
          <div className="flex items-center gap-2">
            <CheckFat color={`#ff6b00`} />
            <SubHeading font={`font-normal`}>
              Have mid-to-large corporate customers (B2B)
            </SubHeading>
          </div>
          <div className="flex items-center gap-2 py-2">
            <CheckFat color={`#ff6b00`} />
            <SubHeading font={`font-normal`}>
              Not in liquidation or insolvent
            </SubHeading>
          </div>
          <div
            className="pt-6 w-max m-auto sm:m-0"
            onClick={() => navigate("/get-fund/referral/form")}
          >
            <IconButton bg={`accent`} text={`start referring`}>
              <UsersThree color={`white`} />
            </IconButton>
          </div>
        </div>
        <img
          src={Phone}
          alt="phone image"
          className="w-[80%] sm:w-1/3 tab:w-auto m-auto sm:m-0"
        />
      </div>
    </SectionLayout>
  );
}

export default GetFundReferralEligibility;
