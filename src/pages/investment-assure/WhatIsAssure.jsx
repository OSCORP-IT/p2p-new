import SectionLayout from "../../ui/SectionLayout";
import Peer from "../../assets/peer.png";
import SubTitle from "../../components/SubTitle";
import Text from "../../components/Text";
function WhatIsAssure() {
  return (
    <SectionLayout>
      <div className="w-full flex flex-wrap sm:flex-nowrap items-center py-5 tab:py-8 px-4 tab:px-0">
        <div className="bg-white shadow-allSide shadow-gray-200 rounded-md w-full sm:w-1/3 px-6 mb-4 sm:mb-0 sm:px-0">
          <img
            src={Peer}
            alt="peer illustrator"
            className="object-cover rounded-md m-auto"
          />
        </div>
        <div className="w-full sm:w-2/3 flex justify-end">
          <div className="px-2 sm:px-8 tab:px-0 tab:w-5/6">
            <SubTitle align={"text-center sm:text-left"}>
              What is FINTECH Assure?
            </SubTitle>

            <Text align={"text-center sm:text-left"} padding={"py-2"}>
              While we ensure we match investors with creditworthy Issuers, we
              understand that there may be times where Issuers may not be able
              to fulfill their payment obligations. This is where CapBay Assure
              comes in, giving you, our investors, the assurance that your
              principal and interest will be guaranteed – even in the event of
              an issuer default.
            </Text>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

export default WhatIsAssure;
