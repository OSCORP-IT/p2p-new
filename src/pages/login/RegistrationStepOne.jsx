import { useEffect, useState } from "react";
import Heading2 from "../../components/Heading2";
import Input from "./Input";
import DatePicker from "./Datepicker";
import { userPhoneNumberCheck } from "../../services/Authentication";
import Text from "../../components/Text";

function RegistrationStepOne({ setPage, data, setData }) {
  const [isValid, setIsvalid] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [err, setErr] = useState("");

  const validateBangladeshiPhoneNumber = (phoneNumber) => {
    const regex = /^(?:\+880|880|0)1[3-9]\d{8}$/;
    if (!regex.test(phoneNumber)) {
      setErr("Give A Valid Mobile Number");
    }
    return regex.test(phoneNumber);
  };
  useEffect(() => {
    const checkPhoneNumber = async () => {
      if (isSubmitted && isValid) {
        try {
          const response = await userPhoneNumberCheck(data.mobile_number);
          if (response.number_already_exists) {
            setIsSubmitted(() => false);
            setIsvalid(() => false);
            setErr("Already Registered");
          } else setPage(2); // Return boolean directly
        } catch (error) {
          setIsSubmitted(() => false);
          setIsvalid(() => false);
          setErr(error.message);
          return;
        }
      }
    };
    checkPhoneNumber();
  }, [isSubmitted, isValid]);
  function checkFilling() {
    if (
      data.first_name === "" ||
      data.last_name === "" ||
      data.identification_type === "" ||
      data.identification_number === "" ||
      data.date_of_birth === "" ||
      data.email === "" ||
      data.mobile_number === ""
    ) {
      return false;
    }
    return true;
  }
  function handleSubmit() {
    const allFilled = checkFilling();
    if (allFilled) {
      setIsSubmitted(() => true);
      setIsvalid(() => validateBangladeshiPhoneNumber(data.mobile_number));
    } else setErr("Fill all the fields.");
  }
  return (
    <div className="w-full sm:w-3/4 tab:w-2/3 m-auto">
      <Heading2>Create your account</Heading2>
      <div className="w-full flex flex-col tab:flex-row gap-2 tab:gap-4 items-center py-1 tab:py-2">
        <Input
          width={`w-full tab:w-1/2`}
          name={`firstName`}
          placeholder={`First Name`}
          type={`text`}
          value={data.first_name}
          onChange={(e) => setData({ ...data, first_name: e.target.value })}
        />
        <Input
          width={`w-full tab:w-1/2`}
          name={`lastName`}
          placeholder={`Last Name`}
          type={`text`}
          value={data.last_name}
          onChange={(e) => setData({ ...data, last_name: e.target.value })}
        />
      </div>
      <div className="w-full flex flex-col tab:flex-row gap-2 tab:gap-4 items-center py-1 tab:py-2">
        <select
          name="idType"
          id="idType"
          value={data.identification_type}
          onChange={(e) =>
            setData({ ...data, identification_type: e.target.value })
          }
          className="p-2 tab:p-3 w-full tab:w-1/2 border border-gray-400 rounded-md text-textColor3"
        >
          <option value="">Select Identification Type</option>
          <option value="nid">NID</option>
          <option value="passport">Passport</option>
        </select>
        <Input
          width={`w-full tab:w-1/2`}
          name={`idNumber`}
          placeholder={`Identification Number`}
          type={`text`}
          value={data.identification_number}
          onChange={(e) =>
            setData({ ...data, identification_number: e.target.value })
          }
        />
      </div>
      <div className="w-full py-2">
        <DatePicker
          dateFormat={"dd/MM/yyyy"}
          name={`date_of_birth`}
          rounded={true}
          date={data.date_of_birth}
          setDate={(date) =>
            setData((prevState) => ({
              ...prevState,
              date_of_birth: date,
            }))
          }
        />
        <div className="py-2 tab:py-4">
          <Input
            type={`email`}
            placeholder={"E-mail"}
            name={"email"}
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          ></Input>
        </div>
        <Input
          type={`text`}
          placeholder={"Phone Number"}
          name={"phone"}
          value={data.mobile_number}
          onChange={(e) => setData({ ...data, mobile_number: e.target.value })}
        ></Input>
      </div>
      {err !== "" && (
        <div className="bg-red-200 p-2 mt-2 rounded-md">
          <Text>{err}</Text>
        </div>
      )}
      <div className="pt-[40px] w-full m-auto">
        <button
          onClick={handleSubmit}
          className={`bg-gradient-to-r from-[#0D5152] to-[#1DB6B8] uppercase text-white tab:text-xl font-bold tracking-[4px]  py-2.5 px-[80px] rounded-[10px] w-full`}
        >
          Next Step
        </button>
      </div>
    </div>
  );
}

export default RegistrationStepOne;
