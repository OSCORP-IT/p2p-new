import Text from "../../components/Text";
import SubTitle from "../../components/SubTitle";
import SmallText from "../../components/SmallText";
import PrimaryButton from "../../components/PrimaryButton";
import { useSelector } from "react-redux";
function HowMuchBorrow({ setPage, data, setData }) {
  const user = useSelector((state) => state.auth);
  function handleSubmit() {
    if (user.isLoggedIn) {
      setPage(4);
      return;
    }
    setPage(2);
    return;
  }
  return (
    <>
      <Text align={`text-center`} padding={`pb-2`}>
        Welcome! Let’s get started
      </Text>
      <SubTitle align={`text-center`} padding={`pb-2`} font={`font-normal`}>
        How much would you like to borrow?
      </SubTitle>
      <h1 className="font-abel text-[80px] tab:text-[90px] font-normal text-primary leading-tight text-center">
        <span className="text-textColor3 font-poppins text-[65px] tab:text-[75px]">
          {"৳ "}
        </span>
        {data.borrow_amount}
      </h1>
      <div className="w-full flex items-center gap-4 justify-between pt-2">
        <SmallText color={`textColor3`}>৳15000</SmallText>
        <input
          type="range"
          className="w-full h-1"
          min={15000}
          max={1000000}
          value={data.borrow_amount}
          onChange={(e) =>
            setData((prevState) => ({
              ...prevState,
              borrow_amount: e.target.value,
            }))
          }
          step={5000}
        />
        <SmallText color={`textColor3`}>৳1,000,000</SmallText>
      </div>
      <div className="w-full border border-primary mt-4 p-2">
        <select
          name="loanPurpose"
          value={data.loan_type_id}
          onChange={(e) =>
            setData((prevState) => ({
              ...prevState,
              loan_type_id: e.target.value,
            }))
          }
          className="w-full h-full p-1 text-sm sm:text-base"
        >
          <option value="">Loan Purpose</option>
          <option value="1">Home Improvement</option>
          <option value="2">Personal Improvement</option>
          <option value="3">Business Improvement</option>
        </select>
      </div>
      <div className="w-full pt-4" onClick={handleSubmit}>
        <PrimaryButton width={`w-full`} noIcon={true}>
          Continue
        </PrimaryButton>
      </div>
      <Text align={`text-center`} color={`textColor3`}>
        This will not affect your credit score
      </Text>
    </>
  );
}

export default HowMuchBorrow;
