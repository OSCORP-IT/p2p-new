import SectionLayout from "../../ui/SectionLayout";
import Peer from "../../assets/peer.png";
import Text from "../../components/Text";
import Heading1 from "../../components/Heading1";
function OurMission() {
  return (
    <SectionLayout>
      <div className="w-full flex flex-wrap sm:flex-nowrap items-center py-5 tab:py-8 px-4 tab:px-0">
        <div className="w-full sm:w-2/3 flex justify-start">
          <div className="px-2 sm:px-8 tab:px-0 tab:w-5/6">
            <Heading1 align={"text-center sm:text-left"}>Our Mission</Heading1>
            <Text align={"text-center sm:text-left"} padding={"pt-4 pb-2"}>
              Sed ullamcorper dui at risus viverra, nec cursus leo ullamcorper.
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos congue dui nec dui lobortis
              maximus. Curabitur pretium, libero vitae pharetra rhoncus, tellus
              urna auctor orci, eu dictum diam diam nec neque. Pellentesque.
            </Text>
            <Text align={"text-center sm:text-left"} padding={"py-2"}>
              Sed ullamcorper dui at risus viverra, nec cursus leo ullamcorper.
              Class aptent taciti sociosqu ad litora torquent per conubia.
            </Text>
          </div>
        </div>
        <div className="bg-white shadow-allSide shadow-gray-200 rounded-md w-full sm:w-1/3 px-6 mb-4 sm:mb-0 sm:px-0">
          <img
            src={Peer}
            alt="peer illustrator"
            className="object-cover rounded-md m-auto"
          />
        </div>
      </div>
    </SectionLayout>
  );
}

export default OurMission;
