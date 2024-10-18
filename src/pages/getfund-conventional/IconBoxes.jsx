import GearSix from "../../icon/GearSix";
import UsersThree from "../../icon/UsersThree";
import Wallet from "../../icon/Wallet";
import MoneyWavy from "../../icon/MoneyWavy";
import Heading2 from "../../components/Heading2";
import Heading1 from "../../components/Heading1";
import SectionLayout from "../../ui/SectionLayout";
function IconBoxes() {
  return (
    <SectionLayout>
      <div className="pb-8">
        <Heading1 align={`text-center `} color={`text-titleColor`}>
          Whichever stage your business is in, we have the right financing
          solutions to help you
        </Heading1>
      </div>
      <div className="w-full flex flex-wrap items-start justify-center gap-6">
        <div className="w-full sm:w-[48%] sm:h-[185px] rounded-md shadow-allSide shadow-gray-200 p-6 flex gap-4 items-start">
          <div className="p-2.5 border-2 border-primary rounded-md">
            <GearSix />
          </div>
          <div>
            <Heading2 padding={`py-0`}>
              In need of cash to execute projects?
            </Heading2>
            <ul className="text-sm sm:text-base font-normal pl-4 pt-2 list-disc">
              <li>Letter of Credit Financing</li>
              <li>Purchase Order Financing</li>
            </ul>
          </div>
        </div>
        <div className="w-full sm:w-[48%] sm:h-[185px] rounded-md shadow-allSide shadow-gray-200 p-6 flex gap-4 items-start">
          <div className="p-2.5 border-2 border-primary rounded-md">
            <UsersThree />
          </div>
          <div>
            <Heading2 padding={`py-0`}>
              In the process of accepting a tender?
            </Heading2>
            <ul className="text-sm sm:text-base font-normal pt-2">
              <li>Letter of Credit Financing</li>
            </ul>
          </div>
        </div>
        <div className="w-full sm:w-[48%] sm:h-[185px] rounded-md shadow-allSide shadow-gray-200 p-6 flex gap-4 items-start">
          <div className="p-2.5 border-2 border-primary rounded-md">
            <Wallet />
          </div>
          <div>
            <Heading2 padding={`py-0`}>
              Is experiencing cash flow difficulties from delayed payment terms?
            </Heading2>
            <ul className="text-sm sm:text-base font-normal pt-2">
              <li>Invoice Factoring</li>
            </ul>
          </div>
        </div>
        <div className="w-full sm:w-[48%] sm:h-[185px] rounded-md shadow-allSide shadow-gray-200 p-6 flex gap-4 items-start">
          <div className="p-2.5 border-2 border-primary rounded-md">
            <MoneyWavy />
          </div>
          <div>
            <Heading2 padding={`py-0`}>
              In need of additional cash to operate?
            </Heading2>
            <ul className="text-sm sm:text-base font-normal pl-4 pt-2 list-disc">
              <li>Term Financing</li>
              <li>Bank Guarantee Financing</li>
              <li>Collateral-Backed Financing</li>
            </ul>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

export default IconBoxes;
