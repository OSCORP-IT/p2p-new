import SectionLayout from "../../ui/SectionLayout";
import Heading1 from "../../components/Heading1";
import FAQ from "../../assets/FAQ.png";
import Text from "../../components/Text";
import { useState } from "react";
import PersonalFAQ from "./PersonalFAQ";
import BusinessFAQ from "./BusinessFAQ";
import FinanceFAQ from "./FinanceFAQ";
import IslamicFAQ from "./IslamicFAQ";
import InvestmentFAQ from "./InvestmentFAQ";

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
                onClick={() => setCurrentPage("bl")}
              >
                <Text color={`accent underline`} font={`font-semibold`}>
                  Business Loan
                </Text>
              </div>
            </div>
            <div className="py-2 flex justify-between items-center w-3/4">
              <div
                className="cursor-pointer"
                onClick={() => setCurrentPage("fi")}
              >
                <Text color={`accent underline`} font={`font-semibold`}>
                  Financing
                </Text>
              </div>
              <div
                className="cursor-pointer"
                onClick={() => setCurrentPage("isf")}
              >
                <Text color={`accent underline`} font={`font-semibold`}>
                  Islamic Financing
                </Text>
              </div>
            </div>
            <div className=" flex justify-between items-center w-3/4">
              <div
                className=" cursor-pointer"
                onClick={() => setCurrentPage("inv")}
              >
                <Text color={`accent underline`} font={`font-semibold`}>
                  Investment
                </Text>
              </div>
            </div>
          </div>
        </div>
      )}
      {currentPage === "pl" && <PersonalFAQ setCurrentPage={setCurrentPage} />}
      {currentPage === "bl" && <BusinessFAQ setCurrentPage={setCurrentPage} />}
      {currentPage === "fi" && <FinanceFAQ setCurrentPage={setCurrentPage} />}
      {currentPage === "isf" && <IslamicFAQ setCurrentPage={setCurrentPage} />}
      {currentPage === "inv" && (
        <InvestmentFAQ setCurrentPage={setCurrentPage} />
      )}
    </SectionLayout>
  );
}

export default FAQPage;
