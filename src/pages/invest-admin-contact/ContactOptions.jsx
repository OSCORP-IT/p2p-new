import Heading2 from "../../components/Heading2";
import Text from "../../components/Text";
import SubHeading from "../../components/SubHeading";

import {
  PiPhoneList,
  PiEnvelopeSimple,
  PiClockCountdown,
} from "react-icons/pi";
function ContactOptions() {
  return (
    <div className="mt-3 bg-white rounded-md shadow-md p-5">
      <Heading2 padding={`py-0`} font={`font-semibold font-poppins`}>
        Contact Information
      </Heading2>
      <Text padding={`pb-1`} color={`textColor3`}>
        Reach our to us directly
      </Text>
      <div className="mt-5">
        <div className="flex gap-3 items-center">
          <PiPhoneList className="text-2xl" />
          <SubHeading font={`font-normal`}>
            <span className="font-semibold">Phone:</span> +880 1XXX XXXXXX
          </SubHeading>
        </div>
        <div className="flex gap-3 items-center">
          <PiEnvelopeSimple className="text-2xl" />
          <SubHeading font={`font-normal`}>
            <span className="font-semibold">Email:</span> support@fintech.com
          </SubHeading>
        </div>
        <div className="flex gap-3 items-center">
          <PiClockCountdown className="text-2xl" />
          <SubHeading font={`font-normal`}>
            <span className="font-semibold">Hours:</span> Sunday - Thursday,
            09am - 5pm
          </SubHeading>
        </div>
      </div>
    </div>
  );
}

export default ContactOptions;
