import Text from "../../components/Text";
import SubTitle from "../../components/SubTitle";
import PrimaryButton from "../../components/PrimaryButton";
import { FaLessThan } from "react-icons/fa6";
import SubHeading from "../../components/SubHeading";
import { useEffect, useState } from "react";
import { userPhoneNumberCheck } from "../../services/Authentication";
function PhoneNumber({ setPage, data, setData }) {
  const [isValid, setIsvalid] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [err, setErr] = useState("");

  const validateBangladeshiPhoneNumber = (phoneNumber) => {
    const regex = /^(?:\+880|880|0)1[3-9]\d{8}$/;
    return regex.test(phoneNumber);
  };
  useEffect(() => {
    const checkPhoneNumber = async () => {
      if (isSubmitted && isValid) {
        console.log(data.phone.phoneNumber);
        try {
          const response = await userPhoneNumberCheck(data.phone.phoneNumber);
          if (response.number_already_exists) setPage(10);
          else setPage(3); // Return boolean directly
        } catch (error) {
          console.log(error);
          setErr("Error checking phone number");
        }
      }
    };
    checkPhoneNumber();
  }, [isSubmitted, isValid]);
  function handleSubmit() {
    setIsSubmitted(() => true);
    setIsvalid(() => validateBangladeshiPhoneNumber(data.phone.phoneNumber));
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
          value={data.phone.phoneNumber}
          onChange={(e) =>
            setData((prevState) => ({
              ...prevState,
              phone: {
                ...prevState.phone,
                phoneNumber: e.target.value,
              },
            }))
          }
        />
      </div>
      <div className="flex items-start gap-2 justify-between">
        <input
          type="checkbox"
          className="mt-1"
          checked={data.phone.update}
          onChange={(e) =>
            setData((prevState) => ({
              ...prevState,
              phone: {
                ...prevState.phone,
                update: e.target.checked,
              },
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
