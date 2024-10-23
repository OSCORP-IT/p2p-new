import SectionLayout from "../../ui/SectionLayout";
import SubHeading from "../../components/SubHeading";
import GetFundIs from "../../assets/GetFundIs.png";
import GetFundIsRotate from "../../assets/GetFundIsRotate.png";
import CheckFat from "../../icon/CheckFat";
import Heading1 from "../../components/Heading1";

function FinancialSolutionIslamic() {
  return (
    <SectionLayout>
      <div className="py-4">
        <Heading1 align={`text-center leading-tight `}>
          Whichever stage your business is in, we have the right financing
          solutions to help you
        </Heading1>
      </div>
      <div className="w-full flex flex-wrap tab:flex-nowrap items-center py-5 tab:py-8 px-4 tab:px-0">
        <div className="hidden tab:block rounded-md w-full tab:w-1/3 px-6 mb-4 sm:mb-0 sm:px-0">
          <img
            src={GetFundIs}
            alt="peer illustrator"
            className="object-cover rounded-md m-auto"
          />
        </div>
        <div className="tab:hidden rounded-md w-full tab:w-1/3 sm:px-6 mb-4">
          <img
            src={GetFundIsRotate}
            alt="peer illustrator"
            className="object-cover rounded-md m-auto"
          />
        </div>
        <div className="w-full tab:w-2/3 sm:pl-6">
          <SubHeading
            color={`accent`}
            align={`w-max border-b border-accent`}
            font={`font-normal`}
          >
            ISLAMIC RECEIVABLES FINANCING
          </SubHeading>
          <SubHeading padding={`pt-4 pb-6`}>
            Is your business experiencing cash flow difficulties from delayed
            payment terms?
          </SubHeading>
          <div className="flex gap-2 items-center pl-4 pb-8">
            <CheckFat />
            <SubHeading font={`font-normal`}>Invoice Factoring-i</SubHeading>
          </div>
          <SubHeading
            color={`accent`}
            align={`w-max border-b border-accent`}
            font={`font-normal`}
          >
            ISLAMIC WORKING CAPITAL FINANCE
          </SubHeading>
          <SubHeading padding={`pt-4 pb-8`}>
            Is your business in need of additional cash to operate and/or
            expand?
          </SubHeading>
          <div className="w-full border border-gray-400 rounded-md flex items-start justify-between p-3 sm:p-6">
            <div className="w-1/2 sm:w-[55%] pr-1 sm:pr-4 border-r border-r-gray-400">
              <div className="flex gap-2 items-center">
                <CheckFat />
                <SubHeading font={`font-normal`}>
                  Bank Guarantee Financing-i
                </SubHeading>
              </div>
              <div className="flex gap-2 items-center py-2">
                <CheckFat />
                <SubHeading font={`font-normal`}>
                  Letter of Credit Financing-i
                </SubHeading>
              </div>
              <div className="flex gap-2 items-center pb-2">
                <CheckFat />
                <SubHeading font={`font-normal`}>
                  Purchase Order Financing-i
                </SubHeading>
              </div>
              <div className="flex gap-2 items-center">
                <CheckFat />
                <SubHeading font={`font-normal`}>Term Financing-i</SubHeading>
              </div>
            </div>
            <div className="w-1/2 sm:w-[45%] pl-2 sm:pl-6">
              <div className="flex gap-2 items-center">
                <CheckFat />
                <SubHeading font={`font-normal`}>Revolving Credit-i</SubHeading>
              </div>
              <div className="flex gap-2 items-center py-2">
                <CheckFat />
                <SubHeading font={`font-normal`}>Dealer Financing-i</SubHeading>
              </div>
              <div className="flex gap-2 items-center">
                <CheckFat />
                <SubHeading font={`font-normal`}>
                  Dealer Inventory Financing-i
                </SubHeading>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

export default FinancialSolutionIslamic;
