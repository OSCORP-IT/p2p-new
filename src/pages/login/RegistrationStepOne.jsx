import Heading2 from "../../components/Heading2";
import TwoFA from "../../assets/2FA.png";
import Input from "./Input";
import DatePicker from "react-datepicker";
import Text from "../../components/Text";
import { useEffect, useState } from "react";
import SmallText from "../../components/SmallText";
function RegistrationStepOne() {
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    // If seconds reach 0, stop the countdown
    if (seconds <= 0) return;

    // Set up the interval
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [seconds]);
  return (
    // <div className="w-full sm:w-3/4 tab:w-2/3 m-auto">
    //   <Heading2>Create your account</Heading2>
    //   <div className="w-full flex flex-col tab:flex-row gap-2 tab:gap-4 items-center py-1 tab:py-2">
    //     <Input
    //       width={`w-full tab:w-1/2`}
    //       name={`firstName`}
    //       placeholder={`First Name`}
    //       type={`text`}
    //     />
    //     <Input
    //       width={`w-full tab:w-1/2`}
    //       name={`lastName`}
    //       placeholder={`Last Name`}
    //       type={`text`}
    //     />
    //   </div>
    //   <div className="w-full flex flex-col tab:flex-row gap-2 tab:gap-4 items-center py-1 tab:py-2">
    //     <select
    //       name="idType"
    //       id="idType"
    //       className="p-2 tab:p-3 w-full tab:w-1/2 border border-gray-400 rounded-md text-textColor3"
    //     >
    //       <option value="">Select Identification Type</option>
    //       <option value="nid">NID</option>
    //       <option value="passport">Passport</option>
    //     </select>
    //     <Input
    //       width={`w-full tab:w-1/2`}
    //       name={`idNumber`}
    //       placeholder={`Identification Number`}
    //       type={`text`}
    //     />
    //   </div>
    //   <div className="w-full py-2">
    //     <DatePicker
    //       showIcon
    //       dateFormat={"dd/MM/yyyy"}
    //       name="dob"
    //       placeholderText="Date of birth (dd/mm/yyyy)"
    //       className="p-3 w-full border border-gray-400 rounded-md text-textColor3"
    //     />
    //     <div className="py-2 tab:py-4">
    //       <Input type={`email`} placeholder={"E-mail"} name={"email"}></Input>
    //     </div>
    //     <Input
    //       type={`text`}
    //       placeholder={"Phone Number"}
    //       name={"phone"}
    //     ></Input>
    //   </div>
    //   <div className="pt-[40px] w-full m-auto">
    //     <button
    //       className={`bg-gradient-to-r from-[#0D5152] to-[#1DB6B8] uppercase text-white tab:text-xl font-bold tracking-[4px]  py-2.5 px-[80px] rounded-[10px] w-full`}
    //     >
    //       Next Step
    //     </button>
    //   </div>
    // </div>
    <div className="w-full tab:w-2/3 m-auto p-[10px] tab:p-[20px]">
      <Heading2 align={`text-center`} padding={`pb-4`} font={"font-bold"}>
        2 Factor Authentication Verification
      </Heading2>
      <img
        src={TwoFA}
        alt="two factor"
        className="m-auto sm:w-[40%] tab:w-auto"
      />
      <Text align={`text-center`}>
        We have sent a 6 digit code to +880 1XXXXXXXXX. Please insert the code
        below.
      </Text>
      <div className="w-full py-2">
        <Input placeholder={`Verification Code`} name={`otp`} type={`text`} />
      </div>
      <div>
        {seconds > 0 && (
          <SmallText
            align={`text-center`}
            padding={`py-0`}
            color={`textColor3`}
          >
            Didn’t get our verification code?
            <span className="text-purple-700">
              Resend verification code in {seconds}s.
            </span>
          </SmallText>
        )}
        {seconds === 0 && (
          <div
            className="w-max m-auto px-4 cursor-pointer"
            onClick={() => setSeconds(60)}
          >
            <SmallText
              align={`text-center`}
              color={`accent`}
              padding={`py-0`}
              font={`font-bold`}
            >
              Resend verification code
            </SmallText>
          </div>
        )}
      </div>
      <div className="pt-4 w-full flex gap-2 items-center">
        <button
          className={`bg-white uppercase text-primary border border-primary text-base sm:text-lg tab:text-xl font-bold tracking-[4px] py-2.5 rounded-[10px] w-1/2`}
        >
          Previous
        </button>
        <button
          className={`bg-gradient-to-r from-[#0D5152] to-[#1DB6B8] uppercase text-white text-base sm:text-lg tab:text-xl font-bold tracking-[4px]  py-2.5 rounded-[10px] w-1/2`}
        >
          Next Step
        </button>
      </div>
    </div>
  );
}

export default RegistrationStepOne;
