import Text from "../../components/Text";
import SubTitle from "../../components/SubTitle";
import PrimaryButton from "../../components/PrimaryButton";
import { useState } from "react";
import { FaLessThan } from "react-icons/fa6";
import SubHeading from "../../components/SubHeading";
function HomeAddress({ setPage }) {
  const [homeAddress, setHomeAddress] = useState({
    address: "",
    thana: "",
    district: "",
    postalCode: "",
  });
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
          value={homeAddress.address}
          onChange={(e) =>
            setHomeAddress({ ...homeAddress, address: e.target.value })
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
          value={homeAddress.thana}
          onChange={(e) =>
            setHomeAddress({ ...homeAddress, thana: e.target.value })
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
            value={homeAddress.district}
            onChange={(e) =>
              setHomeAddress({ ...homeAddress, district: e.target.value })
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
            value={setHomeAddress.postalCode}
            onChange={(e) =>
              setHomeAddress({ ...homeAddress, postalCode: e.target.value })
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
        <div className="w-full" onClick={() => setPage(6)}>
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
