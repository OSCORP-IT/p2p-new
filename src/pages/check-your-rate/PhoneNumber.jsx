import Text from "../../components/Text";
import SubTitle from "../../components/SubTitle";
import PrimaryButton from "../../components/PrimaryButton";
import { useState } from "react";
import { FaLessThan } from "react-icons/fa6";
import SubHeading from "../../components/SubHeading";
function PhoneNumber({ setPage }) {
  const [phone, setPhone] = useState("");
  const [updates, setUpdates] = useState(true);
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
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="flex items-start gap-2 justify-between">
        <input
          type="checkbox"
          className="mt-1"
          checked={updates}
          onChange={(e) => setUpdates(e.target.checked)}
        />
        <Text padding={`py-0`} color={`textColor3`}>
          I would like updates about products or services and agree to FINTECH’s
          TCPA Authorization. Message & date rates my apply. I understand I can
          opt out at any time.
        </Text>
      </div>
      <div className="flex gap-2 items-center justify-between pt-4">
        <div
          className="border border-primary p-2 rounded-md"
          onClick={() => setPage(1)}
        >
          <FaLessThan className="text-primary" />
        </div>
        <div className="w-full" onClick={() => setPage(3)}>
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
