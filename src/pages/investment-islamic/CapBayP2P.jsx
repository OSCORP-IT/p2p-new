import SectionLayout from "../../ui/SectionLayout";
import Peer from "../../assets/peer.png";
import SubTitle from "../../components/SubTitle";
import Text from "../../components/Text";

function CapBayP2P() {
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
            <SubTitle
              align={"text-center sm:text-left"}
              color={`text-[#0c6304]`}
            >
              CapBay P2P Islamic
            </SubTitle>
            <Text align={"text-center sm:text-left"} padding={"py-2"}>
              Your preferred P2P platform now offers a fully automated
              Shariah-compliant option!
            </Text>
            <Text align={"text-center sm:text-left"} padding={"py-2"}>
              Begin your investment journey with CapBay P2P Islamic today for a
              fully Shariah-compliant portfolio aligned with ethical financial
              principles and competitive returns.
            </Text>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

export default CapBayP2P;
