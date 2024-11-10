import Text from "../../components/Text";
import SubTitle from "../../components/SubTitle";
import PrimaryButton from "../../components/PrimaryButton";
import { FaLessThan } from "react-icons/fa6";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function PersonalDetail({ setPage, data, setData }) {
  return (
    <>
      <SubTitle align={`text-center`} padding={`pb-2`} font={`font-normal`}>
        Let’s start by getting to know you
      </SubTitle>

      <div className="flex items-center justify-between gap-2 pb-2 pt-4">
        <div className="w-1/2">
          <input
            type="text"
            name="firstName"
            id="firstName"
            className="p-2 w-full border border-gray-400"
            placeholder="First Name"
            value={data.personalDetail.firstName}
            onChange={(e) =>
              setData((prevState) => ({
                ...prevState,
                personalDetail: {
                  ...prevState.personalDetail,
                  firstName: e.target.value,
                },
              }))
            }
          />
        </div>
        <div className="w-1/2">
          <input
            type="text"
            name="lastName"
            id="lastName"
            className="p-2 w-full border border-gray-400"
            placeholder="Last Name"
            value={data.personalDetail.lastName}
            onChange={(e) =>
              setData((prevState) => ({
                ...prevState,
                personalDetail: {
                  ...prevState.personalDetail,
                  lastName: e.target.value,
                },
              }))
            }
          />
        </div>
      </div>
      <div className="pb-2 w-full">
        <DatePicker
          showIcon
          dateFormat={"dd/MM/yyyy"}
          name="dob"
          placeholderText="Date of birth (dd/mm/yyyy)"
          selected={data.personalDetail.dob}
          className="p-2 w-full border border-gray-400"
          onChange={(date) =>
            setData((prevState) => ({
              ...prevState,
              personalDetail: {
                ...prevState.personalDetail,
                dob: date,
              },
            }))
          }
        />
      </div>
      <div className="pb-2 w-full">
        <input
          type="email"
          name="email"
          id="email"
          className="p-2 w-full border border-gray-400"
          placeholder="E-mail"
          value={data.personalDetail.email}
          onChange={(e) =>
            setData((prevState) => ({
              ...prevState,
              personalDetail: {
                ...prevState.personalDetail,
                email: e.target.value,
              },
            }))
          }
        />
      </div>
      <div className="pb-2 w-full">
        <input
          type="text"
          name="id"
          id="id"
          className="p-2 w-full border border-gray-400"
          placeholder="NID/Passport"
          value={data.personalDetail.id}
          onChange={(e) =>
            setData((prevState) => ({
              ...prevState,
              personalDetail: {
                ...prevState.personalDetail,
                id: e.target.value,
              },
            }))
          }
        />
      </div>
      <div className="flex gap-2 items-center justify-between pt-4">
        <div
          className="border border-primary p-2 rounded-md"
          onClick={() => setPage(2)}
        >
          <FaLessThan className="text-primary" />
        </div>
        <div className="w-full" onClick={() => setPage(5)}>
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

export default PersonalDetail;
