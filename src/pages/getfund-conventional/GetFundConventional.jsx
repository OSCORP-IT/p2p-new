import Text from "../../components/Text";
import SectionLayout from "../../ui/SectionLayout";
import ConventionalHero from "./ConventionalHero";
import Peer from "../../assets/peer.png";
import IconBoxes from "./IconBoxes";
function GetFundConventional() {
  return (
    <>
      <ConventionalHero />
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
              <Text align={"text-center sm:text-left"} padding={"py-2"}>
                CapBay&apos;s Supply Chain Financing offers quick and efficient
                financing that can help businesses free up cash trapped in the
                supply chain. With no additional collateral required and
                hassle-free application experience, we are able to extend
                financing at an attractive rate that meets the needs of your
                business — securing financing from us is as easy as A-B-C.
              </Text>
            </div>
          </div>
        </div>
      </SectionLayout>
      <IconBoxes />
    </>
  );
}

export default GetFundConventional;
