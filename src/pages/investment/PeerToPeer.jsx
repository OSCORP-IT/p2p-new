import SectionLayout from "../../ui/SectionLayout";
import Peer from "../../assets/peer.png";
import SubTitle from "../../components/SubTitle";
import Text from "../../components/Text";

function PeerToPeer() {
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
              What Is Peer-to-Peer Financing?
            </SubTitle>
            <Text align={"text-center sm:text-left"} padding={"py-2"}>
              Peer-to-Peer (P2P) Financing is a form of crowdfunding that
              enables SMEs to obtain financing directly from investors. This
              simplifies the financing process for SMEs while providing
              alternative investment opportunities with attractive returns for
              investors.
            </Text>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

export default PeerToPeer;
