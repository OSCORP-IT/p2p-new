import { FaLessThan } from "react-icons/fa6";
import SubTitle from "../../components/SubTitle";
import Title from "../../components/Title";
import PrimaryButton from "../../components/PrimaryButton";
import SubHeading from "../../components/SubHeading";
import Text from "../../components/Text";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function LoanDisburse({ setPage }) {
  const user = useSelector((state) => state.auth);
  const navigate = useNavigate();
  function handleSubmit() {
    if (user.isLoggedIn) {
      navigate("/");
    } else setPage(9);
  }
  return (
    <>
      <h1 className="text-center font-rage font-normal text-[40px] sm:text-[50px] tab:text-6xl text-primary">
        Congratulations!
      </h1>
      <SubTitle font={`font-normal`} align={`text-center`} color={`titleColor`}>
        You’re pre-approved for a loan based on your information
      </SubTitle>
      <div className="flex items-center gap-2 w-max m-auto">
        <SubHeading>Loans:</SubHeading>
        <div className="bg-primary/10 rounded-md p-[10px]">
          <Title color={`text-textColor3`}>
            ৳<span className="font-normal font-abel text-primary"> 20000</span>
          </Title>
        </div>
      </div>
      <Text align={`text-center`} padding={`py-2`}>
        To continue, please complete your application by following the next
        steps. This will confirm your rate and finalize the loan terms. We’re
        here to help you get started!
      </Text>
      <div className="flex gap-2 items-center justify-between pt-4">
        <div
          className="border border-primary p-2 rounded-md"
          onClick={() => setPage(7)}
        >
          <FaLessThan className="text-primary" />
        </div>
        <div className="w-full" onClick={handleSubmit}>
          <PrimaryButton width={`w-full`} noIcon={true}>
            Apply Now
          </PrimaryButton>
        </div>
      </div>
    </>
  );
}

export default LoanDisburse;
