import Text from "../../components/Text";
import SubTitle from "../../components/SubTitle";
import PrimaryButton from "../../components/PrimaryButton";
import { FaLessThan } from "react-icons/fa6";
import SubHeading from "../../components/SubHeading";
import { useSelector } from "react-redux";
function FinancialPicture({ data, setData, setPage }) {
  const user = useSelector((state) => state.auth);
  function handleSubmit() {
    if (
      data.annual_income === "" ||
      data.monthly_rent_or_mortgage_payment === ""
    ) {
      window.alert("Please fill the required fields.");
      return;
    }
    {
      user.isLoggedIn ? setPage(8) : setPage(9);
    }
    return;
  }
  return (
    <>
      <SubTitle align={`text-center`} padding={`pb-2`} font={`font-normal`}>
        Tell us about your financial picture
      </SubTitle>
      <SubHeading align={`text-center`} padding={`pb-2`}>
        We may need to confirm this info later so try to be as exact as possible
      </SubHeading>

      <div className="mt-4 mb-3 w-full border pl-2 border-gray-400 flex items-center gap-2">
        <SubHeading color={`textColor3`} padding={`py-0`}>
          ৳
        </SubHeading>
        <input
          type="text"
          name="Annual_income"
          id="annual_income"
          className="p-3 w-full"
          placeholder="Your Annual Income"
          value={data.annual_income}
          onChange={(e) =>
            setData((prevState) => ({
              ...prevState,
              annual_income: Number(e.target.value),
            }))
          }
        />
      </div>
      <div className="mb-3 w-full border pl-2 border-gray-400 flex items-center gap-2">
        <SubHeading color={`textColor3`} padding={`py-0`}>
          ৳
        </SubHeading>
        <input
          type="text"
          name="Additional_income"
          id="additional_income"
          className="p-3 w-full"
          placeholder="Additional Income (optional)"
          value={data.additional_income}
          onChange={(e) =>
            setData((prevState) => ({
              ...prevState,
              additional_income: Number(e.target.value),
            }))
          }
        />
      </div>
      <div className="mb-3 w-full border pl-2 border-gray-400 flex items-center gap-2">
        <SubHeading color={`textColor3`} padding={`py-0`}>
          ৳
        </SubHeading>
        <input
          type="text"
          name="Monthly_rate"
          id="monthly_rate"
          className="p-3 w-full"
          placeholder="Monthly Rent or Mortgage Payment"
          value={data.monthly_rent_or_mortgage_payment}
          onChange={(e) =>
            setData((prevState) => ({
              ...prevState,
              monthly_rent_or_mortgage_payment: Number(e.target.value),
            }))
          }
        />
      </div>
      <div className="flex gap-2 items-center justify-between pt-4">
        <div
          className="border border-primary p-2 rounded-md"
          onClick={() => setPage(6)}
        >
          <FaLessThan className="text-primary" />
        </div>
        <div className="w-full" onClick={handleSubmit}>
          <PrimaryButton width={`w-full`} noIcon={true}>
            Continue
          </PrimaryButton>
        </div>
      </div>
      <Text align={`text-center`} color={`textColor3`}>
        This will not affect your credit score
      </Text>
    </>
  );
}

export default FinancialPicture;
