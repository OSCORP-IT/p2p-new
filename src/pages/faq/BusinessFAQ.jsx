import Heading2 from "../../components/Heading2";
import Heading1 from "../../components/Heading1";
import Text from "../../components/Text";
import FAQContainer from "../../ui/Home/FAQContainer";
import { FcPrevious } from "react-icons/fc";
function BusinessFAQ({ setCurrentPage }) {
  return (
    <div className="relative w-full">
      <div
        onClick={() => setCurrentPage(null)}
        className="-mt-6 sm:mt-0 absolute top-0 sm:top-2 left-0 cursor-pointer flex justify-center items-center"
      >
        <FcPrevious />
        <Text font={`font-semibold`} color={`primary`}>
          Back
        </Text>
      </div>
      <Heading1 align={`text-center`}>FAQ for Business Loan</Heading1>
      <div className="py-4">
        <Heading2 color={`text-accent`} padding={`pt-1 pb-4`}>
          General Enquiries
        </Heading2>
        <FAQContainer
          faq={{ data: [] }}
          bg={`bg-accent/10`}
          color={`textColor4`}
          noShadow={true}
        />
      </div>
      <div className="py-4">
        <Heading2 color={`text-accent`} padding={`pt-1 pb-4`}>
          Fintech Platinum
        </Heading2>
        <FAQContainer
          faq={{ data: [] }}
          bg={`bg-accent/10`}
          color={`textColor4`}
          noShadow={true}
        />
      </div>
    </div>
  );
}

export default BusinessFAQ;
