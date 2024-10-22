import Title from "../../components/Title";
import Text from "../../components/Text";
import GearSix from "../../icon/GearSix";
import Heading2 from "../../components/Heading2";
import steps from "../../assets/3Steps.png";
import SectionLayout from "../../ui/SectionLayout";
import CollateralHero from "./CollateralHero";
import FinancialFuture from "./FinancialFuture";
import ReserveFundNumbers from "./ReserveFundNumbers";
import PaperClip from "../../icon/PaperClip";
import MoneySend from "../../icon/MoneySend";

function GetfFundCollateral() {
  return (
    <>
      <CollateralHero />
      <FinancialFuture />
      <ReserveFundNumbers />
      <SectionLayout>
        <div className="w-11/12 tab:w-3/5 laptop:w-1/2 m-auto py-2">
          <Title align={"text-center"} padding={"pb-4"}>
            3 Simple Steps to give your business the cash flow head start!
          </Title>
          <img src={steps} alt="3 steps" className=" m-auto object-cover" />
        </div>
        <div className="flex items-start justify-between gap-8 py-8">
          <div className="w-full sm:w-1/3 sm:h-[260px] rounded-md shadow-allSide shadow-gray-200 p-6 flex gap-4 items-start">
            <div className="p-1.5 border-2 border-primary rounded-md">
              <GearSix />
            </div>
            <div>
              <Heading2 padding={`pb-2`}>Step 1: Submit Application</Heading2>
              <Text>
                Submit your details in the application form and we will be in
                touch with you to discuss further on your financing
                requirements.
              </Text>
            </div>
          </div>
          <div className="w-full sm:w-1/3 sm:h-[260px] rounded-md shadow-allSide shadow-gray-200 p-6 flex gap-4 items-start">
            <div className="p-1.5 border-2 border-primary rounded-md">
              <PaperClip />
            </div>
            <div>
              <Heading2 padding={`pb-2`}>Step 2: Receive Offer</Heading2>
              <Text>
                Our team will evaluate your application and upon our approval, a
                Letter of Offer will be sent to you
              </Text>
            </div>
          </div>
          <div className="w-full sm:w-1/3 sm:h-[260px] rounded-md shadow-allSide shadow-gray-200 p-6 flex gap-4 items-start">
            <div className="p-1.5 border-2 border-primary rounded-md">
              <MoneySend />
            </div>
            <div>
              <Heading2 padding={`pb-2`}>Step 3: Fund Disbursement</Heading2>
              <Text>
                If you are satisfied with our offer, simply sign the Letter of
                Offer and we will make the necessary preparations for your fund
                disbursement!
              </Text>
            </div>
          </div>
        </div>
      </SectionLayout>
    </>
  );
}

export default GetfFundCollateral;
