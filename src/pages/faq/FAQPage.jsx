import SectionLayout from "../../ui/SectionLayout";
import Heading1 from "../../components/Heading1";
import Heading2 from "../../components/Heading2";
import FAQ from "../../assets/FAQ.png";
import Text from "../../components/Text";
import FAQContainer from "../../ui/Home/FAQContainer";
import { useState } from "react";
function FAQPage() {
  const [currentPage, setCurrentPage] = useState(null);
  return (
    <SectionLayout>
      {!currentPage && (
        <div className="flex flex-col sm:flex-row items-start justify-normal gap-4 py-4">
          <div className="w-full px-4 sm:px-0 sm:w-[48%]">
            <img src={FAQ} alt="faq illustrator" />
          </div>
          <div className="w-full px-4 sm:px-0 sm:w-[48%]">
            <Heading1 color={`text-textColor4`} padding={`py-1 leading-tight`}>
              Have Questions?
            </Heading1>
            <Heading1 color={`text-textColor4`} padding={`py-2 leading-tight`}>
              Check our Frequently Asked Questions (FAQ) here:
            </Heading1>
            <div className="pt-2 flex justify-between items-center w-3/4">
              <div
                className="cursor-pointer"
                onClick={() => setCurrentPage("pl")}
              >
                <Text color={`accent underline`} font={`font-semibold`}>
                  Personal Loan
                </Text>
              </div>
              <div
                className="cursor-pointer"
                onClick={() => setCurrentPage("pl")}
              >
                <Text color={`accent underline`} font={`font-semibold`}>
                  Business Loan
                </Text>
              </div>
            </div>
            <div className="py-2 flex justify-between items-center w-3/4">
              <div
                className="cursor-pointer"
                onClick={() => setCurrentPage("pl")}
              >
                <Text color={`accent underline`} font={`font-semibold`}>
                  Financing
                </Text>
              </div>
              <div
                className="cursor-pointer"
                onClick={() => setCurrentPage("pl")}
              >
                <Text color={`accent underline`} font={`font-semibold`}>
                  Islamic Financing
                </Text>
              </div>
            </div>
            <div className=" flex justify-between items-center w-3/4">
              <div
                className=" cursor-pointer"
                onClick={() => setCurrentPage("pl")}
              >
                <Text color={`accent underline`} font={`font-semibold`}>
                  Investment
                </Text>
              </div>
            </div>
          </div>
        </div>
      )}
      {currentPage === "pl" && (
        <>
          <Heading1 align={`text-center`}>FAQ for Personal Loan</Heading1>
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
        </>
      )}
    </SectionLayout>
  );
}

export default FAQPage;
