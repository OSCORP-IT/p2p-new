import TwoFA from "../../assets/2FA.png";
import Text from "../../components/Text";
import SmallText from "../../components/SmallText";
import { useEffect, useState } from "react";
import Heading2 from "../../components/Heading2";
import Input from "./Input";
function RegistrationStepTwo({ setPage, data }) {
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
    <div className="w-full tab:w-2/3 m-auto p-[10px] sm:p-[15px] tab:p-[20px]">
      <Heading2 align={`text-center`} padding={`pb-4`} font={"font-bold"}>
        2 Factor Authentication Verification
      </Heading2>
      <img
        src={TwoFA}
        alt="two factor"
        className="m-auto sm:w-[40%] tab:w-[50%]"
      />
      <Text align={`text-center`}>
        We have sent a 6 digit code to <strong>{data.mobile_number}</strong>.
        Please insert the code below.
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
            Didn’t get our verification code?{" "}
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
          onClick={() => setPage(1)}
          className={`bg-white uppercase text-primary border border-primary text-base sm:text-lg tab:text-xl font-bold tracking-[4px] py-2.5 rounded-[10px] w-1/2`}
        >
          Previous
        </button>
        <button
          onClick={() => setPage(3)}
          className={`bg-gradient-to-r from-[#0D5152] to-[#1DB6B8] uppercase text-white text-base sm:text-lg tab:text-xl font-bold tracking-[4px]  py-2.5 rounded-[10px] w-1/2`}
        >
          Next Step
        </button>
      </div>
    </div>
  );
}

export default RegistrationStepTwo;
