import Heading2 from "../../components/Heading2";
import Input from "./Input";
import DatePicker from "react-datepicker";

function RegistrationStepOne({ setPage }) {
  return (
    <div className="w-full sm:w-3/4 tab:w-2/3 m-auto">
      <Heading2>Create your account</Heading2>
      <div className="w-full flex flex-col tab:flex-row gap-2 tab:gap-4 items-center py-1 tab:py-2">
        <Input
          width={`w-full tab:w-1/2`}
          name={`firstName`}
          placeholder={`First Name`}
          type={`text`}
        />
        <Input
          width={`w-full tab:w-1/2`}
          name={`lastName`}
          placeholder={`Last Name`}
          type={`text`}
        />
      </div>
      <div className="w-full flex flex-col tab:flex-row gap-2 tab:gap-4 items-center py-1 tab:py-2">
        <select
          name="idType"
          id="idType"
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
        />
      </div>
      <div className="w-full py-2">
        <DatePicker
          showIcon
          dateFormat={"dd/MM/yyyy"}
          name="dob"
          placeholderText="Date of birth (dd/mm/yyyy)"
          className="p-3 w-full border border-gray-400 rounded-md text-textColor3"
        />
        <div className="py-2 tab:py-4">
          <Input type={`email`} placeholder={"E-mail"} name={"email"}></Input>
        </div>
        <Input
          type={`text`}
          placeholder={"Phone Number"}
          name={"phone"}
        ></Input>
      </div>
      <div className="pt-[40px] w-full m-auto">
        <button
          onClick={() => setPage(2)}
          className={`bg-gradient-to-r from-[#0D5152] to-[#1DB6B8] uppercase text-white tab:text-xl font-bold tracking-[4px]  py-2.5 px-[80px] rounded-[10px] w-full`}
        >
          Next Step
        </button>
      </div>
    </div>
  );
}

export default RegistrationStepOne;
