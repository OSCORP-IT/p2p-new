import Text from "../../components/Text";
import SubTitle from "../../components/SubTitle";
import PrimaryButton from "../../components/PrimaryButton";
import { FaLessThan } from "react-icons/fa6";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProfile } from "../../services/Authentication";
function PersonalDetail({ setPage, data, setData }) {
  const user = useSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(false);
  console.log(user);
  useEffect(() => {
    async function fetchData() {
      if (user.isLoggedIn) {
        setIsLoading(true);
        try {
          const response = await fetchProfile(user.userToken);
          if (response && response.success) {
            // Dispatch the logIn action with the user data
            setData((prevState) => ({
              ...prevState,
              first_name: response.result.client.first_name,
              last_name: response.result.client.last_name,
              date_of_birth: response.result.client.date_of_birth,
              email: response.result.client.email,
              identification_number:
                response.result.client.identification_number,
            }));
            setIsLoading(false);
          }
        } catch (err) {
          console.error("Error:", err);
        }
      }
    }
    fetchData();
  }, [user.isLoggedIn, user.userToken, setData]);
  function handleSubmit() {
    if (
      data.first_name === "" ||
      data.last_name === "" ||
      data.date_of_birth === "" ||
      data.email === "" ||
      data.identification_number === ""
    ) {
      window.alert("All fields should be filled");
      return;
    }
    setPage(5);
    return;
  }
  return (
    <>
      <SubTitle align={`text-center`} padding={`pb-2`} font={`font-normal`}>
        Let’s start by getting to know you
      </SubTitle>
      {isLoading && (
        <div className="w-max m-auto">
          <Text>Fetching Data..</Text>
        </div>
      )}
      {!isLoading && (
        <>
          <div className="flex items-center justify-between gap-2 pb-2 pt-4">
            <div className="w-1/2">
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="p-2 w-full border border-gray-400"
                placeholder="First Name"
                value={data.first_name}
                onChange={(e) =>
                  setData((prevState) => ({
                    ...prevState,
                    first_name: e.target.value,
                  }))
                }
              />
            </div>
            <div className="w-1/2">
              <input
                type="text"
                name="last_name"
                id="last_name"
                className="p-2 w-full border border-gray-400"
                placeholder="Last Name"
                value={data.last_name}
                onChange={(e) =>
                  setData((prevState) => ({
                    ...prevState,
                    last_name: e.target.value,
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
              selected={data.date_of_birth}
              className="p-2 w-full border border-gray-400"
              onChange={(date) =>
                setData((prevState) => ({
                  ...prevState,
                  date_of_birth: date,
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
              value={data.email}
              onChange={(e) =>
                setData((prevState) => ({
                  ...prevState,
                  email: e.target.value,
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
              value={data.identification_number}
              onChange={(e) =>
                setData((prevState) => ({
                  ...prevState,
                  identification_number: e.target.value,
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
      )}
    </>
  );
}

export default PersonalDetail;
