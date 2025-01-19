import Heading1 from "../../components/Heading1";
import Text from "../../components/Text";
import SubHeading from "../../components/SubHeading";
import PrimaryButton from "../../components/PrimaryButton";
import SectionLayout from "../../ui/SectionLayout";
import {
  PiPhoneList,
  PiEnvelopeSimple,
  PiClockCountdown,
} from "react-icons/pi";
import { ImLocation } from "react-icons/im";
import { useState } from "react";
import { contactUs } from "../../services/Contact";
const initialState = {
  name: "",
  email: "",
  subject: "Response from Website",
  message: "",
};
function ContactOptions() {
  const [data, setData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [finalState, setFinalState] = useState({
    isError: false,
    isSucceded: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const result = await contactUs(data);
      if (result.success) {
        setIsLoading(false);
        setFinalState({ isError: false, isSucceded: true });
        setData(initialState);
        setTimeout(() => {
          setFinalState({ isError: false, isSucceded: false });
        }, 3000);
      }
    } catch (error) {
      setFinalState({ isError: true, isSucceded: false });
      setTimeout(() => {
        setFinalState({ isError: false, isSucceded: false });
      }, 3000);
      setIsLoading(false);
    }
  };
  return (
    <SectionLayout>
      <div className="flex flex-col sm:flex-row relative p-10 items-start overflow-hidden rounded-md shadow-allSide shadow-secondary/20">
        <div className="w-[120px] h-[120px] tab:w-[180px] tab:h-[180px] bg-primary/80 blur-[130px] rounded-full absolute -top-14 am:-top-12 -right-4 sm:-right-6 tab:-right-4"></div>
        <div className="w-full sm:w-1/2 px-3 tab:px-6">
          <Heading1 padding={`py-2`} font={`font-semibold font-poppins`}>
            Meet Us
          </Heading1>
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
                <span className="font-semibold">Email:</span>{" "}
                support@fintech.com
              </SubHeading>
            </div>
            <div className="flex gap-3 items-center">
              <PiClockCountdown className="text-2xl" />
              <SubHeading font={`font-normal`}>
                <span className="font-semibold">Hours:</span> Sunday - Thursday,
                09am - 5pm
              </SubHeading>
            </div>
            <div className="flex gap-3 items-start mt-1">
              <ImLocation className="text-2xl" />
              <SubHeading font={`font-normal`} padding={"py-0"}>
                <span className="font-semibold">Location:</span> House#32,
                Road#19, Banani, Dhaka-1213
              </SubHeading>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 px-3 tab:px-6 border-l border-l-gray-400">
          <Heading1 padding={`py-2`} font={`font-semibold font-poppins`}>
            Write Us
          </Heading1>
          <Text padding={`pb-1`} color={`textColor3`}>
            Write your thughts or queries.
          </Text>
          <div className="mt-5">
            <form onSubmit={handleSubmit}>
              <input
                required
                type="text"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                placeholder="Your Name..."
                className="w-full border-2 border-gray-400 rounded-md p-2"
              />
              <input
                required
                type="email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                placeholder="Your Email..."
                className="w-full border-2 border-gray-400 rounded-md p-2 my-4"
              />
              <textarea
                required
                placeholder="Your Message.."
                value={data.message}
                onChange={(e) => setData({ ...data, message: e.target.value })}
                className="w-full border-2 border-gray-400 rounded-md p-2 resize-none"
              />
              {finalState.isSucceded && (
                <div className="bg-green-500 p-2 rounded-md mt-2">
                  <Text align={`text-center`} color={`white`}>
                    Your message submitted successfully
                  </Text>
                </div>
              )}
              {finalState.isError && (
                <div className="bg-red-500 p-2 rounded-md mt-2">
                  <Text align={`text-center`} color={`white`}>
                    Something went wrong! Try again.
                  </Text>
                </div>
              )}
              <div className="mt-2 w-max m-auto">
                <PrimaryButton bg={`accent`} noIcon={true} type="submit">
                  {isLoading ? "Submitting.." : "Submit"}
                </PrimaryButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

export default ContactOptions;
