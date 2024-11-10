import Text from "../../components/Text";
import SubTitle from "../../components/SubTitle";
import SmallText from "../../components/SmallText";
import PrimaryButton from "../../components/PrimaryButton";
function HowMuchBorrow({ setPage, data, setData }) {
  return (
    <>
      <Text align={`text-center`} padding={`pb-2`}>
        Welcome! Let’s get started
      </Text>
      <SubTitle align={`text-center`} padding={`pb-2`} font={`font-normal`}>
        How much would you like to borrow?
      </SubTitle>
      <h1 className="font-abel text-[80px] tab:text-[90px] font-normal text-primary leading-tight text-center">
        <span className="text-textColor3 font-poppins">৳ </span>
        {data.borrowData.borrowAmount}
      </h1>
      <div className="w-full flex items-center gap-4 justify-between pt-2">
        <SmallText color={`textColor3`}>৳15000</SmallText>
        <input
          type="range"
          className="w-full h-1"
          min={15000}
          max={1000000}
          value={data.borrowAmount}
          onChange={(e) =>
            setData((prevState) => ({
              ...prevState,
              borrowData: {
                ...prevState.borrowData,
                borrowAmount: e.target.value,
              },
            }))
          }
          step={5000}
        />
        <SmallText color={`textColor3`}>৳1,000,000</SmallText>
      </div>
      <div className="w-full border border-primary mt-4 p-2">
        <select
          name="loanPurpose"
          value={data.purpose}
          onChange={(e) =>
            setData((prevState) => ({
              ...prevState,
              borrowData: {
                ...prevState.borrowData,
                purpose: e.target.value,
              },
            }))
          }
          className="w-full h-full p-1 text-sm sm:text-base"
        >
          <option value="">Loan Purpose</option>
          <option value="home">Home Improvement</option>
          <option value="personal">Personal Improvement</option>
          <option value="business">Business Improvement</option>
        </select>
      </div>
      <div className="w-full pt-4" onClick={() => setPage(2)}>
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
