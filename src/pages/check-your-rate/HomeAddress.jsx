import Text from "../../components/Text";
import SubTitle from "../../components/SubTitle";
import PrimaryButton from "../../components/PrimaryButton";
import { FaLessThan } from "react-icons/fa6";
import SubHeading from "../../components/SubHeading";
function HomeAddress({ data, setData, setPage }) {
  function handleSubmit() {
    if (
      data.address === "" ||
      data.thana === "" ||
      data.district === "" ||
      data.postalCode === ""
    ) {
      window.alert("All fields should be filled");
      return;
    }
    setPage(6);
    return;
  }
  return (
    <>
      <SubTitle align={`text-center`} padding={`py-0`} font={`font-normal`}>
        Great! Just a little more info
      </SubTitle>
      <SubHeading align={`text-center`} padding={`pt-1 pb-4`}>
        What’s your address?
      </SubHeading>
      <div className="pb-2 w-full">
        <input
          type="text"
          name="homeAddress"
          id="homeAddress"
          className="p-2 w-full border border-gray-400"
          placeholder="Home Address"
          value={data.address}
          onChange={(e) =>
            setData((prevState) => ({
              ...prevState,
              address: e.target.value,
            }))
          }
        />
      </div>
      <div className="pb-2 w-full">
        <input
          type="text"
          name="thana"
          id="thana"
          className="p-2 w-full border border-gray-400"
          placeholder="Thana"
          value={data.homeAddress.thana}
          onChange={(e) =>
            setData((prevState) => ({
              ...prevState,
              thana: e.target.value,
            }))
          }
        />
      </div>
      <div className="flex items-center justify-between gap-2 pb-2">
        <div className="w-1/2">
          <input
            type="text"
            name="district"
            id="district"
            className="p-2 w-full border border-gray-400"
            placeholder="District"
            value={data.homeAddress.district}
            onChange={(e) =>
              setData((prevState) => ({
                ...prevState,
                district: e.target.value,
              }))
            }
          />
        </div>
        <div className="w-1/2">
          <input
            type="text"
            name="postalCode"
            id="postalCode"
            className="p-2 w-full border border-gray-400"
            placeholder="Postal Code"
            value={data.homeAddress.postalCode}
            onChange={(e) =>
              setData((prevState) => ({
                ...prevState,
                postalCode: e.target.value,
              }))
            }
          />
        </div>
      </div>
      <div className="flex gap-2 items-center justify-between pt-4">
        <div
          className="border border-primary p-2 rounded-md"
          onClick={() => setPage(4)}
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

export default HomeAddress;
