import Text from "../../components/Text";
import SubTitle from "../../components/SubTitle";
import PrimaryButton from "../../components/PrimaryButton";
import { FaLessThan } from "react-icons/fa6";
import SubHeading from "../../components/SubHeading";
import { useEffect, useState } from "react";
import { userPhoneNumberCheck } from "../../services/Authentication";
import { useSelector } from "react-redux";
function PhoneNumber({
  setPage,
  userData,
  setUserData,
  portfolioData,
  setPortfolioData,
}) {
  const [isValid, setIsvalid] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [err, setErr] = useState("");
  const user = useSelector((state) => state.auth);

  const validateBangladeshiPhoneNumber = (phoneNumber) => {
    const regex = /^(?:\+880|880|0)1[3-9]\d{8}$/;
    return regex.test(phoneNumber);
  };
  useEffect(() => {
    const checkPhoneNumber = async () => {
      if (isSubmitted && isValid) {
        console.log(userData.mobile_number);
        try {
          const response = await userPhoneNumberCheck(userData.mobile_number);
          if (response.number_already_exists) setPage(10);
          else setPage(3); // Return boolean directly
        } catch (error) {
          console.log(error);
          setErr("Error checking phone number");
        }
      }
    };
    checkPhoneNumber();
  }, [isSubmitted, isValid, userData.mobile_number, setPage]);
  function handleSubmit() {
    if (user.isLoggedIn) {
      setPage(4);
      return;
    }
    setIsSubmitted(() => true);
    setIsvalid(() => validateBangladeshiPhoneNumber(userData.mobile_number));
  }
  return (
    <>
      <SubTitle align={`text-center`} padding={`pb-2`} font={`font-normal`}>
        Let’s keep in touch
      </SubTitle>
      <SubHeading align={`text-center`} padding={`pb-2`} font={`font-normal`}>
        We may reach out to you at this number if we need more info about your
        application or loan
      </SubHeading>
      <div className="pt-4 pb-2 w-full">
        <input
          type="text"
          name="Phone"
          id="phone"
          className="p-2 w-full border border-gray-400"
          placeholder="Phone Number"
          value={userData.mobile_number}
          onChange={(e) =>
            setUserData((prevState) => ({
              ...prevState,
              mobile_number: e.target.value,
            }))
          }
        />
      </div>
      <div className="flex items-start gap-2 justify-between">
        <input
          type="checkbox"
          className="mt-1"
          checked={
            portfolioData.is_notifiable_in_mobile_number == "1" ? true : false
          }
          onChange={(e) =>
            setPortfolioData((prevState) => ({
              ...prevState,
              is_notifiable_in_mobile_number: e.target.checked ? "1" : "0",
            }))
          }
        />
        <Text padding={`py-0`} color={`textColor3`}>
          I would like updates about products or services and agree to FINTECH’s
          TCPA Authorization. Message & date rates my apply. I understand I can
          opt out at any time.
        </Text>
      </div>
      {!isValid && (
        <div className="bg-red-200 p-2 mt-2 rounded-md">
          <Text>Give a valid phone number</Text>
        </div>
      )}
      {err !== "" && (
        <div className="bg-red-200 p-2 mt-2 rounded-md">
          <Text>{err}</Text>
        </div>
      )}
      <div className="flex gap-2 items-center justify-between pt-4">
        <div
          className="border border-primary p-2 rounded-md"
          onClick={() => setPage(1)}
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

export default PhoneNumber;
