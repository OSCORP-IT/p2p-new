import Heading2 from "../../components/Heading2";
import Heading1 from "../../components/Heading1";
import Text from "../../components/Text";
import FAQContainer from "../../ui/Home/FAQContainer";
import { FcPrevious } from "react-icons/fc";
import { useEffect, useState } from "react";
import { getFaq } from "../../services/FAQ";

function PersonalFAQ({ setCurrentPage }) {
  const [generalFAQ, setGeneralFAQ] = useState({
    data: null,
    isLoading: false,
    isError: false,
  });
  const [fintechFAQ, setFintechFAQ] = useState({
    data: null,
    isLoading: false,
    isError: false,
  });
  useEffect(() => {
    async function fetchGeneralFAQ() {
      setGeneralFAQ({ ...generalFAQ, isLoading: true });
      try {
        const result = await getFaq("personal_loan_general_enquiries");
        setGeneralFAQ({ data: result, isLoading: false, isError: false });
      } catch (error) {
        setGeneralFAQ({ ...generalFAQ, isLoading: false, isError: true });
      }
    }
    fetchGeneralFAQ();
  }, []);
  useEffect(() => {
    async function fetchFintechFAQ() {
      setFintechFAQ({ ...fintechFAQ, isLoading: true });
      try {
        const result = await getFaq("personal_loan_fintech_platinum");
        setFintechFAQ({ data: result, isLoading: false, isError: false });
      } catch (error) {
        setFintechFAQ({ ...fintechFAQ, isLoading: false, isError: true });
      }
    }
    fetchFintechFAQ();
  }, []);
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
      <Heading1 align={`text-center`}>FAQ for Personal Loan</Heading1>
      <div className="py-4">
        <Heading2 color={`text-accent`} padding={`pt-1 pb-4`}>
          General Enquiries
        </Heading2>
        {generalFAQ.isLoading && (
          <Text align={`text-center`} padding={"py-4"}>
            Loading FAQ&apos;s...
          </Text>
        )}
        {generalFAQ.isError && <Text>Something went wrong!</Text>}
        {generalFAQ.data && (
          <FAQContainer
            faq={generalFAQ.data}
            bg={`bg-accent/10`}
            color={`textColor4`}
            noShadow={true}
          />
        )}
      </div>
      <div className="py-4">
        <Heading2 color={`text-accent`} padding={`pt-1 pb-4`}>
          Fintech Platinum
        </Heading2>
        {fintechFAQ.isLoading && (
          <Text align={`text-center`} padding={"py-4"}>
            Loading FAQ&apos;s...
          </Text>
        )}
        {fintechFAQ.isError && <Text>Something went wrong!</Text>}
        {fintechFAQ.data && (
          <FAQContainer
            faq={fintechFAQ.data}
            bg={`bg-accent/10`}
            color={`textColor4`}
            noShadow={true}
          />
        )}
      </div>
    </div>
  );
}

export default PersonalFAQ;
